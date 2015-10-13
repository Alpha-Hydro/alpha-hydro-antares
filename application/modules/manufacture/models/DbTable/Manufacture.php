<?php

class Manufacture_Model_DbTable_Manufacture extends Zend_Db_Table_Abstract
{

    protected $_name = 'manufacture';

    protected $_referenceMap = array(
        'CategoriesRel' => array(
            'columns'           =>  array('category_id'),
            'refTableClass'     =>  'Manufacture_Model_DbTable_ManufactureCategories',
            'refColumns'        =>  array('id')
        ),
    );

}

