<?php

class Media_Model_DbTable_Media extends Zend_Db_Table_Abstract
{

    protected $_name = 'media';

    protected $_referenceMap = array(
        'CategoriesRel' => array(
            'columns'           =>  array('category_id'),
            'refTableClass'     =>  'Media_Model_DbTable_MediaCategories',
            'refColumns'        =>  array('id')
        ),
    );
}

