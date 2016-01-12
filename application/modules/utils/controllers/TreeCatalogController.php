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
        $categoryMapper = new Catalog_Model_Mapper_Categories();

        $treeCategories = $categoryMapper->fetchTreeSubCategories();

        foreach ($treeCategories as $category) {
            $item['name'] = $category->getName();
            $subCategory = $category->getSubCategories();
            $item['subCategory'] = $subCategory;

            $expArray[] = $item;
        }
        $this->view->array = $expArray;
    }

    /**
     * @param null $category_id
     * @return array
     */
    public function fetchCategoriesWithProducts($category_id = null)
    {
        if(is_null($category_id))
            $category_id = 0;

        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $select = $categoryMapper->getDbTable()
            ->select()
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->limit(13)
            ->order('sorting ASC');

        $result = array();
        $categories = $categoryMapper->fetchSubCategoriesRel($category_id, $select);
        $item = array();
        if(!empty($categories)){
            foreach ($categories as $category) {
                $category_id = $category->getId();
                $subCategories = $categoryMapper->fetchSubCategoriesRel($category_id, $select);
                if(0 == count($subCategories)){
                    //$item[] = $category_id;
                    var_dump($category_id);
                }
                else{
                    $this->fetchCategoriesWithProducts($category_id);
                }
                $result[] = $item;
            }

        }
        /*else{
            $result[] = $category_id;
        }*/


        /*$categories = $this->getSubCategories($category_id);

        if(!empty($categories)){
            $item = array();
            foreach ($categories as $category) {
                $subCategories = $this->getSubCategories($category->getId());
                $item['name'] = $category->getName();
                if(!empty($subCategories)){
                    $item['subCategories'] = $this->fetchCategoriesWithProducts($category->getId());
                }
//                $categoryProducts = $categoryMapper->fetchProductsRel($category->getId(),$selectProduct);
//                if(!empty($categoryProducts))
//                    $item['products'] = count($categoryProducts);

                $result[] = $item;
            }
        }*/
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
