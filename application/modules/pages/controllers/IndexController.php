<?php

class Pages_IndexController extends Zend_Controller_Action
{
    protected $_page_id = null;
    protected $_page_default_path = null;

    /**
     * @var Pages_Model_Mapper_Pages
     */
    protected $_pagesMapper = null;

    /**
     * @var Pages_Model_Pages
     */
    protected $_page = null;

    public function init()
    {
        $this->setPageDefaultPath('home');

        $this->_pagesMapper = new Pages_Model_Mapper_Pages();
        $this->_page = $this->_pagesMapper->findByPath($this->getPageDefaultPath(), new Pages_Model_Pages());
        $this->setPageId($this->_page->getId());

        $this->view->adminPath = 'pages/';
        $this->view->itemId = $this->getPageId();

    }

    public function indexAction()
    {
        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){
            $id = ($this->getRequest()->getParam('json') != '')
                ?$this->getRequest()->getParam('json')
                :$this->getPageId();

            $this->forward('json', 'pages', 'admin', array('id' => $id));
            return;
        }


        $this->view->page = $this->_page;

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

        $mediaMapper = new Media_Model_Mapper_Media();
        $select = $mediaMapper->getDbTable()->select();

        //News
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id = ?', 2)
            ->order('timestamp DESC')
            ->limit(1,0);
        $newsItem = $mediaMapper->fetchAll($select);

        if(!empty($newsItem))
            $this->view->newsItem = array_shift($newsItem);

        //article
        $select->reset()
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id = ?', 4)
            ->order('timestamp DESC')
            ->limit(1,0);
        $articleItem = $mediaMapper->fetchAll($select);

        if(!empty($articleItem))
            $this->view->articleItem = array_shift($articleItem);

    }

    /**
     * @param null $page_id
     * @return Pages_IndexController
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

    /**
     * @param null $page_default_path
     * @return Pages_IndexController
     */
    public function setPageDefaultPath($page_default_path)
    {
        $this->_page_default_path = $page_default_path;
        return $this;
    }

    /**
     * @return null
     */
    public function getPageDefaultPath()
    {
        return $this->_page_default_path;
    }


}

