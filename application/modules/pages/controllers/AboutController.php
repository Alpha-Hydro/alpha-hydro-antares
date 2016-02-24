<?php

class Pages_AboutController extends Zend_Controller_Action
{

    protected $_page_id = null;

    public function init()
    {
        $this->_page_id = 2;
        $this->view->adminPath = 'pages/edit/'.$this->getPageId();
    }

    public function indexAction()
    {
        $pagesMapper = new Default_Model_Mapper_Pages();
        $page = new Default_Model_Pages();

        $page = $pagesMapper->find($this->getPageId(), $page);

        $this->view->page = $page;
        $this->view->meta_description = $page->getMetaDescription();
        $this->view->meta_keywords = $page->getMetaKeywords();

        $this->view->controllerAdmin = "pages";
        $this->view->dataAdmin = $page->getOptions();
    }


    /**
     * @return null
     */
    public function getPageId()
    {
        return $this->_page_id;
    }

    /**
     * @param mixed $page_id
     * @return AboutController
     */
    public function setPageId($page_id)
    {
        $this->_page_id = $page_id;
        return $this;
    }
}

