<?php

class Forum_Model_Mapper_Forum
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
     * @return Forum_Model_DbTable_Forum
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Forum_Model_DbTable_Forum');
        
        return $this->_dbTable;
    }

    /**
     * @param Forum_Model_Forum $forum
     * @return $this
     */
    public function save(Forum_Model_Forum $forum)
    {
        $data = $this->_getDbData($forum);
        
        if (null == ($id = $forum->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Forum_Model_Forum $forum
     * @return Forum_Model_Forum|null
     */
    public function find($id, Forum_Model_Forum $forum)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $forum);
        
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
        	$entry = new Forum_Model_Forum();
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
     * @param Forum_Model_Forum $forum
     * @return array
     */
    protected function _getDbData(Forum_Model_Forum $forum)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $forum->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Forum_Model_Forum $entry
     * @return Forum_Model_Forum
     */
    protected function _setDbData($row, Forum_Model_Forum $entry)
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
     * @return array
     */
    public function getCategoryArray()
    {
        $category = array(
            'question' => 'Вопросы и запросы',
            'review' => 'Отзывы и предложения',
            'gravamen' => 'Книга жалоб',
        );
        return $category;
    }
}

