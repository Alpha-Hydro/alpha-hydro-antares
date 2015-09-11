<?php

class Model_DbTable_Categories extends Zend_Db_Table_Abstract
{

    protected $_name = 'categories';

    /**
     * Подчиненная таблица
     * Dependent tables
     */
    protected $_dependentTables = array('Model_DbTable_CategoriesXref');

}

