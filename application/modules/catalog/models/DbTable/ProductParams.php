<?php

class Catalog_Model_DbTable_ProductParams extends Zend_Db_Table_Abstract
{

    protected $_name = 'product_params';

    protected $_referenceMap = array(
        'ProductsRel' => array(
            'columns'           =>  array('product_id'),
            'refTableClass'     =>  'Catalog_Model_DbTable_Products',
            'refColumns'        =>  array('id'),
            'onDelete'			=>	self::CASCADE
        )
    );


}

