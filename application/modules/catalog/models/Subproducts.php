<?php

class Catalog_Model_Subproducts
{

    protected $_id = null;

    protected $_parent_id = null;

    protected $_sku = null;

    protected $_name = null;

    protected $_add_date = null;

    protected $_mod_date = null;

    protected $_order = null;
    
    protected $_deleted = null;

    /**
     * @param $options
     */
    public function __construct(array $options = null)
    {
        if (is_array($options))
        	$this->setOptions($options);
    }

    /**
     * @param $name
     * @param $value
     * @throws Exception
     */
    public function __set($name, $value)
    {
        $method = 'set' . $name;
        
        if (('mapper' == $name) || !method_exists($this, $method))
        	throw new Exception('Invalid property (' . $name . ')');
        
        return $this->$method($value);
    }

    /**
     * @param $name
     * @throws Exception
     */
    public function __get($name)
    {
        $method = 'get' . $name;
        
        if (('mapper' == $name) || !method_exists($this, $method))
        	throw new Exception('Invalid property (' . $name . ')');
        
        return $this->$method();
    }

    /**
     * @param $options
     * @return $this
     */
    public function setOptions(array $options)
    {
        $methods = get_class_methods($this);
        
        foreach ($options as $key => $value) {
        	$method = 'set' . ucfirst($key);
        
        	if (in_array($method, $methods)) {
        		$this->$method($value);
        	}
        }
        
        return $this;
    }

    /**
     * @return array|null
     */
    public function getOptions()
    {
        $class = new ReflectionClass($this);
        $properties = $class->getProperties(ReflectionProperty::IS_PROTECTED);

        if(0 === count($properties))
            return null;

        $data = array();
        foreach ($properties as $property) {
            $name = preg_split("~_~", $property->getName());
            $normaliseName = implode(array_map("ucwords", $name));
            $option = lcfirst($normaliseName);

            if ($property->isProtected()) {
                $property->setAccessible(TRUE);
                $data[$option] = $property->getValue($this);
            }
        }

        return $data;
    }

    /**
     * Set value Id
     *
     * @return $this 
     * @param $id
     */
    public function setId($id)
    {
        $this->_id = $id;
        return $this;
    }

    /**
     * Get value Id
     *
     * @return mixed
     */
    public function getId()
    {
        return $this->_id;
    }

    /**
     * Set value ParentId
     *
     * @return $this 
     * @param $parent_id
     */
    public function setParentId($parent_id)
    {
        $this->_parent_id = $parent_id;
        return $this;
    }

    /**
     * Get value ParentId
     *
     * @return mixed
     */
    public function getParentId()
    {
        return $this->_parent_id;
    }

    /**
     * Set value Sku
     *
     * @return $this 
     * @param $sku
     */
    public function setSku($sku)
    {
        $this->_sku = $sku;
        return $this;
    }

    /**
     * Get value Sku
     *
     * @return mixed
     */
    public function getSku()
    {
        return $this->_sku;
    }

    /**
     * Set value Name
     *
     * @return $this 
     * @param $name
     */
    public function setName($name)
    {
        $this->_name = $name;
        return $this;
    }

    /**
     * Get value Name
     *
     * @return mixed
     */
    public function getName()
    {
        return $this->_name;
    }

    /**
     * Set value AddDate
     *
     * @return $this 
     * @param $add_date
     */
    public function setAddDate($add_date)
    {
        $this->_add_date = $add_date;
        return $this;
    }

    /**
     * Get value AddDate
     *
     * @return mixed
     */
    public function getAddDate()
    {
        return $this->_add_date;
    }

    /**
     * Set value ModDate
     *
     * @return $this 
     * @param $mod_date
     */
    public function setModDate($mod_date)
    {
        $this->_mod_date = $mod_date;
        return $this;
    }

    /**
     * Get value ModDate
     *
     * @return mixed
     */
    public function getModDate()
    {
        return $this->_mod_date;
    }

    /**
     * Set value Order
     *
     * @return $this 
     * @param $order
     */
    public function setOrder($order)
    {
        $this->_order = $order;
        return $this;
    }

    /**
     * Get value Order
     *
     * @return mixed
     */
    public function getOrder()
    {
        return $this->_order;
    }

    /**
     * @param null $deleted
     * @return Catalog_Model_Subproducts
     */
    public function setDeleted($deleted)
    {
        $this->_deleted = $deleted;
        return $this;
    }

    /**
     * @return null
     */
    public function getDeleted()
    {
        return $this->_deleted;
    }


}

