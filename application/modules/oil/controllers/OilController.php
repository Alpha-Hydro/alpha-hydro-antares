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

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $this->forward('json', 'oil', 'admin', array('id' => $pageItem->getId()));
            return;
        }

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

        $category = $this->_categoriesMapper
            ->find($pageItem->getCategoryId(), new Oil_Model_OilCategories());

        $this->setMetaHead($pageItem);

        $this->view->category = $category;
        $this->view->title = $pageItem->getTitle();
        $this->view->pageItem = $pageItem;
        
    }

    /**
     * @param $pageItem Oil_Model_Oil|Oil_Model_OilCategories
     */
    public function setMetaHead($pageItem)
    {
        $meta_title = (!$pageItem->getMetaTitle())
            ? $pageItem->getTitle()
            : $pageItem->getMetaTitle();
        $this->view->meta_title = $meta_title;

        $meta_description = (!$pageItem->getMetaDescription())
            ? $pageItem->getDescription()
            : $pageItem->getMetaDescription();
        $this->view->meta_description = $meta_description;

        $meta_keywords = (!$pageItem->getMetaKeywords())
            ? $pageItem->getMetaTitle()
            : $pageItem->getMetaKeywords();
        $this->view->meta_keywords = $meta_keywords;
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



