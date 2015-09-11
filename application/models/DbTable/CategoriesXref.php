<?php

class Model_DbTable_CategoriesXref extends Zend_Db_Table_Abstract
{

    protected $_name = 'categories_xref';

    /**
     * Primary keys
     */
    protected $_primary = array('product_id', 'category_id');

    protected $_referenceMap = array(
        'CategoriesRel' => array(
            'columns'           =>  array('category_id'),
            'refTableClass'     =>  'Model_DbTable_Categories',
            'refColumns'        =>  array('id')
        ),
        'ProductsRel' => array(
            'columns'           =>  array('product_id'),
            'refTableClass'     =>  'Model_DbTable_Products',
            'refColumns'        =>  array('id')
        ),
    );
}

