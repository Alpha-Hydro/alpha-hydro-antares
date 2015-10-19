<?php

class Manufacture_IndexController extends Zend_Controller_Action
{
    protected $_count_item_on_page = null;
    protected $_categories = array();


    public function init()
    {
        $this->_count_item_on_page = 6;

        $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $select = $manufactureCategoriesMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $manufactureCategories = $manufactureCategoriesMapper->fetchAll($select);
        $this->setCategories($manufactureCategories);

        $this->view->categories = $this->getCategories();
    }

    public function indexAction()
    {
        $pageMapper = new Default_Model_Mapper_Pages();
        $page = $pageMapper->find(4, new Default_Model_Pages());

        $this->view->page = $page;

    }

    public function categoriesAction()
    {
        $request = $this->getRequest();
        $categoryPath = $request->getParam('manufacture_path_category');

        $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategory = $manufactureCategoriesMapper
            ->findByPath($categoryPath, new Manufacture_Model_ManufactureCategories());

        if(is_null($manufactureCategory))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->category = $manufactureCategory;

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
    }

    public function viewAction()
    {
        $request = $this->getRequest();
        $categoryPath = $request->getParam('manufacture_path_category');

        $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategory = $manufactureCategoriesMapper
            ->findByPath($categoryPath, new Manufacture_Model_ManufactureCategories());

        if(is_null($manufactureCategory))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->category = $manufactureCategory;

        $manufacturePath = $request->getParam('manufacture_path_item');
        $manufactureFullPath = $categoryPath.'/'.$manufacturePath;

        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
        $manufacture = $manufactureMapper
            ->findByFullPath($manufactureFullPath, new Manufacture_Model_Manufacture());

        if(is_null($manufacture))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->manufacture = $manufacture;

        //var_dump($this->getAllParams());
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


}




