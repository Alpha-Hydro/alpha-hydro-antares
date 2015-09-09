<?php

class Application_Model_Mapper_Categories
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
     * @return Application_Model_DbTable_Categories
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Application_Model_DbTable_Categories');
        
        return $this->_dbTable;
    }

    /**
     * @param Application_Model_Categories $categories
     * @return $this
     */
    public function save(Application_Model_Categories $categories)
    {
        $data = $this->_getDbData($categories);
        
        if (null == ($id = $categories->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Application_Model_Categories $categories
     * @return Application_Model_Categories|null
     */
    public function find($id, Application_Model_Categories $categories)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $categories);
        
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
        	$entry = new Application_Model_Categories();
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
     * @param Application_Model_Categories $categories
     * @return array
     */
    protected function _getDbData(Application_Model_Categories $categories)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $categories->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Application_Model_Categories $entry
     * @return Application_Model_Categories
     */
    protected function _setDbData($row, Application_Model_Categories $entry)
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
     * @param $column string
     * @return array
     */
    public function fetchFreeRowColumn($column)
    {
        $select = $this->getDbTable()->select();
        $select->where($column.' = ?', '')
            ->orWhere($column.' IS NULL');
        $entries = $this->fetchAll($select);

        return $entries;
    }

    /**
     * @param $column string
     * @return array
     */
    public function fetchDublicateRowColumn($column)
    {
        $table = $this->getDbTable();

        $select = $table->select()
            ->from(
                $table->info('name'),
                array('count' => 'COUNT(*)', '*')
            )
            ->group($column)
            ->having('count > 1')
        ;
        $entries   = $this->fetchAll($select);

        return $entries;
    }

    /**
     * @param $id
     * @return string
     */
    public function generateFullPath($id)
    {
        $table = $this->getDbTable();

        $result = array();
        do{
            $category = $table->find($id);
            if(0 == count($category)){
                return null;
            }
            $category = $category->current();
            $result[] = $category->path;
            $id = $category->parent_id;
        }
        while($id != 0);

        if(!empty($result)){
            $result = array_reverse($result);
        }

        return trim(implode('/',$result));
    }

    public function findByFulPath($value, Application_Model_Categories $categories)
    {
        $table = $this->getDbTable();

        $select = $table->select()
            ->where("full_path = ?", $value);

        $result = $resultSet = $table->fetchAll($select);

        if (0 == count($result)) {
            return null;
        }

        $row = $result->current();
        $entry = $this->_setDbData($row, $categories);

        return $entry;
    }

}

