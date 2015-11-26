<?php

class Pipeline_Model_Mapper_PipelinePropertyValues
{

    protected $_dbTable = null;

    /**
     * @param $dbTable
     * @return $this
     * @throws Exception
     */
    public function setDbTable($dbTable)
    {
        if (is_string($dbTable))
        	$dbTable = new $dbTable();
        
        if (!$dbTable instanceof Zend_Db_Table_Abstract)
        	throw new Exception('Invalid table data gateway provided');
        
        $this->_dbTable = $dbTable;
        
        return $this;
    }

    /**
     * @return Pipeline_Model_DbTable_PipelinePropertyValues
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Pipeline_Model_DbTable_PipelinePropertyValues');
        
        return $this->_dbTable;
    }

    /**
     * @param Pipeline_Model_PipelinePropertyValues $pipelinepropertyvalues
     * @return $this
     */
    public function save(Pipeline_Model_PipelinePropertyValues $pipelinepropertyvalues)
    {
        $data = $this->_getDbData($pipelinepropertyvalues);

        if (null == ($id = $pipelinepropertyvalues->getId())) {
        	unset($data['id']);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array('id = ?' => $id));
        }

        return $this;
    }


    /**
     * @param $id
     * @return $this
     */
    public function deleted($id)
    {
        $table = $this->getDbTable();
        $where = $table->getAdapter()->quoteInto('id = ?', $id);

        $table->delete($where);

        return $this;
    }

    /**
     * @param $id
     * @param Pipeline_Model_PipelinePropertyValues $pipelinepropertyvalues
     * @return Pipeline_Model_PipelinePropertyValues|null
     */
    public function find($id, Pipeline_Model_PipelinePropertyValues $pipelinepropertyvalues)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $pipelinepropertyvalues);
        
        return $entry;
    }


    /**
     * @param $pipeline_id
     * @param $property_id
     * @param Pipeline_Model_PipelinePropertyValues $pipelinepropertyvalues
     * @return null|Pipeline_Model_PipelinePropertyValues
     * @throws Zend_Db_Table_Exception
     */
    public function findByKey($pipeline_id,
                              $property_id,
                              Pipeline_Model_PipelinePropertyValues $pipelinepropertyvalues)
    {
        $result = $this->getDbTable()->find($pipeline_id, $property_id);
        if (0 == count($result)) {
            return null;
        }

        $row = $result->current();
        $entry = $this->_setDbData($row, $pipelinepropertyvalues);

        return $entry;
    }

    /**
     * @param $pipeline_id
     * @param $property_id
     * @param Pipeline_Model_PipelinePropertyValues $pipelinepropertyvalues
     * @return array|null
     * @throws Zend_Db_Table_Exception
     */
    public function fetchByKey($pipeline_id,
                               $property_id,
                               Pipeline_Model_PipelinePropertyValues $pipelinepropertyvalues)
    {
        $resultSet = $this->getDbTable()->find($pipeline_id, $property_id);
        if (0 == count($resultSet)) {
            return null;
        }

        $entries   = array();
        foreach ($resultSet as $row) {
            $entry = new Pipeline_Model_PipelinePropertyValues();
            $entry = $this->_setDbData($row, $entry);
            $entries[] = $entry;
        }

        return $entries;
    }

    /**
     * @param null $select
     * @return array
     */
    public function fetchAll($select = null)
    {
        $resultSet = $this->getDbTable()->fetchAll($select);
        
        $entries   = array();
        foreach ($resultSet as $row) {
        	$entry = new Pipeline_Model_PipelinePropertyValues();
        	$entry = $this->_setDbData($row, $entry);
        	$entries[] = $entry;
        }
        
        return $entries;
    }

    /**
     * @return mixed
     */
    protected function _getDbPrimary()
    {
        $primaryKey = $this->getDbTable()->info('primary');
        
        return $primaryKey[1];
    }

    /**
     * @param Pipeline_Model_PipelinePropertyValues $pipelinepropertyvalues
     * @return array
     */
    protected function _getDbData(Pipeline_Model_PipelinePropertyValues $pipelinepropertyvalues)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != 'id')
        		$data[$property] = $pipelinepropertyvalues->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Pipeline_Model_PipelinePropertyValues $entry
     * @return Pipeline_Model_PipelinePropertyValues
     */
    protected function _setDbData($row, Pipeline_Model_PipelinePropertyValues $entry)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        foreach ($properties as $property) {
        	$entry->__set($this->_normaliseName($property), $row->$property);
        }
        
        return $entry;
    }

    /**
     * @param $property string
     * @return string
     */
    protected function _normaliseName($property)
    {
        $name = preg_split('~_~', $property);
        $normaliseName = implode(array_map('ucwords', $name));
        
        return $normaliseName;
    }


}

