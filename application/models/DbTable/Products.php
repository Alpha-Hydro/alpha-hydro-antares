<?php

class Model_DbTable_Products extends Zend_Db_Table_Abstract
{

    protected $_name = 'products';

    /**
     * Подчиненная таблица
     * Dependent tables
     */
    protected $_dependentTables = array('Model_DbTable_CategoriesXref', 'Model_DbTable_ProductParams');
}

