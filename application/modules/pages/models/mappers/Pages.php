<?php

class Pages_Model_Mapper_Pages
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
     * @return Pages_Model_DbTable_Pages
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Pages_Model_DbTable_Pages');
        
        return $this->_dbTable;
    }

    /**
     * @param Pages_Model_Pages $pages
     * @return $this
     */
    public function save(Pages_Model_Pages $pages)
    {
        $data = $this->_getDbData($pages);
        
        if (null == ($id = $pages->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Pages_Model_Pages $pages
     * @return Pages_Model_Pages|null
     */
    public function find($id, Pages_Model_Pages $pages)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $pages);
        
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
        	$entry = new Pages_Model_Pages();
        	$entry = $this->_setDbData($row, $entry);
        	$entries[] = $entry;
        }
        
        return $entries;
    }

    public function findByPath($value, Pages_Model_Pages $pages, Zend_Db_Select $select = null)
    {
        $table = $this->getDbTable();
        if(is_null($select))
            $select = $table->select();

        $select->where("path = ?", $value);


        $result = $table->fetchAll($select);

        if (0 == count($result)) {
            return null;
        }

        $row = $result->current();
        $entry = $this->_setDbData($row, $pages);

        return $entry;
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
     * @param Pages_Model_Pages $pages
     * @return array
     */
    protected function _getDbData(Pages_Model_Pages $pages)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $pages->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Pages_Model_Pages $entry
     * @return Pages_Model_Pages
     */
    protected function _setDbData($row, Pages_Model_Pages $entry)
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

