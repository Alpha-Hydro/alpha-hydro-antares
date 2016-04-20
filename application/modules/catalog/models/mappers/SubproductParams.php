<?php

class Catalog_Model_Mapper_SubproductParams
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
     * @return Model_DbTable_SubproductParams
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Catalog_Model_DbTable_SubproductParams');
        
        return $this->_dbTable;
    }

    /**
     * @param Catalog_Model_SubproductParams $subproductparams
     * @return $this
     */
    public function save(Catalog_Model_SubproductParams $subproductparams)
    {
        $data = $this->_getDbData($subproductparams);
        
        if (null == ($id = $subproductparams->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @return $this
     */
    public function delete($id)
    {
        $this->getDbTable()->delete(array($this->_getDbPrimary(). ' = ?' => $id));
        return $this;
    }


    /**
     * @param $id
     * @param Catalog_Model_SubproductParams $subproductparams
     * @return Catalog_Model_SubproductParams|null
     */
    public function find($id, Catalog_Model_SubproductParams $subproductparams)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $subproductparams);
        
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
        	$entry = new Catalog_Model_SubproductParams();
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
     * @param Catalog_Model_SubproductParams $subproductparams
     * @return array
     */
    protected function _getDbData(Catalog_Model_SubproductParams $subproductparams)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $subproductparams->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Catalog_Model_SubproductParams $entry
     * @return Catalog_Model_SubproductParams
     */
    public function _setDbData($row, Catalog_Model_SubproductParams $entry)
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

