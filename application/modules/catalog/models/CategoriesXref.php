<?php

class Catalog_Model_CategoriesXref
{

    protected $_product_id = null;

    protected $_category_id = null;

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
     * Set value ProductId
     *
     * @return $this 
     * @param $product_id
     */
    public function setProductId($product_id)
    {
        $this->_product_id = $product_id;
        return $this;
    }

    /**
     * Get value ProductId
     *
     * @return mixed
     */
    public function getProductId()
    {
        return $this->_product_id;
    }

    /**
     * Set value CategoryId
     *
     * @return $this 
     * @param $category_id
     */
    public function setCategoryId($category_id)
    {
        $this->_category_id = $category_id;
        return $this;
    }

    /**
     * Get value CategoryId
     *
     * @return mixed
     */
    public function getCategoryId()
    {
        return $this->_category_id;
    }


}

