<?php

class Zend_View_Helper_getProductsCategory
{
    /**
     * @param int $category_id
     * @param int $active
     * @return array
     */
    function GetProductsCategory($category_id, $active = 0){

        $categories = new Model_Mapper_Categories();

        $productsMapper = new Model_Mapper_Products();
        $select = $productsMapper->getDbTable()->select();
        $select->where('active != ?', $active)
            ->order('sorting ASC');

        $entries = $categories->fetchProductsRel($category_id, $select);

        return $entries;
    }
}