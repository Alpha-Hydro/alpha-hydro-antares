<?php

class Catalog_Model_DbTable_SubproductParams extends Zend_Db_Table_Abstract
{

    protected $_name = 'subproduct_params';

    protected $_dependentTables = array(
        'Catalog_Model_DbTable_SubproductParamsValues',
    );

    protected $_referenceMap = array(
        'ProductRel' => array(
            'columns'           =>  array('product_id'),
            'refTableClass'     =>  'Catalog_Model_DbTable_Products',
            'refColumns'        =>  array('id'),
            'onDelete'			=>	self::CASCADE
        )
    );
}

