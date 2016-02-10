<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class Admin_ForumController extends Zend_Controller_Action
{
    /**
     * @var Forum_Model_Mapper_Forum
     */
    protected $_forumMapper;

    protected $_userAuth;

    protected $_forums = array();
    protected $_noReply = array();

    protected $_count_item_on_page = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    public function init()
    {
        $this->_forumMapper = new Forum_Model_Mapper_Forum();
        $this->_userAuth = Zend_Auth::getInstance()->getIdentity();
        $this->view->user = $this->_userAuth;

        $this->setCountItemOnPage(10);

        $this->setNoReplyForums();

        $this->_redirector = $this->_helper->getHelper('Redirector');

        //Zend_Debug::dump($this->getRequest()->getRequestUri());
    }

    public function indexAction()
    {
        $noReply = $this->getNoReply();
        if(!empty($noReply))
            $this->view->assign('no_reply',$noReply);

        $pageItems = $this->getForums();

        if(!empty($pageItems)){
            $pageItems = $this->paginationView($pageItems);
            $this->view->assign('forums',$pageItems);
        }
    }

    public function deleteAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId)){
            $this->_redirector->gotoSimpleAndExit('index',null, null, array('page' => $request->getParam('page')));
            return;
        }



        $item = $this->_forumMapper->find($itemId, new Forum_Model_Forum());

        if(is_null($item))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        //$date = $item->getTimestamp();

        //$item->setTimestamp($date);
        $item->setActive(0);
        $item->setDeleted(1);
        $this->_forumMapper->save($item);

        $this->_redirector->gotoSimpleAndExit('index',null, null, array('page' => $request->getParam('page')));
    }

    public function replyAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId)){
            $this->_redirector->gotoSimpleAndExit('index',null, null, array('page' => $request->getParam('page')));
            return;
        }


        $quest = $this->_forumMapper->find($itemId, new Forum_Model_Forum());

        $item = new Forum_Model_Forum();

        $item->setParentId($itemId);
        $item->setCategory($quest->getCategory());
        $item->setAuthor($this->_userAuth->name);
        $item->setEmail($this->_userAuth->email);
        $item->setActive(1);
        $item->setDeleted(0);

        $markdown = $request->getParam('contentMarkdown');
        $context_html = Markdown::defaultTransform($markdown);

        $item->setContent($context_html);
        $item->setContentMarkdown($markdown);

        $this->_forumMapper->save($item);

        $this->sendReplyMail($quest, $item);

        $this->_redirector->gotoSimpleAndExit('index',null, null, array('page' => $request->getParam('page')));
    }

    public function editAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId)){
            $this->_redirector->gotoSimpleAndExit('index',null, null, array('page' => $request->getParam('page')));
            return;
        }


        $item = $this->_forumMapper->find($itemId, new Forum_Model_Forum());

        $oldContent = $item->getContent();

        $markdown = $request->getParam('contentMarkdown');
        $context_html = Markdown::defaultTransform($markdown);

        $item->setContent($context_html);
        $item->setContentMarkdown($markdown);

        $this->_forumMapper->save($item);

        if($this->_userAuth->email != $item->getEmail())
            $this->sendEditMail($item, $oldContent);

        $this->_redirector->gotoSimpleAndExit('index',null, null, array('page' => $request->getParam('page')));
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
        $select = $this->_forumMapper->getDbTable()->select();
        $select->where('parent_id is null')
            ->where('deleted != ?', 1)
            ->order('timestamp DESC');
        $forumItems = $this->_forumMapper->fetchAll($select);

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

                $reply = $this->_forumMapper->fetchAll($select);

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
        $request = $this->getRequest();
        if(count($pageItems)> $this->getCountItemOnPage()){

            $pages = array_chunk($pageItems, $this->getCountItemOnPage());

            $currentPage = 0;

            if($request->getParam('page') && $request->getParam('page')>0)
                $currentPage = $request->getParam('page')-1;

            if($request->getParam('page') && $request->getParam('page')>count($pages))
                $currentPage = count($pages)-1;

            $result = $pages[$currentPage];
            $this->view->countPage = count($pages);
            $this->view->currentPage = $currentPage+1;
        }

        return $result;
    }

    /**
     * @param array $topics
     * @return Admin_ForumController
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
     * @return Admin_ForumController
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
     * @param null $count_item_on_page
     * @return Admin_ForumController
     */
    public function setCountItemOnPage($count_item_on_page)
    {
        $this->_count_item_on_page = $count_item_on_page;
        return $this;
    }

    /**
     * @return null
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }


}

