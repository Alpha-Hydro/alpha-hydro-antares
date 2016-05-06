<?php

class Oil_IndexController extends Zend_Controller_Action
{
    protected $_page_id = null;

    /**
     * @var Pages_Model_Mapper_Pages
     *
     */
    protected $_pagesMapper = null;

    /**
     * @var Pages_Model_Pages
     *
     */
    protected $_page = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     */
    protected $_redirector = null;

    /**
     * @var Oil_Model_Mapper_OilCategories
     *
     */
    protected $_categoriesMapper = null;


    protected $_authUser = null;

    public function init()
    {
        $this->view->adminPath = 'oil';

        $this->_pagesMapper = new Pages_Model_Mapper_Pages();
        $this->_redirector = $this->_helper->getHelper('Redirector');

        $this->_categoriesMapper = new Oil_Model_Mapper_OilCategories();

        $this->setCategories();

        $this->setPage();

        $this->_authUser = Zend_Auth::getInstance()->getIdentity();
        if(!is_null($this->_authUser))
            $this->view->authUser = $this->_authUser;
    }

    public function indexAction()
    {
        if(!is_null($this->_request->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){
            $page = $this->pageModule();

            $id = ($this->_request->getParam('json') != '')
                ?$this->_request->getParam('json')
                :$page->getId();

            $this->forward('json', 'pages', 'admin', array('id' => $id));
            return;
        }

    }

    public function setCategories()
    {
        $select = $this->_categoriesMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $oilCategories = $this->_categoriesMapper->fetchAll($select);

        $this->view->categories = $oilCategories;

        return $this;
    }

    public function setPage()
    {
        $pageTitle = 'Масла и очистители';
        $page = $this->_pagesMapper->findByPath('oil', new Pages_Model_Pages());

        if($page){
            $pageTitle = $page->getTitle();

            $this->view->meta_title = $page->getMetaTitle();
            $this->view->meta_description = $page->getMetaDescription();
            $this->view->meta_keywords = $page->getMetaKeywords();

            $this->view->page = $page;
        }

        $this->view->title = $pageTitle;

        return $this;
    }

    public function pageModule()
    {
        $pageModulePath = $this->getRequest()->getModuleName();

        $page = $this->_pagesMapper->findByPath($pageModulePath, new Pages_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Раздел '".$pageModulePath."' не добален в таблицу 'Pages'", 404);

        return $page;
    }
}



