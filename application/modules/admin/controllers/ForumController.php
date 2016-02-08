<?php

class Admin_ForumController extends Zend_Controller_Action
{
    /**
     * @var Forum_Model_Mapper_Forum
     */
    protected $_forumMapper;

    protected $_forums = array();
    protected $_noReply = array();

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_forumMapper = new Forum_Model_Mapper_Forum();

        $this->setCountItemOnPage(10);

        $select = $this->_forumMapper->getDbTable()->select();

        $select->where('parent_id is null')
            ->where('deleted != ?', 1)
            ->order('timestamp DESC');
        $forumItems = $this->_forumMapper->fetchAll($select);

        if(!empty($forumItems)){
            $forums = array();
            $noReply = array();
            /* @var $forumItem Forum_Model_Forum */
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
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $noReply = $this->getNoReply();
        if(!empty($noReply))
            $this->view->assign('no_reply',$noReply);

        $pageItems = $this->getForums();

        if(!empty($pageItems)){
            if(count($pageItems)> $this->getCountItemOnPage()){

                $pages = array_chunk($pageItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($pages))
                    $currentPage = count($pages)-1;

                $pageItems = $pages[$currentPage];
                $this->view->countPage = count($pages);
                $this->view->currentPage = $currentPage+1;
            }
            $this->view->assign('forums',$pageItems);
        }
    }

    public function deleteAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId))
            return $this->_helper->redirector('index');

        $item = $this->_forumMapper->find($itemId, new Forum_Model_Forum());

        if(is_null($item))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $item->setDeleted(1);
        $this->_forumMapper->save($item);

        return $this->_helper->redirector('index');
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

