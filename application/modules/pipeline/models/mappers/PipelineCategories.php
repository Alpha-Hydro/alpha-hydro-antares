<?php

class Pipeline_Model_Mapper_PipelineCategories
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
     * @return Pipeline_Model_DbTable_PipelineCategories
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Pipeline_Model_DbTable_PipelineCategories');
        
        return $this->_dbTable;
    }

    /**
     * @param Pipeline_Model_PipelineCategories $pipelinecategories
     * @return $this
     */
    public function save(Pipeline_Model_PipelineCategories $pipelinecategories)
    {
        $data = $this->_getDbData($pipelinecategories);
        
        if (null == ($id = $pipelinecategories->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Pipeline_Model_PipelineCategories $pipelinecategories
     * @return Pipeline_Model_PipelineCategories|null
     */
    public function find($id, Pipeline_Model_PipelineCategories $pipelinecategories)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $pipelinecategories);
        
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
        	$entry = new Pipeline_Model_PipelineCategories();
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
     * @param Pipeline_Model_PipelineCategories $pipelinecategories
     * @return array
     */
    protected function _getDbData(Pipeline_Model_PipelineCategories $pipelinecategories)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $pipelinecategories->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Pipeline_Model_PipelineCategories $entry
     * @return Pipeline_Model_PipelineCategories
     */
    protected function _setDbData($row, Pipeline_Model_PipelineCategories $entry)
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
     * @param Pipeline_Model_PipelineCategories $categories
     * @return null|Pipeline_Model_PipelineCategories
     */
    public function findByFulPath($value, Pipeline_Model_PipelineCategories $categories)
    {
        $table = $this->getDbTable();

        $select = $table->select()
            ->where("full_path = ?", $value);

        $result = $table->fetchAll($select);

        if (0 == count($result)) {
            return null;
        }

        $row = $result->current();
        $entry = $this->_setDbData($row, $categories);

        return $entry;
    }
}

