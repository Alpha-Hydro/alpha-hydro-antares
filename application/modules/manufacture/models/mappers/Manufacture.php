<?php

class Manufacture_Model_Mapper_Manufacture
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
     * @return Manufacture_Model_DbTable_Manufacture
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Manufacture_Model_DbTable_Manufacture');
        
        return $this->_dbTable;
    }

    /**
     * @param Manufacture_Model_Manufacture $manufacture
     * @return $this
     */
    public function save(Manufacture_Model_Manufacture $manufacture)
    {
        $data = $this->_getDbData($manufacture);
        
        if (null == ($id = $manufacture->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Manufacture_Model_Manufacture $manufacture
     * @return Manufacture_Model_Manufacture|null
     */
    public function find($id, Manufacture_Model_Manufacture $manufacture)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $manufacture);
        
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
        	$entry = new Manufacture_Model_Manufacture();
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
     * @param Manufacture_Model_Manufacture $manufacture
     * @return array
     */
    protected function _getDbData(Manufacture_Model_Manufacture $manufacture)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $manufacture->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Manufacture_Model_Manufacture $entry
     * @return Manufacture_Model_Manufacture
     */
    public function _setDbData($row, Manufacture_Model_Manufacture $entry)
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

    public function findByFullPath($value, Manufacture_Model_Manufacture $manufacture)
    {
        $table = $this->getDbTable();

        $select = $table->select()
            ->where("full_path = ?", $value);

        $result = $table->fetchAll($select);

        if (0 == count($result)) {
            return null;
        }

        $row = $result->current();
        $entry = $this->_setDbData($row, $manufacture);

        return $entry;
    }

}

