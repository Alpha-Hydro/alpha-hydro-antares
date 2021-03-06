<?php
/**
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

class Catalog_Model_Mapper_Products
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
     * @return Catalog_Model_DbTable_Products
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Catalog_Model_DbTable_Products');
        
        return $this->_dbTable;
    }

    /**
     * @param Catalog_Model_Products $products
     * @return $this
     */
    public function save(Catalog_Model_Products $products)
    {
        $data = $this->_getDbData($products);
        
        if (null == ($id = $products->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Catalog_Model_Products $products
     * @return Catalog_Model_Products|null
     */
    public function find($id, Catalog_Model_Products $products)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $products);
        
        return $entry;
    }

    /**
     * @param null $select
     * @return array
     */
    public function fetchAll($select = null, $isArray = false)
    {
        $resultSet = $this->getDbTable()->fetchAll($select);
        
        $entries   = array();
        foreach ($resultSet as $row) {
        	$entry = new Catalog_Model_Products();
        	$entry = $this->_setDbData($row, $entry);
        	$entries[] = (!$isArray)
                ?$entry
                :$entry->getOptions();
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
     * @param Catalog_Model_Products $products
     * @return array
     */
    protected function _getDbData(Catalog_Model_Products $products)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $products->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Catalog_Model_Products $entry
     * @return Catalog_Model_Products
     */
    public function _setDbData($row, Catalog_Model_Products $entry)
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
     * @param Catalog_Model_Categories $categories
     * @return Catalog_Model_Categories|null
     */
    public function findCategoryRel($id, Catalog_Model_Categories $categories){
        $result = $this->getDbTable()->find($id);
        if (0 == count($result)) {
            return null;
        }
        $row = $result->current();

        $categoryRow = $row->findManyToManyRowset('Catalog_Model_DbTable_Categories','Catalog_Model_DbTable_CategoriesXref','ProductsRel')->current();

        $categories->setId($categoryRow->id)
            ->setParentId($categoryRow->parent_id)
            ->setName($categoryRow->name)
            ->setImage($categoryRow->image)
            ->setUploadPath($categoryRow->upload_path)
            ->setDescription($categoryRow->description)
            ->setAddDate($categoryRow->add_date)
            ->setModDate($categoryRow->mod_date)
            ->setMetaTitle($categoryRow->meta_title)
            ->setMetaDescription($categoryRow->meta_description)
            ->setMetaKeywords($categoryRow->meta_keywords)
            ->setPath($categoryRow->path)
            ->setFullPath($categoryRow->full_path)
            ->setOrder($categoryRow->order)
            ->setSorting($categoryRow->sorting)
            ->setGenerate($categoryRow->generate)
            ->setActive($categoryRow->active)
            ->setDeleted($categoryRow->deleted)
        ;

        return $categories;
    }

    /**
     * @param $id
     * @param Zend_Db_Table_Select|null $select
     * @return array|null
     * @throws Zend_Db_Table_Exception
     * @throws Zend_Db_Table_Row_Exception
     */
    public function findProductParams($id, Zend_Db_Table_Select $select = null, $isArray = false){
        $result = $this->getDbTable()->find($id);

        if (0 == count($result)) {
            return null;
        }
        $product = $result->current();

        $resultSet = $product->findDependentRowset('Catalog_Model_DbTable_ProductParams', 'ProductsRel', $select);

        $entries = array();
        $modelMapper = new Catalog_Model_Mapper_ProductParams();
        foreach ($resultSet as $row) {
            $entry = new Catalog_Model_ProductParams();
            $entry = $modelMapper->_setDbData($row, $entry);
            $entries[] = (!$isArray)
                ?$entry
                :$entry->getOptions();
        }

        return $entries;

    }

    /**
     * @param $id
     * @param Zend_Db_Table_Select|null $select
     * @return Catalog_Model_Subproducts[]|null
     * @throws Zend_Db_Table_Exception
     * @throws Zend_Db_Table_Row_Exception
     */
    public function findSubproductsRel($id, Zend_Db_Table_Select $select = null, $isArray = false)
    {
        $result = $this->getDbTable()->find($id);

        if (0 == count($result)) {
            return null;
        }
        $product = $result->current();

        $resultSet = $product->findDependentRowset('Catalog_Model_DbTable_Subproducts', 'SubproductsRel', $select);

        $entries = array();
        $modelMapper = new Catalog_Model_Mapper_Subproducts();
        foreach ($resultSet as $row) {
            $entry = new Catalog_Model_Subproducts();
            $entry = $modelMapper->_setDbData($row, $entry);
            $entries[] = (!$isArray)
                ?$entry
                :$entry->getOptions();
        }

        return $entries;
    }

    /**
     * @param $id
     * @param Zend_Db_Table_Select|null $select
     * @param bool $isArray
     * @return array|null
     * @throws Zend_Db_Table_Exception
     * @throws Zend_Db_Table_Row_Exception
     */
    public function findSubproductParams($id, Zend_Db_Table_Select $select = null, $isArray = false)
    {
        $result = $this->getDbTable()->find($id);

        if (0 == count($result)) {
            return null;
        }
        $product = $result->current();

        $resultSet = $product->findDependentRowset('Catalog_Model_DbTable_SubproductParams', 'ProductRel', $select);

        $entries = array();
        $modelMapper = new Catalog_Model_Mapper_SubproductParams();
        foreach ($resultSet as $row) {
            $entry = new Catalog_Model_SubproductParams();
            $entry = $modelMapper->_setDbData($row, $entry);
            $entries[] = (!$isArray)
                ?$entry
                :$entry->getOptions();
        }

        return $entries;
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
     * @return array|string
     */
    public function generateFullPath($id)
    {
        $product = $this->getDbTable()->find($id)->current();

        $categoryRow = $product->findManyToManyRowset('Catalog_Model_DbTable_Categories','Catalog_Model_DbTable_CategoriesXref','ProductsRel');
        if(0 == count($categoryRow)){
            $result = $product->path;
        }
        else{
            $result = array();
            $category = $categoryRow->current();
            $result[] = $product->path;
            $result[] = $category->full_path;

            if(!empty($result)){
                $result = array_reverse($result);
            }
            $result = trim(implode('/',$result));
        }

        return $result;
    }

    /**
     * @param $value
     * @param Catalog_Model_Products $products
     * @return Catalog_Model_Products|null
     */
    public function findByFulPath($value, Catalog_Model_Products $products)
    {
        $table = $this->getDbTable();

        $select = $table->select()
            ->where("full_path = ?", $value);

        $result = $resultSet = $table->fetchAll($select);

        if (0 == count($result)) {
            return null;
        }

        $row = $result->current();
        $entry = $this->_setDbData($row, $products);

        return $entry;
    }


}

