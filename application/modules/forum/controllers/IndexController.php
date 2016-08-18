<?php

class Forum_IndexController extends Zend_Controller_Action
{
    /**
     * @var Forum_Model_Mapper_Forum
     */
    protected $_modelMapper;

    /**
     * @var Forum_Model_Forum
     */
    protected $_model;

    /**
     * @var Zend_Auth
     */
    protected $_userAuth;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    protected $_category = array();
    protected $_forums = array();
    protected $_noReply = array();

    protected $_currentUrl = null;
    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_redirector = $this->_helper->getHelper('Redirector');
        $this->_modelMapper = new Forum_Model_Mapper_Forum();
        $this->_model = new Forum_Model_Forum();
        $this->_category = $this->_modelMapper->getCategoryArray();

        $this->_userAuth = Zend_Auth::getInstance()->getIdentity();

        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('ask', 'html')
            ->addActionContext('refresh-captcha', 'json')
            ->initContext('html');

        $this->view->adminPath = 'forum/';

        $this->forumItems();
        $this->setCurrentUrl(
            ($this->getRequest()->getParam('page'))
                ?'/forum/?page='.$this->getRequest()->getParam('page')
                :'/forum'
        );
    }

    public function indexAction()
    {
        $page = $this->pageModule();

        if(!is_null($this->_request->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $id = ($this->_request->getParam('json') != '')
                ?$this->getRequest()->getParam('json')
                :$page->getId();

            $this->forward('json', 'pages', 'admin', array('id' => $id));
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $noReply = $this->getNoReply();
            if(!empty($noReply))
                $this->view->assign('no_reply',$noReply);

            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'pages',
                    'id' => $page->getId(),
                    'active' => $page->getActive(),
                    'deleted' => $page->getDeleted()
                )
            ));
        }

        $this->view->title = 'Форум';
        if($this->_request->getParam('section')){
            $this->view->category = $this->_request->getParam('section');
            $this->view->title .= '. '.$this->_category[$this->_request->getParam('section')].'.';
        }

        $pageItems = $this->getForums();
        if(!empty($pageItems)){
            $pageItems = $this->paginationView($pageItems);
            $this->view->assign('forumItems',$pageItems);
        }

        $categoryName = ($this->_request->getParam('section'))
            ? $this->_category[$this->_request->getParam('section')]
            : '';

        $form_ask = new Forum_Form_ForumAsk();

        $this->view->form_ask = $form_ask;
        $this->view->meta_description = 'Альфа-Гидро - Форум. '.$categoryName;
        $this->view->meta_keywords = 'форум, '.strtolower($categoryName);
    }

    public function askAction()
    {
        $request = $this->getRequest();

        $form_ask = new Forum_Form_ForumAsk();
        if($request->isPost()){
            $message = '';
            $error = true;
            if($form_ask->isValid($request->getPost())) {

                $newPost = new Forum_Model_Forum($form_ask->getValues());
                $forumMapper = new Forum_Model_Mapper_Forum();
                $forumMapper->save($newPost);

                $this->clearCache('forum');

                //Письмо администратору
                $this->sendAdminMail($newPost);

                //Письмо пользователю
                $this->sendUserMail($newPost);

                $error = false;
                $message .= 'Ваше сообщение успешно отправлено.' . "<br/>";
                $message .= 'В ближайшее время наши менеджеры Вам на него ответят.';
            }
            else{
                $messages = $form_ask->getMessages();
                foreach ($messages as $messageId => $messageValue) {
                    foreach ($messageValue as $value) {
                        $message .= $value."\n\r";
                    }
                }
            }
            $this->view->error = $error;
            $this->view->message = $message;
        }
    }

    public function sendAdminMail(Forum_Model_Forum $post)
    {
        $mailToAdmin = new Zend_Mail("UTF-8");
        $mailToAdmin->setFrom($post->getEmail(), $post->getAuthor());
        $mailToAdmin->setSubject('Новое сообщение с форума ALPHA-HYDRO');

        $textHtml = '<h1>'.$post->getCategory().'</h1>';
        $textHtml .= '<p>Сообщение: '.$post->getContent().'</p>';
        $textHtml .= '<p>Автор: '.$post->getAuthor().' ('.$post->getEmail().')</p>';

        $mailToAdmin->setBodyHtml($textHtml);
//        $mailToAdmin->addTo("admin@alpha-hydro.com", "ALPHA-HYDRO info");
        $mailToAdmin->addTo("info@alpha-hydro.com", "ALPHA-HYDRO info");
        $mailToAdmin->addBcc(array(
            "fra@alpha-hydro.com",
            "kma@alpha-hydro.com",
            "admin@alpha-hydro.com")
        );
        $mailToAdmin->send();

        return $this;
    }

    public function sendUserMail(Forum_Model_Forum $post)
    {
        $mailToUser = new Zend_Mail("UTF-8");
        $mailToUser->setFrom("info@alpha-hydro.com", "ALPHA-HYDRO info");
        $mailToUser->setSubject('Cообщение на форуме ALPHA-HYDRO');

        $textHtml = '<h3>Вы разместили сообщение на форуме сайта <a href="http://alpha-hydro.com/forum">ALPHA-HYDRO</a></h3>';
        $textHtml .= '<p>Категория: '.$post->getCategory().'</p>';
        $textHtml .= '<p>Сообщение: '.$post->getContent().'</p>';
        $textHtml .= '<p>Ваше сообщение обязательно будет рассмотрено и в ближайшее время наши менеджеры Вам на него ответят.</p>';
        $textHtml .= '<p>Спасибо за проявленный интерес к нашей компании.</p>';

        $mailToUser->setBodyHtml($textHtml);
        $mailToUser->addTo($post->getEmail(), $post->getAuthor());
        //$mailToUser->addTo($form_ask->getValue('email'), $newPost->getAuthor());
        $mailToUser->send();

        return $this;
    }

    public function refreshCaptchaAction()
    {
        $form = new Forum_Form_ForumAsk();
        $captcha = $form->getElement('captcha')->getCaptcha();

        $data = array();

        $data['id']  = $captcha->generate();
        $data['src'] = $captcha->getImgUrl().$captcha->getId().$captcha->getSuffix();

        $this->_helper->json($data);
    }

    public function pageModule()
    {
        $pagesMapper = new Pages_Model_Mapper_Pages();
        $pageCatalogPath = $this->getRequest()->getModuleName();

        $page = $pagesMapper->findByPath($pageCatalogPath, new Pages_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Раздел '".$pageCatalogPath."' не добален в таблицу 'Pages'", 404);

        return $page;
    }

    public function forumItems()
    {
        $select = $this->_modelMapper->getDbTable()->select();
        $select->where('parent_id is null')
            ->where('deleted != ?', 1)
            ->order('timestamp DESC');

        $cache = Zend_Registry::get('cache');
        $cacheName = 'forumItems';

        if($this->_request->getParam('section')){
            $category = $this->_modelMapper->getCategoryArray();
            $select->where('category = ?', $category[$this->_request->getParam('section')]);

            $cacheName = 'forumItems_'.$this->_request->getParam('section');
        }

        if(!$forumItems = $cache->load($cacheName)){
            $forumItems = $this->_modelMapper->fetchAll($select);
            $cache->save($forumItems, $cacheName, array('forum'));
        }

        if(!empty($forumItems)){
            $forums = array();
            $noReply = array();

            /** @var Forum_Model_Forum $forumItem */
            foreach ($forumItems as $forumItem) {
                $topic = array();

                $select->reset()
                    ->where('parent_id = ?', $forumItem->getId())
                    ->where('deleted != ?', 1)
                    ->order('timestamp ASC');

                $reply = $this->_modelMapper->fetchAll($select);

                if(0 !== count($reply)){
                    $topic['question'] = $forumItem;
                    $topic['reply'] = $reply;
                }
                else{
                    $noReply[] = $forumItem;
                }

                if(!empty($topic))
                    $forums[] = $topic;
            }

            $this->setNoReply($noReply);
            $this->setForums($forums);
        }

        return $this;
    }

    /**
     * @param array $pageItems
     * @return array
     */
    public function paginationView(array $pageItems)
    {
        $result = $pageItems;
        if(count($pageItems)> $this->getCountItemOnPage()){

            $pages = array_chunk($pageItems, $this->getCountItemOnPage());

            $currentPage = 0;

            if($this->_request->getParam('page') && $this->_request->getParam('page')>0)
                $currentPage = $this->_request->getParam('page')-1;

            if($this->_request->getParam('page') && $this->_request->getParam('page')>count($pages))
                $currentPage = count($pages)-1;

            $result = $pages[$currentPage];

            $this->view->assign(array(
                'countPage' => count($pages),
                'currentPage' => $currentPage+1
            ));
        }

        return $result;
    }


    /**
     * @param array $forums
     * @return Forum_IndexController
     */
    public function setForums($forums)
    {
        $this->_forums = $forums;
        return $this;
    }

    /**
     * @param array $noReply
     * @return Forum_IndexController
     */
    public function setNoReply($noReply)
    {
        $this->_noReply = $noReply;
        return $this;
    }

    /**
     * @return array
     */
    public function getForums()
    {
        return $this->_forums;
    }

    /**
     * @return array
     */
    public function getNoReply()
    {
        return $this->_noReply;
    }

    /**
     * @param null $currentUrl
     * @return Forum_IndexController
     */
    public function setCurrentUrl($currentUrl)
    {
        $this->_currentUrl = $currentUrl;
        return $this;
    }

    /**
     * @return null
     */
    public function getCurrentUrl()
    {
        return $this->_currentUrl;
    }

    /**
     * @return null
     */
    public function getCountItemOnPage()
    {
        if(is_null($this->_count_item_on_page))
            $this->_count_item_on_page = 10;
        return $this->_count_item_on_page;
    }

    /**
     * @param $tag string
     * @throws Zend_Exception
     *
     */
    public function clearCache($tag)
    {
        $cache = Zend_Registry::get('cache');
        $cache->clean(
            Zend_Cache::CLEANING_MODE_MATCHING_TAG,
            array($tag)
        );
    }

}





