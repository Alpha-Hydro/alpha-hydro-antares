<?php

class Catalog_Model_SubproductParamsValues
{

    protected $_subproduct_id = null;

    protected $_param_id = null;

    protected $_value = null;

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
     * Set value SubproductId
     *
     * @return $this 
     * @param $subproduct_id
     */
    public function setSubproductId($subproduct_id)
    {
        $this->_subproduct_id = $subproduct_id;
        return $this;
    }

    /**
     * Get value SubproductId
     *
     * @return mixed
     */
    public function getSubproductId()
    {
        return $this->_subproduct_id;
    }

    /**
     * Set value ParamId
     *
     * @return $this 
     * @param $param_id
     */
    public function setParamId($param_id)
    {
        $this->_param_id = $param_id;
        return $this;
    }

    /**
     * Get value ParamId
     *
     * @return mixed
     */
    public function getParamId()
    {
        return $this->_param_id;
    }

    /**
     * Set value Value
     *
     * @return $this 
     * @param $value
     */
    public function setValue($value)
    {
        $this->_value = $value;
        return $this;
    }

    /**
     * Get value Value
     *
     * @return mixed
     */
    public function getValue()
    {
        return $this->_value;
    }


}

