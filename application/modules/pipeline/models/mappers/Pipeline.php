<?php

class Pipeline_Model_Mapper_Pipeline
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
     * @return Pipeline_Model_DbTable_Pipeline
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Pipeline_Model_DbTable_Pipeline');
        
        return $this->_dbTable;
    }

    /**
     * @param Pipeline_Model_Pipeline $pipeline
     * @return $this
     */
    public function save(Pipeline_Model_Pipeline $pipeline)
    {
        $data = $this->_getDbData($pipeline);
        
        if (null == ($id = $pipeline->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Pipeline_Model_Pipeline $pipeline
     * @return Pipeline_Model_Pipeline|null
     */
    public function find($id, Pipeline_Model_Pipeline $pipeline)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $pipeline);
        
        return $entry;
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
        	$entry = new Pipeline_Model_Pipeline();
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
     * @param Pipeline_Model_Pipeline $pipeline
     * @return array
     */
    protected function _getDbData(Pipeline_Model_Pipeline $pipeline)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $pipeline->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Pipeline_Model_Pipeline $entry
     * @return Pipeline_Model_Pipeline
     */
    protected function _setDbData($row, Pipeline_Model_Pipeline $entry)
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

    /**
     * @param $value
     * @param Pipeline_Model_Pipeline $pipeline
     * @return null|Pipeline_Model_Pipeline
     */
    public function findByFulPath($value, Pipeline_Model_Pipeline $pipeline)
    {
        $table = $this->getDbTable();

        $select = $table->select()
            ->where("full_path = ?", $value);

        $result = $table->fetchAll($select);

        if (0 == count($result)) {
            return null;
        }

        $row = $result->current();
        $entry = $this->_setDbData($row, $pipeline);

        return $entry;
    }

    /**
     * @param $id
     * @param Zend_Db_Table_Select|null $select
     * @return Pipeline_Model_Pipeline[]|null
     */
    public function fetchPropertyRel($id, Zend_Db_Table_Select $select = null)
    {
        $result = $this->getDbTable()->find($id);
        if (0 == count($result)) {
            return null;
        }
        $item = $result->current();

        $resultSet = $item->findManyToManyRowset("Pipeline_Model_DbTable_PipelineProperty", "Pipeline_Model_DbTable_PipelinePropertyValues",
            null, null, $select);

        $entries = array();
        $property = new Pipeline_Model_Mapper_PipelineProperty();
        foreach ($resultSet as $row) {
            $entry = new Pipeline_Model_PipelineProperty();
            $entry = $property->_setDbData($row, $entry);
            $entries[] = $entry;
        }

        return $entries;
    }
}

