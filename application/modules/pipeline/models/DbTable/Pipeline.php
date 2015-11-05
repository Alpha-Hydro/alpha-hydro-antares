<?php

class Pipeline_Model_DbTable_Pipeline extends Zend_Db_Table_Abstract
{

    protected $_name = 'pipeline';

    protected $_dependentTables = array(
        'Pipeline_Model_DbTable_PipelinePropertyValues',
    );

}

