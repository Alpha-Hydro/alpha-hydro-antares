<?php

class Application_Model_Mapper_CategoriesXref
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
     * @return Application_Model_DbTable_CategoriesXref
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Application_Model_DbTable_CategoriesXref');
        
        return $this->_dbTable;
    }

    /**
     * @param Application_Model_CategoriesXref $categoriesxref
     * @return $this
     */
    public function save(Application_Model_CategoriesXref $categoriesxref)
    {
        $data = $this->_getDbData($categoriesxref);
        
        if (null == ($id = $categoriesxref->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Application_Model_CategoriesXref $categoriesxref
     * @return Application_Model_CategoriesXref|null
     */
    public function find($id, Application_Model_CategoriesXref $categoriesxref)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $categoriesxref);
        
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
        	$entry = new Application_Model_CategoriesXref();
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
     * @param Application_Model_CategoriesXref $categoriesxref
     * @return array
     */
    protected function _getDbData(Application_Model_CategoriesXref $categoriesxref)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $categoriesxref->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Application_Model_CategoriesXref $entry
     * @return Application_Model_CategoriesXref
     */
    protected function _setDbData($row, Application_Model_CategoriesXref $entry)
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

