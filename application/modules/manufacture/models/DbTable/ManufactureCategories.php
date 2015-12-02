<?php

class Manufacture_Model_DbTable_ManufactureCategories extends Zend_Db_Table_Abstract
{

    protected $_name = 'manufacture_categories';

    /**
     * Подчиненная таблица
     * Dependent tables
     */
    protected $_dependentTables = array('Manufacture_Model_DbTable_Manufacture');

}

