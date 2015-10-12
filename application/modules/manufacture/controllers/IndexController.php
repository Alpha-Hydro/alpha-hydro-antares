<?php

class Manufacture_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $pageMapper = new Default_Model_Mapper_Pages();
        $page = $pageMapper->find(4, new Default_Model_Pages());

        $this->view->page = $page;

        $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $select = $manufactureCategoriesMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $manufactureCategories = $manufactureCategoriesMapper->fetchAll($select);

        if(!empty($manufactureCategories))
            $this->view->manufactureCategories = $manufactureCategories;
    }

    public function categoriesAction()
    {
        $request = $this->getRequest();
        $categoryPath = $request->getParam('manufacture_path_category');
        var_dump($this->getAllParams());
    }

    public function viewAction()
    {
        $request = $this->getRequest();
        var_dump($this->getAllParams());
    }


}





