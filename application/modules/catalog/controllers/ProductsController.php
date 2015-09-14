<?php

class Catalog_ProductsController extends Zend_Controller_Action
{

    protected $_fullPath = null;

    public function init()
    {
        $request = $this->getRequest();
        $this->_fullPath =  $request->getParam('fullPath');
    }

    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categories = new Model_Mapper_Categories();
        $category = new Model_Categories();

        $category = $categories->findByFulPath($fullPath, $category);

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $current_category_id = $category->getId();

        $productsMapper = new Model_Mapper_Products();
        $select = $productsMapper->getDbTable()->select()->order('sorting ASC');

        $entries = $categories->fetchProductsRel($current_category_id, $select);

        if(!empty($entries))
            $this->view->entries = $entries;

        $this->view->full_path_category = $this->getFullPath();
        $this->view->title = $category->getName();
        $this->view->current_category = $current_category_id;
    }

    public function viewAction()
    {
        $fullPath =  $this->getFullPath();
        $products = new Model_Mapper_Products();
        $product = new Model_Products();

        $product = $products->findByFulPath($fullPath, $product);

        if(is_null($product))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $categoryRel = $products->findCategoryRel($product->getId(), new Model_Categories());

        $this->view->current_category = $categoryRel->getId();
    }

    /**
     * @return null
     *
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }


}



