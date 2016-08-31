<?php

class Manufacture_IndexController extends Zend_Controller_Action
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
     */
    protected $_redirector = null;

    protected $_count_item_on_page = null;

    protected $_categories = array();

    protected $_authUser = null;

    public function init()
    {
        $this->_count_item_on_page = 6;

        $this->_pagesMapper = new Pages_Model_Mapper_Pages();
        $this->_redirector = $this->_helper->getHelper('Redirector');

        $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $select = $manufactureCategoriesMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $manufactureCategories = $manufactureCategoriesMapper->fetchAll($select);
        $this->setCategories($manufactureCategories);

        $this->_authUser = Zend_Auth::getInstance()->getIdentity();
        if(!is_null($this->_authUser))
            $this->view->authUser = $this->_authUser;

        $this->view->assign(array(
            'categories' => $this->getCategories(),
            'adminPath' => 'manufacture-categories/',
            'title' => 'Наше производство'
        ));

    }

    public function indexAction()
    {
        $page = $this->pageModule();

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $id = ($this->getRequest()->getParam('json') != '')
                ?$this->getRequest()->getParam('json')
                :$page->getId();

            $this->forward('json', 'pages', 'admin', array('id' => $id));
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'pages',
                    'id' => $page->getId(),
                    'active' => $page->getActive(),
                    'deleted' => $page->getDeleted()
                )
            ));
        }

        $this->view->page = $page;

        $meta_title = (!$page->getMetaTitle())
            ? $page->getTitle()
            : $page->getMetaTitle();
        $this->view->meta_title = $meta_title;

        $meta_description = (!$page->getMetaDescription())
            ? 'Альфа-Гидро - Производство.'
            : $page->getMetaDescription();
        $this->view->meta_description = $meta_description;

        $meta_keywords = (!$page->getMetaKeywords())
            ? 'расчет, проектировка, производство, ремонт, гидростанций, гидроцилиндров, опрессовка, гидравлического оборудования'
            : $page->getMetaKeywords();
        $this->view->meta_keywords = $meta_keywords;
    }

    public function categoriesAction()
    {
        $request = $this->getRequest();
        $categoryPath = $request->getParam('fullPath');

        $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategory = $manufactureCategoriesMapper
            ->findByPath($categoryPath, new Manufacture_Model_ManufactureCategories());

        if(is_null($manufactureCategory)){
            //throw new Zend_Controller_Action_Exception("Страница не найдена", 404);
            $this->forward('view');
            return;
        }

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $this->forward('json', 'manufacture-categories', 'admin', array('id' => $manufactureCategory->getId()));
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'manufacture-categories',
                    'id' => $manufactureCategory->getId(),
                    'active' => $manufactureCategory->getActive(),
                    'deleted' => $manufactureCategory->getDeleted()
                )
            ));
        }

        if($manufactureCategory->getDeleted() != '0'){
            if (!Zend_Auth::getInstance()->hasIdentity())
                throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

            $this->_redirector->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'action' => 'index'
            ),'adminEdit', true);
        }

        $this->view->assign(array(
            'category' => $manufactureCategory,
            'adminPath' => 'manufacture-categories/list/'.$manufactureCategory->getId(),
            'title' => $manufactureCategory->getTitle()
        ));

        if($manufactureCategory->getActive() != '1'
            && !Zend_Auth::getInstance()->hasIdentity())
            throw new Zend_Controller_Action_Exception("Раздел временно не доступен", 500);


        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
        $select = $manufactureMapper->getDbTable()->select()
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $manufactureItems = $manufactureCategoriesMapper->fetchManufactureRel($manufactureCategory->getId(), $select);

        if(!empty($manufactureItems)){
            if(count($manufactureItems) > $this->getCountItemOnPage()){
                $manufacturePages = array_chunk($manufactureItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($manufacturePages))
                    $currentPage = count($manufacturePages)-1;

                $manufactureItems = $manufacturePages[$currentPage];
                $this->view->countPage = count($manufacturePages);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->manufactureItems = $manufactureItems;

        $meta_description = ($manufactureCategory->getMetaDescription() != '')
            ? $manufactureCategory->getMetaDescription()
            : 'Альфа-Гидро - Производство. '.$manufactureCategory->getTitle();
        $this->view->meta_description = $meta_description;

        $meta_keywords = ($manufactureCategory->getMetaKeywords() != '')
            ? $manufactureCategory->getMetaKeywords()
            : 'гидростанции, гидроустановка, насосные станции, напорные станции, гидроприводы, гидравлика, гидроцилиндры';
        $this->view->meta_keywords = $meta_keywords;
    }

    public function viewAction()
    {
        $request = $this->getRequest();
        $fullPath = $request->getParam('fullPath');

        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
        $manufacture = $manufactureMapper
            ->findByFullPath($fullPath, new Manufacture_Model_Manufacture());

        if(is_null($manufacture))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $this->forward('json', 'manufacture', 'admin', array('id' => $manufacture->getId()));
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'manufacture',
                    'id' => $manufacture->getId(),
                    'active' => $manufacture->getActive(),
                    'deleted' => $manufacture->getDeleted()
                )
            ));
        }

        $manufactureCategoryMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategory = $manufactureCategoryMapper->find(
            $manufacture->getCategoryId(),
            new Manufacture_Model_ManufactureCategories()
        );

        if($manufacture->getDeleted() != '0'){
            if(!Zend_Auth::getInstance()->hasIdentity() && $manufacture->getDeleted() != '0')
                throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

            $this->_redirector->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'action' => 'list',
                'id' => $manufactureCategory->getId()
            ), 'adminEdit', true);
        }

        $this->view->assign(array(
            'manufacture' => $manufacture,
            'meta_description' => $manufacture->getMetaDescription(),
            'meta_keywords' => $manufacture->getMetaKeywords(),
            'adminPath' => 'manufacture/edit/'.$manufacture->getId(),
            'category' => $manufactureCategory,
        ));

        if($manufacture->getActive() != '1' && !Zend_Auth::getInstance()->hasIdentity()){
            $this->view->assign(array(
                'title' => $manufacture->getTitle(),
            ));
            throw new Zend_Controller_Action_Exception("Страница временно не доступна", 403);
        }
    }

    /**
     * @param null $count_item_on_page
     * @return Manufacture_IndexController
     *
     */
    public function setCountItemOnPage($count_item_on_page)
    {
        $this->_count_item_on_page = $count_item_on_page;
        return $this;
    }

    /**
     * @return null
     *
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }

    /**
     * @param array $categories
     * @return Manufacture_IndexController
     *
     */
    public function setCategories($categories)
    {
        $this->_categories = $categories;
        return $this;
    }

    /**
     * @return array
     *
     */
    public function getCategories()
    {
        return $this->_categories;
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







