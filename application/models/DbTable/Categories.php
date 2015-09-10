<?php

class Application_Model_DbTable_Categories extends Zend_Db_Table_Abstract
{

    protected $_name = 'categories';

    /**
     * Подчиненная таблица
     * Dependent tables
     */
    protected $_dependentTables = array('Application_Model_DbTable_CategoriesXref');

}
