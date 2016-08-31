<?php

class Oil_OilController extends Zend_Controller_Action
{

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     */
    protected $_redirector = null;

    /**
     * @var Oil_Model_Mapper_Oil
     *
     */
    protected $_itemMapper = null;

    /**
     * @var Oil_Model_Mapper_OilCategories
     *
     */
    protected $_categoriesMapper = null;

    /**
     * @var Oil_Model_OilCategories
     *
     */
    protected $_category = null;

    protected $_authUser = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_redirector = new Zend_Controller_Action_Helper_Redirector();
        $this->_itemMapper = new Oil_Model_Mapper_Oil();
        $this->_categoriesMapper = new Oil_Model_Mapper_OilCategories();
        $this->_count_item_on_page = 10;
        
        $this->_category = $this->_request->getParam('category');

        $this->_authUser = Zend_Auth::getInstance()->getIdentity();
        if(!is_null($this->_authUser))
            $this->view->authUser = $this->_authUser;
    }

    public function indexAction()
    {
        $category = $this->_category;

        if(!$category)
            $this->_redirector->gotoSimpleAndExit('index', 'index');

        $select = $this->_itemMapper->getDbTable()->select();
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id = ?', $category->getId())
            ->order('sorting ASC');

        $pagesItems = $this->_itemMapper->fetchAll($select);

        if(!empty($pagesItems)){
            $this->view->pageItems = $this->paginationPage($pagesItems);
        }

        $this->setMetaHead($category);

        $this->view->category = $category;
    }

    public function viewAction()
    {
        $pageItem = $this->_itemMapper->findByFullPath(
            $this->_request->getParam('fullPath'),
            new Oil_Model_Oil()
        );

        if(is_null($pageItem))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->getJson($pageItem);
        $this->setParamsDataItem($pageItem);
        $this->checkDeleted($pageItem);

        $category = $this->_categoriesMapper
            ->find($pageItem->getCategoryId(), new Oil_Model_OilCategories());

        $this->setMetaHead($pageItem);


        $this->view->assign(array(
            'category' => $category,
            'title' => $pageItem->getTitle(),
            'pageItem' => $pageItem
        ));

        $this->checkActive($pageItem);
    }


    /**
     * @param Oil_Model_Oil $pageItem
     * @return $this
     * @throws Zend_Controller_Action_Exception
     */
    public function checkDeleted(Oil_Model_Oil $pageItem)
    {
        if($pageItem->getDeleted() != '0'){
            if (!Zend_Auth::getInstance()->hasIdentity())
                throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

            $this->_redirector->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'oil-categories',
                'action' => 'list',
                'id' => $pageItem->getCategoryId()
            ),'adminEdit', true);
        }

        return $this;
    }

    /**
     * @param Oil_Model_Oil $pageItem
     * @return $this
     * @throws Zend_Controller_Action_Exception
     */
    public function checkActive(Oil_Model_Oil $pageItem)
    {
        if($pageItem->getActive() != '1' && !Zend_Auth::getInstance()->hasIdentity()){
            $this->view->assign(array(
                'title' => $pageItem->getTitle(),
            ));
            throw new Zend_Controller_Action_Exception("Страница временно не доступна", 403);
        }

        return $this;
    }

    /**
     * @param Oil_Model_Oil $pageItem
     * @return $this
     */
    public function getJson(Oil_Model_Oil $pageItem)
    {
        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $this->forward('json', 'oil', 'admin', array('id' => $pageItem->getId()));
        }

        return $this;
    }

    /**
     * @param Oil_Model_Oil $pageItem
     * @return $this
     */
    public function setParamsDataItem(Oil_Model_Oil $pageItem)
    {
        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'oil',
                    'id' => $pageItem->getId(),
                    'active' => $pageItem->getActive(),
                    'deleted' => $pageItem->getDeleted()
                )
            ));
        }

        return $this;
    }

    /**
     * @param $pageItem Oil_Model_Oil|Oil_Model_OilCategories
     * @return $this
     */
    public function setMetaHead($pageItem)
    {
        $meta_title = (!$pageItem->getMetaTitle())
            ? $pageItem->getTitle()
            : $pageItem->getMetaTitle();

        $meta_description = (!$pageItem->getMetaDescription())
            ? $pageItem->getDescription()
            : $pageItem->getMetaDescription();

        $meta_keywords = (!$pageItem->getMetaKeywords())
            ? $pageItem->getMetaTitle()
            : $pageItem->getMetaKeywords();

        $this->view->assign(array(
            'meta_title' => $meta_title,
            'meta_description' => $meta_description,
            'meta_keywords' => $meta_keywords
        ));

        return $this;
    }


    /**
     * @param null $count_item_on_page
     * @return Oil_OilController
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
     * @param $pagesItems
     * @return mixed
     *
     */
    public function paginationPage(&$pagesItems)
    {

        if(count($pagesItems)> $this->getCountItemOnPage()){
            $pageItems = array_chunk($pagesItems, $this->getCountItemOnPage());

            $currentPage = 0;

            if($this->_request->getParam('page') && $this->_request->getParam('page')>0)
                $currentPage = $this->_request->getParam('page')-1;

            if($this->_request->getParam('page') && $this->_request->getParam('page')>count($pageItems))
                $currentPage = count($pageItems)-1;

            $pagesItems = $pageItems[$currentPage];
            $this->view->countPage = count($pageItems);
            $this->view->currentPage = $currentPage+1;
        }

        return $pagesItems;

    }
}



