<?php

class Media_Model_Mapper_MediaCategories
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
     * @return Media_Model_DbTable_MediaCategories
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Media_Model_DbTable_MediaCategories');
        
        return $this->_dbTable;
    }

    /**
     * @param Media_Model_MediaCategories $mediacategories
     * @return $this
     */
    public function save(Media_Model_MediaCategories $mediacategories)
    {
        $data = $this->_getDbData($mediacategories);
        
        if (null == ($id = $mediacategories->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Media_Model_MediaCategories $mediacategories
     * @return Media_Model_MediaCategories|null
     */
    public function find($id, Media_Model_MediaCategories $mediacategories)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $mediacategories);
        
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
        	$entry = new Media_Model_MediaCategories();
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
     * @param Media_Model_MediaCategories $mediacategories
     * @return array
     */
    protected function _getDbData(Media_Model_MediaCategories $mediacategories)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $mediacategories->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Media_Model_MediaCategories $entry
     * @return Media_Model_MediaCategories
     */
    protected function _setDbData($row, Media_Model_MediaCategories $entry)
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

    public function findByPath($path, Media_Model_MediaCategories $categories)
    {
        $table = $this->getDbTable();
        $select = $table->select()
            ->where('path = ?', $path);

        $result = $table->fetchAll($select);

        if(0 == count($result))
            return null;

        $row = $result->current();
        $entry = $this->_setDbData($row, $categories);

        return $entry;
    }


}

