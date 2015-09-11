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

        /*$table = $categories
            ->getDbTable()
            ->find($current_category_id)
            ->current()
            ->findManyToManyRowset("Model_DbTable_Products", "Model_DbTable_CategoriesXref", null, null, $select)
        ;*/

        $entries = $categories->fetchProductsRel($current_category_id, $select);
        //var_dump(count($entries));

        if(!empty($entries))
            $this->view->entries = $entries;

        $this->view->title = $category->getName();
        $this->view->current_category = $current_category_id;
    }

    /**
     * @return null
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }


}

