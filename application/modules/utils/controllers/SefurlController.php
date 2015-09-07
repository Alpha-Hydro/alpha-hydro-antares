<?php

class Utils_SefurlController extends Zend_Controller_Action
{

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('dublicate-categories-path', 'html')
            ->addActionContext('generate-categories-path', 'html')
            ->addActionContext('generate-categories-full-path', 'html')
            ->addActionContext('generate-products-path', 'html')
            ->addActionContext('generate-products-full-path', 'html')
            ->initContext('html');
    }

    public function indexAction()
    {
        //Categories
        $categories = new Application_Model_Mapper_Categories();
        //пустые значения Path
        $this->view->freeCategoriesPath = $categories->fetchFreeRowColumn('path');
        //пустые значения Full Path
        $this->view->freeCategoriesFullPath = $categories->fetchFreeRowColumn('full_path');
        //дубликаты Path
        $this->view->dubleCategoriesPath = $categories->fetchDublicateRowColumn('path');
        //дубликаты Full Path
        $this->view->dubleCategoriesFullPath = $categories->fetchDublicateRowColumn('full_path');

        //Products
        $products = new Application_Model_Mapper_Products();
        //пустые значения Path
        $this->view->freeProductsPath = $products->fetchFreeRowColumn('path');
        //пустые значения Full Path
        $this->view->freeProductsFullPath = $products->fetchFreeRowColumn('full_path');
        //дубликаты Path
        $this->view->dubleProductsPath = $products->fetchDublicateRowColumn('path');
        //дубликаты Full Path
        $this->view->dubleProductsFullPath = $products->fetchDublicateRowColumn('full_path');

    }

    /**
     * Ajax Data
     */
    public function dublicateCategoriesPathAction()
    {
        $categories = new Application_Model_Mapper_Categories();
        $this->view->entries = $categories->fetchDublicateRowColumn('path');
    }

    /**
     * Ajax Data
     */
    public function generateCategoriesPathAction()
    {
        $filterSlugify = new Vlmeh_Filter_Slugify();
        $categories = new Application_Model_Mapper_Categories();
        $freePathCategories = $categories->fetchFreeRowColumn('path');

        foreach($freePathCategories as $category){
            $path = $category->path;
            if(empty($path))
                $category->path = $filterSlugify->filter($category->name);
            $mapper = new Application_Model_Mapper_Categories();
            $mapper->save($category);
        }

        $this->view->entries = $categories->fetchFreeRowColumn('path');
    }

    /**
     * Ajax Data
     */
    public function generateCategoriesFullPathAction()
    {
        $categories = new Application_Model_Mapper_Categories();
        $freePathCategories = $categories->fetchFreeRowColumn('full_path');

        foreach ($freePathCategories as $category) {
            $id = $category->id;
            $fullPath = $categories->generateFullPath($id);
            $category->fullPath = $fullPath;

            //if($this->_validateColumn($category->fullPath, 'categories', 'full_path')){
                $mapper = new Application_Model_Mapper_Categories();
                $mapper->save($category);
            //}
        }

        $this->view->entries = $categories->fetchFreeRowColumn('full_path');

    }

    public function generateProductsPathAction()
    {
        $filterSlugify = new Vlmeh_Filter_Slugify();
        $products = new Application_Model_Mapper_Products();
        $freePathProducts = $products->fetchFreeRowColumn('path');

        foreach ($freePathProducts as $product) {
            $filterSlugify->setSeparator('-');
            $product->path = $filterSlugify->filter($product->sku);

            if(!$this->_validateColumn($product->path, 'products', 'path')){
                $filterSlugify->setSeparator('_');
                $product->path = $filterSlugify->filter($product->sku);
            }

            $mapper = new Application_Model_Mapper_Products();
            $mapper->save($product);
        }

        return $this->view->entries = $products->fetchFreeRowColumn('path');

    }

    public function generateProductsFullPathAction()
    {
        $products = new Application_Model_Mapper_Products();
        $freePathProducts = $products->fetchFreeRowColumn('full_path');

        foreach ($freePathProducts as $product) {
            $product->fullPath = $products->generateFullPath($product->id);
            $mapper = new Application_Model_Mapper_Products();
            $mapper->save($product);
        }

        return $this->view->entries = $products->fetchFreeRowColumn('full_path');
    }

    /**
     * @param $value string
     * @param $table
     * @param $field string
     * @return bool
     *
     *
     */
    private function _validateColumn($value, $table, $field)
    {
        $validator = new Zend_Validate_Db_NoRecordExists(
            array(
                'table' => $table,
                'field' => $field,
            )
        );

        return $validator->isValid($value);
    }

}













