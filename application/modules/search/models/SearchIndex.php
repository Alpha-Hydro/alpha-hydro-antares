<?php

class Search_Model_SearchIndex
{

    protected $_id = null;

    protected $_name = null;

    protected $_module = null;

    protected $_create_date = null;

    protected $_update_date = null;

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
     * Set value Module
     *
     * @return $this 
     * @param $module
     */
    public function setModule($module)
    {
        $this->_module = $module;
        return $this;
    }

    /**
     * Get value Module
     *
     * @return mixed
     */
    public function getModule()
    {
        return $this->_module;
    }

    /**
     * Set value CreateDate
     *
     * @return $this 
     * @param $create_date
     */
    public function setCreateDate($create_date)
    {
        $this->_create_date = $create_date;
        return $this;
    }

    /**
     * Get value CreateDate
     *
     * @return mixed
     */
    public function getCreateDate()
    {
        return $this->_create_date;
    }

    /**
     * Set value UpdateDate
     *
     * @return $this 
     * @param $update_date
     */
    public function setUpdateDate($update_date)
    {
        $this->_update_date = $update_date;
        return $this;
    }

    /**
     * Get value UpdateDate
     *
     * @return mixed
     */
    public function getUpdateDate()
    {
        return $this->_update_date;
    }


}

