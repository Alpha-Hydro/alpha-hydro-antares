<?php

class Model_DbTable_SubproductParamsValues extends Zend_Db_Table_Abstract
{

    protected $_name = 'subproduct_params_values';

    protected $_primary = array(
        'subproduct_id',
        'param_id'
    );

    protected $_referenceMap    =   array(
        'ParamsRel' => array(
            'columns'           =>  array('param_id'),
            'refTableClass'     =>  'Model_DbTable_SubproductParams',
            'refColumns'        =>  array('id'),
            'onDelete'			=>	self::CASCADE
        ),
        'SubproductRel' => array(
            'columns'           =>  array('subproduct_id'),
            'refTableClass'     =>  'Model_DbTable_Subproducts',
            'refColumns'        =>  array('id'),
            'onDelete'			=>	self::CASCADE
        )
    );
}

