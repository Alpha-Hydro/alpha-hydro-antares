<?php

class Pipeline_Model_DbTable_PipelineProperty extends Zend_Db_Table_Abstract
{

    protected $_name = 'pipeline_property';

    protected $_dependentTables = array(
        'Pipeline_Model_DbTable_PipelinePropertyValues',
    );

}

