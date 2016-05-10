<?php

class Catalog_Model_Categories
{

    protected $_id = null;

    protected $_parent_id = null;

    protected $_image = null;

    protected $_upload_path = null;

    protected $_name = null;

    protected $_description = null;

    protected $_add_date = null;

    protected $_mod_date = null;

    protected $_order = null;

    protected $_generate = null;

    protected $_active = null;

    protected $_full_path = null;

    protected $_meta_title = null;

    protected $_meta_description = null;

    protected $_meta_keywords = null;

    protected $_path = null;

    protected $_sorting = null;

    protected $_deleted = null;

    protected $_subCategories = null;

    protected $_countProducts = null;

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
        		$data[$option] = (!is_null($property->getValue($this)))
                    ?$property->getValue($this)
                    :'';
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
     * Set value Image
     *
     * @return $this 
     * @param $image
     */
    public function setImage($image)
    {
        $this->_image = $image;
        return $this;
    }

    /**
     * Get value Image
     *
     * @return mixed
     */
    public function getImage()
    {
        return $this->_image;
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
     * Set value Generate
     *
     * @return $this 
     * @param $generate
     */
    public function setGenerate($generate)
    {
        $this->_generate = $generate;
        return $this;
    }

    /**
     * Get value Generate
     *
     * @return mixed
     */
    public function getGenerate()
    {
        return $this->_generate;
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
     * Set value FullPath
     *
     * @return $this 
     * @param $full_path
     */
    public function setFullPath($full_path)
    {
        $this->_full_path = $full_path;
        return $this;
    }

    /**
     * Get value FullPath
     *
     * @return mixed
     */
    public function getFullPath()
    {
        return $this->_full_path;
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
     * @param null $subCategories
     * @return Catalog_Model_Categories
     */
    public function setSubCategories($subCategories)
    {
        $this->_subCategories = $subCategories;
        return $this;
    }

    /**
     * @return null
     */
    public function getSubCategories()
    {
        return $this->_subCategories;
    }

    /**
     * @param null $countProducts
     * @return Catalog_Model_Categories
     */
    public function setCountProducts($countProducts)
    {
        $this->_countProducts = $countProducts;
        return $this;
    }

    /**
     * @return null
     */
    public function getCountProducts()
    {
        return $this->_countProducts;
    }

    /**
     * @param null $upload_path
     * @return Catalog_Model_Categories
     */
    public function setUploadPath($upload_path)
    {
        $this->_upload_path = $upload_path;
        return $this;
    }

    /**
     * @return null
     */
    public function getUploadPath()
    {
        return $this->_upload_path;
    }


}

