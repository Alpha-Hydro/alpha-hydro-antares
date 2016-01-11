<?php

class Utils_TreeCatalogController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        //Основной массив
        $expArray = array();

        $expArray = $this->fetchCategoriesWithProducts();


        $this->view->array = $expArray;
    }

    /**
     * @param null $category_id
     * @return array
     */
    public function fetchCategoriesWithProducts($category_id = null)
    {
        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $productMapper = new Catalog_Model_Mapper_Products();
        $selectProduct = $productMapper->getDbTable()
            ->select()
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $result = array();

        if(is_null($category_id))
            $category_id = 0;

        $categories = $this->getSubCategories($category_id);
        if(!empty($categories)){
            foreach ($categories as $category) {
                $item['name'] = $category->getName();
                $subCategories = $this->getSubCategories($category->getId());
                if(!empty($subCategories)){
                    $item['subCategories'] = $this->fetchCategoriesWithProducts($category->getId());
                    //$this->fetchCategoriesWithProducts($category->getId());
                }
                $result[] = $item;
            }
        }

        return $result;
    }

    /**
     * @param $category_id
     * @return array
     */
    public function getSubCategories($category_id)
    {
        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $select = $categoryMapper->getDbTable()->select();
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('parent_id = ?', $category_id)
            ->limit(3)
            ->order('sorting ASC');

        $categories = $categoryMapper->fetchAll($select);

        return $categories;
    }

}
