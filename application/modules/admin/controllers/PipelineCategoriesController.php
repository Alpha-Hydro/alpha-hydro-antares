<?php

class Admin_PipelineCategoriesController extends Zend_Controller_Action
{
    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 10;
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $pageMapper = new Pipeline_Model_Mapper_PipelineCategories();

        $select = $pageMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->order('sorting ASC');

        $pageItems = $pageMapper->fetchAll($select);

        if(!empty($pageItems)){
            if(count($pageItems)> $this->getCountItemOnPage()){

                $pages = array_chunk($pageItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($pages))
                    $currentPage = count($pages)-1;

                $pageItems = $pages[$currentPage];
                $this->view->countPage = count($pages);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->pages = $pageItems;
    }

    public function addAction()
    {
        // action body
    }

    public function editAction()
    {
        // action body
    }

    public function deleteAction()
    {
        // action body
    }

    /**
     * @param null $count_item_on_page
     * @return Admin_PipelineCategoriesController
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


}







