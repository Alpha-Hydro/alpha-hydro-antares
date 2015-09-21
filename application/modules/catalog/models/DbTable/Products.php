<?php

class Catalog_Model_DbTable_Products extends Zend_Db_Table_Abstract
{

    protected $_name = 'products';

    /**
     * Подчиненные таблицы
     * Dependent tables
     */
    protected $_dependentTables = array(
        'Catalog_Model_DbTable_CategoriesXref',
        'Catalog_Model_DbTable_ProductParams',
        'Catalog_Model_DbTable_Subproducts',
        'Catalog_Model_DbTable_SubproductParams'
    );
}

