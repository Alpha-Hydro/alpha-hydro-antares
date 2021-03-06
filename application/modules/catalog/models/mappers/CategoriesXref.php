<?php

class Catalog_Model_Mapper_CategoriesXref
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
     * @return Catalog_Model_DbTable_CategoriesXref
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Catalog_Model_DbTable_CategoriesXref');
        
        return $this->_dbTable;
    }

    /**
     * @param Catalog_Model_CategoriesXref $categoriesxref
     * @return $this
     */
    public function save(Catalog_Model_CategoriesXref $categoriesxref)
    {
        $data = $this->_getDbData($categoriesxref);

        $product_id = $categoriesxref->getProductId();
        $category_Id = $categoriesxref->getCategoryId();

        $result = $this->getDbTable()->find($product_id, $category_Id);
        
        if (0 == count($result)) {
        	$data_insert = array(
                'product_id' => $product_id,
                'category_id' => $category_Id
            );
        	$this->getDbTable()->getAdapter()->insert('categories_xref', $data_insert);
        } else {
        	$this->getDbTable()->update($data, array(
                'product_id = ?' => $product_id,
                'category_id = ?' => $category_Id
            ));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Catalog_Model_CategoriesXref $categoriesxref
     * @return Catalog_Model_CategoriesXref|null
     */
    public function fetchByProductId($id, Catalog_Model_CategoriesXref $categoriesxref)
    {
        $select = $this->getDbTable()->select()->where('product_id = ?', $id);
        $row = $this->getDbTable()->fetchRow($select);

        if(null == $row)
            return null;

        $entry = $this->_setDbData($row, $categoriesxref);

        return $entry;
    }

    /**
     * @param Catalog_Model_CategoriesXref $categoriesxref
     * @return $this
     */
    public function updateByProductId(Catalog_Model_CategoriesXref $categoriesxref)
    {
        $data = $this->_getDbData($categoriesxref);
        $product_id = $categoriesxref->getProductId();

        $this->getDbTable()->update($data, array(
            'product_id = ?' => $product_id
        ));

        return $this;
    }

    /**
     * @param $product_id
     * @param $category_id
     * @param Catalog_Model_CategoriesXref $categoriesxref
     * @return Catalog_Model_CategoriesXref|null
     * @throws Zend_Db_Table_Exception
     */
    public function find($product_id, $category_id, Catalog_Model_CategoriesXref $categoriesxref)
    {
        $result = $this->getDbTable()->find($product_id, $category_id);
        
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
        	$entry = new Catalog_Model_CategoriesXref();
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
        
        return $primaryKey;
    }

    /**
     * @param Catalog_Model_CategoriesXref $categoriesxref
     * @return array
     */
    protected function _getDbData(Catalog_Model_CategoriesXref $categoriesxref)
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
     * @param Catalog_Model_CategoriesXref $entry
     * @return Catalog_Model_CategoriesXref
     */
    protected function _setDbData($row, Catalog_Model_CategoriesXref $entry)
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

