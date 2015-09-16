<?php

class Model_Mapper_Subproducts
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
     * @return Model_DbTable_Subproducts
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Model_DbTable_Subproducts');
        
        return $this->_dbTable;
    }

    /**
     * @param Model_Subproducts $subproducts
     * @return $this
     */
    public function save(Model_Subproducts $subproducts)
    {
        $data = $this->_getDbData($subproducts);
        
        if (null == ($id = $subproducts->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Model_Subproducts $subproducts
     * @return Model_Subproducts|null
     */
    public function find($id, Model_Subproducts $subproducts)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $subproducts);
        
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
        	$entry = new Model_Subproducts();
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
     * @param Model_Subproducts $subproducts
     * @return array
     */
    protected function _getDbData(Model_Subproducts $subproducts)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $subproducts->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Model_Subproducts $entry
     * @return Model_Subproducts
     */
    public function _setDbData($row, Model_Subproducts $entry)
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
     * @param $id
     * @return array|null
     * @throws Zend_Db_Table_Exception
     */
    public function findSubProductParamValue($id)
    {
        $result = $this->getDbTable()->find($id);

        if (0 == count($result)) {
            return null;
        }

        $db = $this->getDbTable()->getAdapter();
        $select  = $db->select()
            ->from("subproduct_params_values")
            ->join("subproduct_params","subproduct_params_values.param_id = subproduct_params.id")
            ->where('subproduct_id = ?',$id)
            ->order('subproduct_params.order ASC');

        $stmt = $db->query($select);
        $resultSet = array();
        while ($param = $stmt->fetchObject()) {
            $resultSet[] = $param;
        }

        $entries = array();
        $modelMapper = new Model_Mapper_SubproductParamsValues();
        foreach ($resultSet as $row) {
            $entry = new Model_SubproductParamsValues();
            $entry = $modelMapper->_setDbData($row, $entry);
            $entries[] = $entry;
        }

        return $entries;
    }

}

