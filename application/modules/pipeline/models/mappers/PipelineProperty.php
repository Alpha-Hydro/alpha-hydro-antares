<?php

class Pipeline_Model_Mapper_PipelineProperty
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
     * @return Pipeline_Model_DbTable_PipelineProperty
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Pipeline_Model_DbTable_PipelineProperty');
        
        return $this->_dbTable;
    }

    /**
     * @param Pipeline_Model_PipelineProperty $pipelineproperty
     * @return $this
     */
    public function save(Pipeline_Model_PipelineProperty $pipelineproperty)
    {
        $data = $this->_getDbData($pipelineproperty);
        
        if (null == ($id = $pipelineproperty->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Pipeline_Model_PipelineProperty $pipelineProperty
     * @return null|Pipeline_Model_PipelineProperty
     * @throws Zend_Db_Table_Exception
     */
    public function find($id, Pipeline_Model_PipelineProperty $pipelineProperty)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $pipelineProperty);
        
        return $entry;
    }


    /**
     * @param $sistemName
     * @param Pipeline_Model_PipelineProperty $pipelineProperty
     * @return null|Pipeline_Model_PipelineProperty
     */
    public function findBySistemName($sistemName, Pipeline_Model_PipelineProperty $pipelineProperty)
    {
        $select = $this->getDbTable()->select();
        $select->where('sistem_name = ?', $sistemName);
        $row = $this->getDbTable()->fetchRow($select);

        if(is_null($row))
            return null;

        $entry = $this->_setDbData($row, $pipelineProperty);

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
        	$entry = new Pipeline_Model_PipelineProperty();
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
     * @param Pipeline_Model_PipelineProperty $pipelineproperty
     * @return array
     */
    protected function _getDbData(Pipeline_Model_PipelineProperty $pipelineproperty)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $pipelineproperty->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Pipeline_Model_PipelineProperty $entry
     * @return Pipeline_Model_PipelineProperty
     */
    public function _setDbData($row, Pipeline_Model_PipelineProperty $entry)
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

