<?php

class Zend_View_Helper_getManufactureCategory extends Zend_View_Helper_Abstract
{
    function getManufactureCategory($category_id){
        $manufactureCategoryMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategory = $manufactureCategoryMapper
            ->find($category_id, new Manufacture_Model_ManufactureCategories());

        return $manufactureCategory;
    }
}