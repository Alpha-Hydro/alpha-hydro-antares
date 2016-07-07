<?php

class Forum_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('ask', 'html')
            ->addActionContext('refresh-captcha', 'json')
            ->initContext('html');

        $this->view->adminPath = 'forum/';
    }

    public function indexAction()
    {
        $this->view->title = 'Форум';

        $request = $this->getRequest();

        $page = $this->pageModule();

        if(!is_null($request->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $id = ($request->getParam('json') != '')
                ?$this->getRequest()->getParam('json')
                :$page->getId();

            $this->forward('json', 'pages', 'admin', array('id' => $id));
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'pages',
                    'id' => $page->getId(),
                    'active' => $page->getActive(),
                    'deleted' => $page->getDeleted()
                )
            ));
        }

        $form_ask = new Forum_Form_ForumAsk();
        $this->view->form_ask = $form_ask;

        $forumMapper = new Forum_Model_Mapper_Forum();
        $select = $forumMapper->getDbTable()->select();
        $select->where('parent_id is null')
            ->where('deleted != ?', 1)
            ->order('timestamp DESC');

        $category = $forumMapper->getCategoryArray();

        if($request->getParam('section')){
            $select->where('category = ?', $category[$request->getParam('section')]);
            $this->view->category = $request->getParam('section');
            $this->view->title .= '. '.$category[$request->getParam('section')].'.';
        }


        $forumItems = $forumMapper->fetchAll($select);

        if(!empty($forumItems)){
            $forums = array();
            foreach ($forumItems as $forumItem) {
                $topic = array();

                $select->reset()
                    ->where('parent_id = ?', $forumItem->getId())
                    ->where('deleted != ?', 1)
                    ->order('timestamp ASC');

                $reply = $forumMapper->fetchAll($select);

                if(0 !== count($reply)){
                    $topic['question'] = $forumItem;
                    $topic['reply'] = $reply;
                }

                if(!empty($topic))
                    $forums[] = $topic;
            }

            $forumPages = array_chunk($forums, 10);

            $currentPage = 0;

            if($request->getParam('page') && $request->getParam('page')>0)
                $currentPage = $request->getParam('page')-1;

            if($request->getParam('page') && $request->getParam('page')>count($forumPages))
                $currentPage = count($forumPages)-1;

            $this->view->countPage = count($forumPages);
            $this->view->currentPage = $currentPage+1;
            $this->view->forumItems = $forumPages[$currentPage];

        }

        $categoryName = ($request->getParam('section'))
            ? $category[$request->getParam('section')]
            : '';

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

}





