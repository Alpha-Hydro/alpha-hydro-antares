<?php

class Zend_View_Helper_getCategory extends Zend_View_Helper_Abstract
{
    function getCategory($category_id, $module){
        $module = ucfirst($module);
        $categoryMapperModel = $module.'_Model_Mapper_'.$module.'Categories';
        $categoryMapper = new $categoryMapperModel();

        $categoryModel = $module.'_Model_'.$module.'Categories';
        $category = $categoryMapper
            ->find($category_id, new $categoryModel());

        return $category;
    }
}