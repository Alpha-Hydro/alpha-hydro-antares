<?php

class Catalog_Model_Mapper_SubproductParamsValues
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
     * @return Model_DbTable_SubproductParamsValues
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Catalog_Model_DbTable_SubproductParamsValues');
        
        return $this->_dbTable;
    }

    /**
     * @param Catalog_Model_SubproductParamsValues $subproductparamsvalues
     * @return $this
     */
    public function save(Catalog_Model_SubproductParamsValues $subproductparamsvalues)
    {
        $data = $this->_getDbData($subproductparamsvalues);

        $paramId = $subproductparamsvalues->getParamId();
        $subproductId = $subproductparamsvalues->getSubproductId();

        $result = $this->getDbTable()->find($subproductId, $paramId);

        if (0 == count($result)) {
            $data_insert = array(
                'subproduct_id' => $subproductId,
                'param_id' => $paramId,
                'value' => $data['value']
            );
            $this->getDbTable()->getAdapter()->insert('subproduct_params_values',$data_insert);
        } else {
            $this->getDbTable()->update($data, array(
                'param_id = ?' => $paramId,
                'subproduct_id = ?' => $subproductId
            ));
        }
        
        return $this;
    }

    /**
     * @param $subproduct_id
     * @param $param_id
     * @param Catalog_Model_SubproductParamsValues $subproductparamsvalues
     * @return Catalog_Model_SubproductParamsValues|null
     * @throws Zend_Db_Table_Exception
     */
    public function find($subproduct_id, $param_id, Catalog_Model_SubproductParamsValues $subproductparamsvalues)
    {
        $result = $this->getDbTable()->find($subproduct_id, $param_id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $subproductparamsvalues);
        
        return $entry;
    }

    /**
     * @param $subproduct_id
     * @param $param_id
     * @param Catalog_Model_SubproductParamsValues $subproductparamsvalues
     * @return Catalog_Model_SubproductParamsValues|null
     * @throws Zend_Db_Table_Exception
     */
    public function findBySubproductParam($subproduct_id, $param_id, Catalog_Model_SubproductParamsValues $subproductparamsvalues)
    {
        $result = $this->getDbTable()->find($subproduct_id, $param_id);

        if (0 == count($result)) {
        	return null;
        }

        $row = $result->current();
        $entry = $this->_setDbData($row, $subproductparamsvalues);

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
        	$entry = new Catalog_Model_SubproductParamsValues();
        	$entry = $this->_setDbData($row, $entry);
        	$entries[] = $entry;
        }
        
        return $entries;
    }

    /**
     * @return array
     */
    protected function _getDbPrimary()
    {
        $primaryKey = $this->getDbTable()->info('primary');
        
        return $primaryKey;
    }

    /**
     * @param Catalog_Model_SubproductParamsValues $subproductparamsvalues
     * @return array
     */
    protected function _getDbData(Catalog_Model_SubproductParamsValues $subproductparamsvalues)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if(!in_array($property, $this->_getDbPrimary(), true))
        		$data[$property] = $subproductparamsvalues->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Catalog_Model_SubproductParamsValues $entry
     * @return Catalog_Model_SubproductParamsValues
     */
    public function _setDbData($row, Catalog_Model_SubproductParamsValues $entry)
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

