<?php

class IndexController extends Zend_Controller_Action
{
    protected $_page_id = null;

    public function init()
    {
        $this->_page_id = 1;
    }

    public function indexAction()
    {
        $pagesMapper = new Default_Model_Mapper_Pages();
        $page = new Default_Model_Pages();

        $page = $pagesMapper->find($this->getPageId(), $page);

        $forumMapper = new Forum_Model_Mapper_Forum();
        $select = $forumMapper->getDbTable()->select();
        $select->where('parent_id != ?', 'null')
            ->order('timestamp DESC')
            ->limit(1,0);
        $forumReply = $forumMapper->fetchAll($select);
        if(!empty($forumReply)){

            $forumReply = array_shift($forumReply);
            $forumQuestion = $forumMapper->find($forumReply->getParentId(), new Forum_Model_Forum());

            if(!is_null($forumQuestion)){
                $this->view->forum_question = $forumQuestion;
                $this->view->forum_reply = $forumReply;
            }
        }

        $this->view->page = $page;
    }

    /**
     * @param null $page_id
     * @return IndexController
     */
    public function setPageId($page_id)
    {
        $this->_page_id = $page_id;
        return $this;
    }

    /**
     * @return null
     */
    public function getPageId()
    {
        return $this->_page_id;
    }


}

