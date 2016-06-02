<?php

class Zend_View_Helper_getCategoryProduct extends Zend_View_Helper_Abstract
{
    function getCategoryProduct($id){
        $productsMapper = new Catalog_Model_Mapper_Products();
        $category = $productsMapper->findCategoryRel($id, new Catalog_Model_Categories());

        return $category;
    }
}