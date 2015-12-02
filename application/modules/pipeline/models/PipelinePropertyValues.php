<?php

class Pipeline_Model_PipelinePropertyValues
{

    protected $_id = null;

    protected $_property_id = null;

    protected $_pipeline_id = null;

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
     * Set value PropertyId
     *
     * @return $this 
     * @param $property_id
     */
    public function setPropertyId($property_id)
    {
        $this->_property_id = $property_id;
        return $this;
    }

    /**
     * Get value PropertyId
     *
     * @return mixed
     */
    public function getPropertyId()
    {
        return $this->_property_id;
    }

    /**
     * Set value PipelineId
     *
     * @return $this 
     * @param $pipeline_id
     */
    public function setPipelineId($pipeline_id)
    {
        $this->_pipeline_id = $pipeline_id;
        return $this;
    }

    /**
     * Get value PipelineId
     *
     * @return mixed
     */
    public function getPipelineId()
    {
        return $this->_pipeline_id;
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

