<?php

class Manufacture_IndexController extends Zend_Controller_Action
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

    protected $_count_item_on_page = null;
    protected $_categories = array();
    protected $_authUser = null;


    public function init()
    {
        $this->_count_item_on_page = 6;
        //$this->view->adminPath = 'manufacture';

        $this->_pagesMapper = new Pages_Model_Mapper_Pages();
        $this->_redirector = $this->_helper->getHelper('Redirector');

        $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $select = $manufactureCategoriesMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $manufactureCategories = $manufactureCategoriesMapper->fetchAll($select);
        $this->setCategories($manufactureCategories);

        $this->view->categories = $this->getCategories();

        $this->_authUser = Zend_Auth::getInstance()->getIdentity();
        if(!is_null($this->_authUser))
            $this->view->authUser = $this->_authUser;

    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $page = $this->pageModule();

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $id = ($this->getRequest()->getParam('json') != '')
                ?$this->getRequest()->getParam('json')
                :$page->getId();

            $this->forward('json', 'pages', 'admin', array('id' => $id));
            return;
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

        $this->view->category = $manufactureCategory;
        $this->view->adminPath = 'manufacture-categories/edit/'.$manufactureCategory->getId();

        $manufactureItems = $manufactureCategoriesMapper->fetchManufactureRel($manufactureCategory->getId());

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

        $this->view->manufacture = $manufacture;
        $this->view->meta_description = $manufacture->getMetaDescription();
        $this->view->meta_keywords = $manufacture->getMetaKeywords();
        $this->view->adminPath = 'manufacture/edit/'.$manufacture->getId();

        $manufactureCategoryMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategory = $manufactureCategoryMapper->find(
            $manufacture->getCategoryId(),
            new Manufacture_Model_ManufactureCategories()
        );
        $this->view->category = $manufactureCategory;
    }

    /**
     * @param null $count_item_on_page
     * @return Manufacture_IndexController
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

    /**
     * @param array $categories
     * @return Manufacture_IndexController
     */
    public function setCategories($categories)
    {
        $this->_categories = $categories;
        return $this;
    }

    /**
     * @return array
     */
    public function getCategories()
    {
        return $this->_categories;
    }

    /**
     * @return null|Pages_Model_Pages
     * @throws Zend_Controller_Action_Exception
     */
    public function pageModule()
    {
        $pageModulePath = $this->getRequest()->getModuleName();

        $page = $this->_pagesMapper->findByPath($pageModulePath, new Pages_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Раздел '".$pageModulePath."' не добален в таблицу 'Pages'", 404);

        return $page;
    }


}





