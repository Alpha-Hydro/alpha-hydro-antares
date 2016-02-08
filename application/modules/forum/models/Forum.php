<?php

class Forum_Model_Forum
{

    protected $_id = null;

    protected $_parent_id = null;

    protected $_category = null;

    protected $_author = null;

    protected $_email = null;

    protected $_content = null;

    protected $_timestamp = null;

    protected $_active = null;

    protected $_deleted = null;

    protected $_content_markdown = null;

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
     * Set value Category
     *
     * @return $this 
     * @param $category
     */
    public function setCategory($category)
    {
        $this->_category = $category;
        return $this;
    }

    /**
     * Get value Category
     *
     * @return mixed
     */
    public function getCategory()
    {
        return $this->_category;
    }

    /**
     * Set value Author
     *
     * @return $this 
     * @param $author
     */
    public function setAuthor($author)
    {
        $this->_author = $author;
        return $this;
    }

    /**
     * Get value Author
     *
     * @return mixed
     */
    public function getAuthor()
    {
        return $this->_author;
    }

    /**
     * Set value Email
     *
     * @return $this 
     * @param $email
     */
    public function setEmail($email)
    {
        $this->_email = $email;
        return $this;
    }

    /**
     * Get value Email
     *
     * @return mixed
     */
    public function getEmail()
    {
        return $this->_email;
    }

    /**
     * Set value Content
     *
     * @return $this 
     * @param $content
     */
    public function setContent($content)
    {
        $this->_content = $content;
        return $this;
    }

    /**
     * Get value Content
     *
     * @return mixed
     */
    public function getContent()
    {
        return $this->_content;
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


}

