<?php

class Manufacture_Model_Mapper_ManufactureCategories
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
     * @return Manufacture_Model_DbTable_ManufactureCategories
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Manufacture_Model_DbTable_ManufactureCategories');
        
        return $this->_dbTable;
    }

    /**
     * @param Manufacture_Model_ManufactureCategories $manufacturecategories
     * @return $this
     */
    public function save(Manufacture_Model_ManufactureCategories $manufacturecategories)
    {
        $data = $this->_getDbData($manufacturecategories);
        
        if (null == ($id = $manufacturecategories->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Manufacture_Model_ManufactureCategories $manufacturecategories
     * @return Manufacture_Model_ManufactureCategories|null
     */
    public function find($id, Manufacture_Model_ManufactureCategories $manufacturecategories)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $manufacturecategories);
        
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
        	$entry = new Manufacture_Model_ManufactureCategories();
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
     * @param Manufacture_Model_ManufactureCategories $manufacturecategories
     * @return array
     */
    protected function _getDbData(Manufacture_Model_ManufactureCategories $manufacturecategories)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $manufacturecategories->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Manufacture_Model_ManufactureCategories $entry
     * @return Manufacture_Model_ManufactureCategories
     */
    protected function _setDbData($row, Manufacture_Model_ManufactureCategories $entry)
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

