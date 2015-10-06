<?php

class Media_Model_DbTable_MediaCategories extends Zend_Db_Table_Abstract
{

    protected $_name = 'media_categories';

    /**
     * Подчиненная таблица
     * Dependent tables
     */
    protected $_dependentTables = array('Media_Model_DbTable_Media');
}

