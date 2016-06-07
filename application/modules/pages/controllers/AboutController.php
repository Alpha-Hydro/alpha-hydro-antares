<?php

class Pages_AboutController extends Zend_Controller_Action
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
        $this->setPageDefaultPath('about');
        $this->_pagesMapper = new Pages_Model_Mapper_Pages();
        $this->_page = $this->_pagesMapper->findByPath($this->getPageDefaultPath(), new Pages_Model_Pages());
        $this->setPageId($this->_page->getId());
        
        
        $this->view->assign(array(
            'adminPath' => 'pages/edit/'.$this->getPageId(),
            'page' => $this->_page,
            'meta_description' => $this->_page->getMetaDescription(),
            'meta_keywords' => $this->_page->getMetaKeywords()
        ));
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

    /**
     * @param null $page_default_path
     * @return Pages_AboutController
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

