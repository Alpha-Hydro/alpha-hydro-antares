<?php

class Application_Model_DbTable_Products extends Zend_Db_Table_Abstract
{

    protected $_name = 'products';

    /**
     * Подчиненная таблица
     * Dependent tables
     */
    protected $_dependentTables = array('Application_Model_DbTable_CategoriesXref');
}

