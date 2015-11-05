<?php

class Pipeline_Model_DbTable_PipelinePropertyValues extends Zend_Db_Table_Abstract
{

    protected $_name = 'pipeline_property_values';

    protected $_primary = array(
        'pipeline_id',
        'property_id'
    );

    protected $_referenceMap    =   array(
        'PipelineRel' => array(
            'columns'           =>  array('pipeline_id'),
            'refTableClass'     =>  'Pipeline_Model_DbTable_Pipeline',
            'refColumns'        =>  array('id'),
            'onDelete'			=>	self::CASCADE
        ),
        'PropertyRel' => array(
            'columns'           =>  array('property_id'),
            'refTableClass'     =>  'Pipeline_Model_DbTable_PipelineProperty',
            'refColumns'        =>  array('id'),
            'onDelete'			=>	self::CASCADE
        )
    );
}

