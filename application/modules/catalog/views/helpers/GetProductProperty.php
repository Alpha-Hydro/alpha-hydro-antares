<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 16.09.2015
 * Time: 11:32
 */
class Zend_View_Helper_getProductProperty extends Zend_View_Helper_Abstract
{
    function GetProductProperty($product_id){

        $products = new Catalog_Model_Mapper_Products();
        $productsParams = new Catalog_Model_Mapper_ProductParams();
        $select = $productsParams->getDbTable()->select()->order('order ASC');

        $entries = $products->findProductParams($product_id, $select);

        return $entries;
    }
}