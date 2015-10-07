<?php

class Oil_Model_Oil
{

    protected $_id = null;

    protected $_category_id = null;

    protected $_title = null;

    protected $_path = null;

    protected $_descroption = null;

    protected $_content_html = null;

    protected $_content_markdown = null;

    protected $_image = null;

    protected $_date_create = null;

    protected $_meta_title = null;

    protected $_meta_description = null;

    protected $_meta_keywords = null;

    protected $_active = null;

    protected $_sorting = null;

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

    /**
     * Set value Title
     *
     * @return $this 
     * @param $title
     */
    public function setTitle($title)
    {
        $this->_title = $title;
        return $this;
    }

    /**
     * Get value Title
     *
     * @return mixed
     */
    public function getTitle()
    {
        return $this->_title;
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
     * Set value Descroption
     *
     * @return $this 
     * @param $descroption
     */
    public function setDescroption($descroption)
    {
        $this->_descroption = $descroption;
        return $this;
    }

    /**
     * Get value Descroption
     *
     * @return mixed
     */
    public function getDescroption()
    {
        return $this->_descroption;
    }

    /**
     * Set value ContentHtml
     *
     * @return $this 
     * @param $content_html
     */
    public function setContentHtml($content_html)
    {
        $this->_content_html = $content_html;
        return $this;
    }

    /**
     * Get value ContentHtml
     *
     * @return mixed
     */
    public function getContentHtml()
    {
        return $this->_content_html;
    }

    /**
     * Set value ContentMarkdown
     *
     * @return $this 
     * @param $content_markdown
     */
    public function setContentMarkdown($content_markdown)
    {
        $this->_content_markdown = $content_markdown;
        return $this;
    }

    /**
     * Get value ContentMarkdown
     *
     * @return mixed
     */
    public function getContentMarkdown()
    {
        return $this->_content_markdown;
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
     * Set value DateCreate
     *
     * @return $this 
     * @param $date_create
     */
    public function setDateCreate($date_create)
    {
        $this->_date_create = $date_create;
        return $this;
    }

    /**
     * Get value DateCreate
     *
     * @return mixed
     */
    public function getDateCreate()
    {
        return $this->_date_create;
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


}

