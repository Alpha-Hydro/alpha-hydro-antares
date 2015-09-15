<?php

class Model_DbTable_Subproducts extends Zend_Db_Table_Abstract
{

    protected $_name = 'subproducts';

    protected $_dependentTables = array(
        'Model_DbTable_SubproductParamsValues',
    );

    protected $_referenceMap = array(
        'SubproductsRel' => array(
            'columns'           =>  array('parent_id'),
            'refTableClass'     =>  'Model_DbTable_Products',
            'refColumns'        =>  array('id'),
            'onDelete'			=>	self::CASCADE
        )
    );



}

