<?php

class Catalog_Model_DbTable_Categories extends Zend_Db_Table_Abstract
{

    protected $_name = 'categories';

    /**
     * Подчиненная таблица
     * Dependent tables
     */
    protected $_dependentTables = array(
        'Catalog_Model_DbTable_CategoriesXref',
        'Catalog_Model_DbTable_Categories'
    );

    /**
     * Relation tables
     */
    protected $_referenceMap = array(
        'CategoriesRel' => array(
            'columns' => array('parent_id'),
            'refTableClass' => 'Catalog_Model_DbTable_Categories',
            'refColumns' => array('id')
        )
    );

}

