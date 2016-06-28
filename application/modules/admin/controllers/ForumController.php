<?php

include_once 'BaseController.php';

class ForumController extends BaseController
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

    protected $_forums = array();
    protected $_noReply = array();

    protected $_currentUrl = null;

    public function init()
    {
        $this->_redirector = $this->_helper->getHelper('Redirector');
        $this->_modelMapper = new Forum_Model_Mapper_Forum();
        $this->_model = new Forum_Model_Forum();

        $this->_userAuth = Zend_Auth::getInstance()->getIdentity();
        
        $this->setNoReplyForums();
        $this->setCurrentUrl(
            ($this->getRequest()->getParam('page'))
                ?'/admin/forum/?page='.$this->getRequest()->getParam('page')
                :'/admin/forum'
            );

        $this->view->assign('user', $this->_userAuth);
    }

    public function indexAction()
    {
        if($this->_request->getParam('page'))
            $this->view->assign('currentPage', $this->_request->getParam('page'));

        $noReply = $this->getNoReply();
        if(!empty($noReply))
            $this->view->assign('no_reply',$noReply);

        $pageItems = $this->getForums();

        if(!empty($pageItems)){
            $pageItems = $this->paginationView($pageItems);
            $this->view->assign('forums',$pageItems);
        }

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'На сайт',
                'uri' => ($this->getRequest()->getParam('page'))
                    ?'/forum/?page='.$this->getRequest()->getParam('page')
                    :'/forum/'
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $editUrlOptions = array(
            'module' => 'admin',
            'controller' => 'pages',
            'action' => 'edit',
            'id' => $this->getPageModule('forum')->getId(),
        );

        $this->view->assign(array(
            'editUrlOptions' => $editUrlOptions,
            'container_nav' => $containerNav
        ));
    }

    public function deleteAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId)){
            $this->_redirector->gotoUrlAndExit($this->getCurrentUrl());
            return;
        }

        $item = $this->_modelMapper->find($itemId, new Forum_Model_Forum());

        if(is_null($item))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $item->setActive(0);
        $item->setDeleted(1);
        $this->_modelMapper->save($item);

        //$this->_redirector->gotoSimpleAndExit('index',null, null, array('page' => $this->_request->getParam('page')));
        $this->_redirector->gotoUrlAndExit($this->getCurrentUrl());
    }

    public function replyAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId)){
            $this->_redirector->gotoUrlAndExit($this->getCurrentUrl());
            return;
        }


        $quest = $this->_modelMapper->find($itemId, new Forum_Model_Forum());

        $item = new Forum_Model_Forum();

        $item->setParentId($itemId);
        $item->setCategory($quest->getCategory());
        $item->setAuthor($this->_userAuth->name);
        $item->setEmail($this->_userAuth->email);
        $item->setActive(1);
        $item->setDeleted(0);

        $markdown = $this->_request->getParam('contentMarkdown');
        if($markdown && $markdown != ''){
            $context_html = Michelf\MarkdownExtra::defaultTransform($markdown);

            $item->setContent($context_html);
            $item->setContentMarkdown($markdown);

            $this->_modelMapper->save($item);

            $this->sendReplyMail($quest, $item);
        }

        $this->_redirector->gotoUrlAndExit($this->getCurrentUrl());
    }

    public function editAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId)){
            $this->_redirector->gotoUrlAndExit($this->getCurrentUrl());
            return;
        }


        $item = $this->_modelMapper->find($itemId, new Forum_Model_Forum());

        $oldContent = $item->getContent();

        $markdown = $this->_request->getParam('contentMarkdown');
        if($markdown && $markdown != ''){
            $context_html = Michelf\MarkdownExtra::defaultTransform($markdown);

            $item->setContent($context_html);
            $item->setContentMarkdown($markdown);

            $this->_modelMapper->save($item);

            if($this->_userAuth->email != $item->getEmail())
                $this->sendEditMail($item, $oldContent);
        }

        $this->_redirector->gotoUrlAndExit($this->getCurrentUrl());
    }

    public function sendEditMail(Forum_Model_Forum $reply, $oldContent)
    {
        $mail = new Zend_Mail("UTF-8");
        $mail->setFrom($this->_userAuth->email, "ALPHA-HYDRO admin");
        $mail->setSubject('Редактирование сообщения на форуме ALPHA-HYDRO');

        $textHtml = '<h2>Ваше сообщение было отредактировано админимтратором.</h2>';
        $textHtml .= '<p><b>Ваше сообщение:</b></p>';
        $textHtml .= '<p>'.$reply->getTimestamp().'</p>';
        $textHtml .= '<div>'.$oldContent.'</div>';
        $textHtml .= '<p></p>';
        $textHtml .= '<p><b>Новое сообщение:</b></p>';
        $textHtml .= '<p>'.date(DATE_RSS).'</p>';
        $textHtml .= '<div>'.$reply->getContent().'</div>';
        $textHtml .= '<p>Отредактировал: '.$this->_userAuth->name.' ('.$this->_userAuth->email.')</p>';

        $mail->setBodyHtml($textHtml);
        $mail->addTo($reply->getEmail());
        $mail->addBcc(array(
                "fra@alpha-hydro.com",
                "kma@alpha-hydro.com",
                "admin@alpha-hydro.com",
            )
        );
        $mail->send();

        return $this;
    }

    /**
     * @param Forum_Model_Forum $question
     * @param Forum_Model_Forum $reply
     * @return $this
     * @throws Zend_Mail_Exception
     */
    public function sendReplyMail(Forum_Model_Forum $question, Forum_Model_Forum $reply)
    {
        //Письмо администратору и пользователю
        $mailToAdmin = new Zend_Mail("UTF-8");
        $mailToAdmin->setFrom("info@alpha-hydro.com", "ALPHA-HYDRO info");
        $mailToAdmin->setSubject('Ответ на сообщение с форума ALPHA-HYDRO');

        $textHtml = '<p><b>Вопрос:</b></p>';
        $textHtml .= '<p>'.$question->getTimestamp().'</p>';
        $textHtml .= '<div>'.$question->getContent().'</div>';
        $textHtml .= '<p>Автор: '.$question->getAuthor().' ('.$question->getEmail().')</p>';
        $textHtml .= '<p></p>';
        $textHtml .= '<p><b>Ответ:</b></p>';
        $textHtml .= '<p>'.$reply->getTimestamp().'</p>';
        $textHtml .= '<div>'.$reply->getContent().'</div>';
        $textHtml .= '<p>Ответил: '.$reply->getAuthor().' ('.$reply->getEmail().')</p>';

        $mailToAdmin->setBodyHtml($textHtml);
        $mailToAdmin->addTo($question->getEmail());
        $mailToAdmin->addBcc(array(
                "fra@alpha-hydro.com",
                "kma@alpha-hydro.com",
                "admin@alpha-hydro.com",
            )
        );
        $mailToAdmin->send();

        return $this;
    }

    /**
     * @return $this
     */
    public function setNoReplyForums()
    {
        $select = $this->_modelMapper->getDbTable()->select();
        $select->where('parent_id is null')
            ->where('deleted != ?', 1)
            ->order('timestamp DESC');
        $forumItems = $this->_modelMapper->fetchAll($select);

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
        $result = array();
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
     * @param array $topics
     * @return ForumController
     */
    public function setForums($topics)
    {
        $this->_forums = $topics;
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
     * @param array $noReply
     * @return ForumController
     */
    public function setNoReply($noReply)
    {
        $this->_noReply = $noReply;
        return $this;
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
     * @return Admin_ForumController
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

}

