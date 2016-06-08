<?php

class Catalog_Model_Mapper_Categories
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
     * @return Model_DbTable_Categories
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Catalog_Model_DbTable_Categories');
        
        return $this->_dbTable;
    }

    /**
     * @param Catalog_Model_Categories $categories
     * @return $this
     */
    public function save(Catalog_Model_Categories $categories)
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
     * @param Catalog_Model_Categories $categories
     * @return Catalog_Model_Categories|null
     */
    public function find($id, Catalog_Model_Categories $categories)
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
        	$entry = new Catalog_Model_Categories();
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
     * @param Catalog_Model_Categories $categories
     * @return array
     */
    protected function _getDbData(Catalog_Model_Categories $categories)
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
     * @param Catalog_Model_Categories $entry
     * @return Catalog_Model_Categories
     */
    protected function _setDbData($row, Catalog_Model_Categories $entry)
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

    /**
     * @param $id
     * @return array|null
     * @throws Zend_Db_Table_Exception
     */
    public function fetchTreeParentCategories($id)
    {
        $table = $this->getDbTable();

        $result = array();
        do{
            $category = $table->find($id);
            if(0 == count($category)){
                return null;
            }
            $category = $category->current();
            $result[] = $category;
            $id = $category->parent_id;
        }
        while($id != 0);

        return $result;
    }

    /**
     * @param null $id
     * @return array|false|mixed|null
     */
    public function fetchTreeSubCategories($id = null)
    {
        $cache = Zend_Registry::get('cache');

        //$cache->remove('treeCategories');

        if(is_null($id))
            $id = 0;

        $select = $this->getDbTable()->select()
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');


        $entries = $this->fetchSubCategoriesRel($id, $select);

        if(0 == count($entries))
            return null;


        if(!$result = $cache->load('treeCategories')) {
            $result = array();
            foreach ($entries as $entry) {
                $id = $entry->id;

                $productMapper = new Catalog_Model_Mapper_Products();
                $selectProduct = $productMapper->getDbTable()->select()
                    ->where('deleted != ?', 1)
                    ->where('active != ?', 0)
                    ->order('sorting ASC');
                $products = $this->fetchProductsRel($id, $selectProduct);
                if(!is_null($products))
                    $entry->setCountProducts(count($products));

                $subCategories = $this->fetchSubCategoriesRel($id, $select);
                if(!is_null($subCategories))
                    $entry->setSubCategories($this->fetchTreeSubCategories($id));

                $result[] = $entry;
            }
            $cache->save($result, 'treeCategories');
        }

        return $result;
    }

    /**
     * @param null $id
     * @return array|false|mixed|null
     */
    public function fetchTreeSubCategoriesInArray($id = null)
    {
        $cache = Zend_Registry::get('cache');

        //$cache->remove('treeCategoriesArray');

        if(is_null($id))
            $id = 0;

        $select = $this->getDbTable()->select()
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');


        $entries = $this->fetchSubCategoriesRel($id, $select);

        if(0 == count($entries))
            return null;


        if(!$result = $cache->load('treeCategoriesArray')) {
            $result = array();
            foreach ($entries as $entry) {
                $id = $entry->id;
                $data = $this->_getDbData($entry);
                $data['id'] = $id;

                $productMapper = new Catalog_Model_Mapper_Products();
                $selectProduct = $productMapper->getDbTable()->select()
                    ->where('deleted != ?', 1)
                    ->where('active != ?', 0)
                    ->order('sorting ASC');
                $products = $this->fetchProductsRel($id, $selectProduct);
                if(!is_null($products))
                    $data['countProducts'] = count($products);

                $subCategories = $this->fetchSubCategoriesRel($id, $select);
                if(!is_null($subCategories))
                    $data['subCategories'] = $this->fetchTreeSubCategoriesInArray($id);

                $result[] = $data;
            }
            $cache->save($result, 'treeCategoriesArray');
        }

        return $result;
    }

    /**
     * @param $value
     * @param Catalog_Model_Categories $categories
     * @return Catalog_Model_Categories|null
     */
    public function findByFulPath($value, Catalog_Model_Categories $categories)
    {
        $table = $this->getDbTable();

        $select = $table->select()
            ->where("full_path = ?", $value);

        $result = $table->fetchAll($select);

        if (0 == count($result)) {
            return null;
        }

        $row = $result->current();
        $entry = $this->_setDbData($row, $categories);

        return $entry;
    }

    /**
     * @param $id
     * @param null|Zend_Db_Table_Select $select
     * @return array|null
     * @throws Zend_Db_Table_Exception
     * @throws Zend_Db_Table_Row_Exception
     */
    public function fetchProductsRel($id, Zend_Db_Table_Select $select = null)
    {
        $result = $this->getDbTable()->find($id);
        if (0 == count($result)) {
            return null;
        }
        $category = $result->current();

        $resultSet = $category->findManyToManyRowset("Catalog_Model_DbTable_Products", "Catalog_Model_DbTable_CategoriesXref",
            null, null, $select);

        $entries = array();
        $products = new Catalog_Model_Mapper_Products();
        foreach ($resultSet as $row) {
            $entry = new Catalog_Model_Products();
            $entry = $products->_setDbData($row, $entry);
            $entries[] = $entry;
        }

        return $entries;
    }

    /**
     * @param $id
     * @param null $result
     * @param Zend_Db_Table_Select|null $select
     * @return array
     */
    public function fetchAllProductsCategory($id, &$result = null, Zend_Db_Table_Select $select = null)
    {
        if(is_null($result))
            $result = array();

        $productsCategory = $this->fetchProductsRel($id, $select);

        if($productsCategory)
            $result = array_merge($result, $productsCategory);

        $subCategories = $this->fetchSubCategoriesRel($id);
        if($subCategories){
            foreach ($subCategories as $subCategory) {
                $result = array_merge($result, $this->fetchProductsRel($subCategory->getId()));
                $children = $this->fetchSubCategoriesRel($subCategory->getId());
                if($children){
                    $this->fetchAllProductsCategory($subCategory->getId(), $result);
                }
            }
        }

        return $result;
    }

    /**
     * @param $id
     * @param Zend_Db_Table_Select|null $select
     * @return array|null
     * @throws Zend_Db_Table_Exception
     * @throws Zend_Db_Table_Row_Exception
     */
    public function fetchSubCategoriesRel($id, Zend_Db_Table_Select $select = null)
    {
        $entries = array();
        if($id != 0){
            $result = $this->getDbTable()->find($id);
            if(0 == count($result))
                return null;

            $category = $result->current();
            $resultSet = $category->findDependentRowset('Catalog_Model_DbTable_Categories',null, $select);

            foreach ($resultSet as $row) {
                $entry = new Catalog_Model_Categories();
                $entry = $this->_setDbData($row, $entry);
                $entries[] = $entry;
            }
        }
        else{
            if(is_null($select))
                $select = $this->getDbTable()->select();

            $select->where('parent_id = ?', 0);
            $entries = $this->fetchAll($select);
        }

        return $entries;
    }

    /**
     * @param $id
     * @return mixed|string
     */
    public function getFullPathById($id)
    {
        $fullPath = '';
        if($id != 0){
            $entry = $this->find($id, new Catalog_Model_Categories());
            if($entry)
                $fullPath = $entry->getFullPath();
        }

        return $fullPath;
    }

}

