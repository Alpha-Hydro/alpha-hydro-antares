<?php

class Catalog_IndexController extends Zend_Controller_Action
{

    protected $_page_id = null;

    /**
     * @var Pages_Model_Mapper_Pages
     * 
     *
     */
    protected $_pagesMapper = null;

    /**
     * @var Pages_Model_Pages
     * 
     *
     */
    protected $_page = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     * 
     *
     */
    protected $_redirector = null;

    /**
     * @var Zend_Auth
     * 
     *
     */
    protected $_auth = null;

    public function init()
    {
        $this->_pagesMapper = new Pages_Model_Mapper_Pages();
        $this->_redirector = $this->_helper->getHelper('Redirector');
        $this->_auth = Zend_Auth::getInstance()->hasIdentity();

        $this->_page = $this->pageModule();

        $this->view->meta_title = (!$this->_page->getMetaTitle())
            ?$this->_page->getTitle()
            :$this->_page->getMetaTitle();
        $this->view->meta_description = (!$this->_page->getMetaDescription())
            ?'Альфа-Гидро - Каталог продукции: Гидравлическое оборудование, гидрокомпоненты, рукава высокого давления, шланги, втулки и фитинги, защита для шлангов, БРС, скобы, трубы, соединительная арматура, краны, манометры, уплотнительная техника.'
            :$this->_page->getMetaDescription();
        $this->view->meta_keywords = (!$this->_page->getMetaKeywords())
            ?'каталог, оборудование, гидрокомпоненты, РВД, шланги, втулки, фитинги, защита для шлангов, БРС, скобы, трубы, арматура, краны, манометры, уплотнители.'
            :$this->_page->getMetaKeywords();

        $this->view->adminPath = 'categories';

        $categories = new Catalog_Model_Mapper_Categories();

        $select = $categories->getDbTable()->select();
        $select->where('parent_id = ?', 0)
            ->where('deleted != ?', 1)
            ->order('sorting ASC');

        if(!$this->_auth) $select->where('active != ?', 0);

        $entries = $categories->fetchAll($select);

        $this->view->entries = $entries;
        
    }

    public function indexAction()
    {
        $pageCatalog = $this->pageModule();

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){


            $id = ($this->getRequest()->getParam('json') != '')
                ?$this->getRequest()->getParam('json')
                :$pageCatalog->getId();

            $this->forward('json', 'pages', 'admin', array('id' => $id));
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'pages',
                    'id' => $pageCatalog->getId(),
                    'active' => $pageCatalog->getActive(),
                    'deleted' => $pageCatalog->getDeleted()
                )
            ));
        }
    }

    /**
     * @return null|Pages_Model_Pages
     * @throws Zend_Controller_Action_Exception
     *
     */
    public function pageModule()
    {
        $pageModulePath = $this->getRequest()->getModuleName();

        $page = $this->_pagesMapper->findByPath($pageModulePath, new Pages_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Раздел '".$pageModulePath."' не добален в таблицу 'Pages'", 404);

        return $page;
    }

    public function articlesAction()
    {
        $this->view->title = 'Справочный материал';
        $this->view->renderPage = '/components/_articles.phtml';
        $this->view->meta_title = $this->view->title.'. '. $this->pageModule()->getTitle().'.';

        if($this->_request->getParam('path')){

            $this->view->renderPage = '/components/_view_module_article.phtml';

            $mediaModelMapper = new Media_Model_Mapper_Media();
            $mediaItem = $mediaModelMapper->findBy('path', $this->_request->getParam('path'));

            if(is_null($mediaItem))
                throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

            $this->view->title = $mediaItem->getName();
            $this->view->mediaItem = $mediaItem;
            $this->view->meta_title = $this->view->title.'. Справочный материал. '.$this->pageModule()->getTitle().'.';
        }

        $this->view->headTitle($this->view->meta_title);
    }
}



