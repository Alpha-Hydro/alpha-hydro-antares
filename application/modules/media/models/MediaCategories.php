<?php

class Media_Model_MediaCategories
{

    protected $_id = null;

    protected $_parent_id = null;

    protected $_name = null;

    protected $_description = null;

    protected $_thumb = null;
    protected $_image = null;

    protected $_timestamp = null;

    protected $_path = null;

    protected $_meta_title = null;

    protected $_meta_description = null;

    protected $_meta_keywords = null;

    protected $_sorting = null;

    protected $_active = null;

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
     * Set value Description
     *
     * @return $this 
     * @param $description
     */
    public function setDescription($description)
    {
        $this->_description = $description;
        return $this;
    }

    /**
     * Get value Description
     *
     * @return mixed
     */
    public function getDescription()
    {
        return $this->_description;
    }
    
    /**
     * Set value Timestamp
     *
     * @return $this 
     * @param $timestamp
     */
    public function setTimestamp($timestamp)
    {
        $this->_timestamp = $timestamp;
        return $this;
    }

    /**
     * Get value Timestamp
     *
     * @return mixed
     */
    public function getTimestamp()
    {
        return $this->_timestamp;
    }

    /**
     * Set value Path
     *
     * @return $this 
     * @param $path
     */
    public function setPath($path)
    {
        $this->_path = $path;
        return $this;
    }

    /**
     * Get value Path
     *
     * @return mixed
     */
    public function getPath()
    {
        return $this->_path;
    }

    /**
     * Set value MetaTitle
     *
     * @return $this 
     * @param $meta_title
     */
    public function setMetaTitle($meta_title)
    {
        $this->_meta_title = $meta_title;
        return $this;
    }

    /**
     * Get value MetaTitle
     *
     * @return mixed
     */
    public function getMetaTitle()
    {
        return $this->_meta_title;
    }

    /**
     * Set value MetaDescription
     *
     * @return $this 
     * @param $meta_description
     */
    public function setMetaDescription($meta_description)
    {
        $this->_meta_description = $meta_description;
        return $this;
    }

    /**
     * Get value MetaDescription
     *
     * @return mixed
     */
    public function getMetaDescription()
    {
        return $this->_meta_description;
    }

    /**
     * Set value MetaKeywords
     *
     * @return $this 
     * @param $meta_keywords
     */
    public function setMetaKeywords($meta_keywords)
    {
        $this->_meta_keywords = $meta_keywords;
        return $this;
    }

    /**
     * Get value MetaKeywords
     *
     * @return mixed
     */
    public function getMetaKeywords()
    {
        return $this->_meta_keywords;
    }

    /**
     * Set value Sorting
     *
     * @return $this 
     * @param $sorting
     */
    public function setSorting($sorting)
    {
        $this->_sorting = $sorting;
        return $this;
    }

    /**
     * Get value Sorting
     *
     * @return mixed
     */
    public function getSorting()
    {
        return $this->_sorting;
    }

    /**
     * Set value Active
     *
     * @return $this 
     * @param $active
     */
    public function setActive($active)
    {
        $this->_active = $active;
        return $this;
    }

    /**
     * Get value Active
     *
     * @return mixed
     */
    public function getActive()
    {
        return $this->_active;
    }

    /**
     * Set value Deleted
     *
     * @return $this 
     * @param $deleted
     */
    public function setDeleted($deleted)
    {
        $this->_deleted = $deleted;
        return $this;
    }

    /**
     * Get value Deleted
     *
     * @return mixed
     */
    public function getDeleted()
    {
        return $this->_deleted;
    }

    /**
     * @param null $image
     * @return Media_Model_MediaCategories
     */
    public function setImage($image)
    {
        $this->_image = $image;
        return $this;
    }

    /**
     * @return null
     */
    public function getImage()
    {
        return $this->_image;
    }

    /**
     * @param null $thumb
     * @return Media_Model_MediaCategories
     */
    public function setThumb($thumb)
    {
        $this->_thumb = $thumb;
        return $this;
    }

    /**
     * @return null
     */
    public function getThumb()
    {
        return $this->_thumb;
    }


}

