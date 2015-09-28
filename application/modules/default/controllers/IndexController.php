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

