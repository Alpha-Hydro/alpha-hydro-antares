<?php

class Catalog_SidebarController extends Zend_Controller_Action
{
    protected $_current_category_id = 0;

    /**
     * @var Catalog_Model_Categories
     */
    protected $_current_category = null;

    /**
     * @var Catalog_Model_Categories
     */
    protected $_parent_category = null;

    protected $_show_headers = false;

    /**
     * @var Zend_Auth
     */
    protected $_auth = null;


    public function init()
    {
//        Zend_Debug::dump($this->_request->getParams());
        $categories = new Catalog_Model_Mapper_Categories();

        $this->_current_category_id = $this->_getParam('category');

        if(!is_null($this->_getParam('headers')))
            $this->setShowHeaders($this->_getParam('headers'));

        $this->view->headers = $this->getShowHeaders();

        if($this->getCurrentCategoryId() != 0){
            $this->_current_category = $categories->find($this->getCurrentCategoryId(), new Catalog_Model_Categories());
            $this->_parent_category = $categories->find($this->_current_category->getParentId(), new Catalog_Model_Categories());
        }

        $this->_auth = Zend_Auth::getInstance()->hasIdentity();
    }

    public function indexAction()
    {
        $this->view->current_category = $this->getCurrentCategory();

        if(null != $this->getParentCategory())
            $this->view->parent_category = $this->getParentCategory();

        $parentCategoryId = (null != $this->getCurrentCategory())?$this->getCurrentCategory()->getParentId():0;

        $this->view->sidebar_item = $this->getSidebarItem(
            $parentCategoryId
        );

    }


    /**
     * @param $category_id
     * @return array
     */
    public function getSidebarItem($category_id)
    {
        $categories = new Catalog_Model_Mapper_Categories();

        $select = $categories->getDbTable()->select();
        $select->where('parent_id = ?', $category_id)
            ->where('deleted != ?', 1)
            ->order('sorting ASC');

        if(!$this->_auth) $select->where('active != ?', 0);

        $entries = $categories->fetchAll($select);

        return $entries;
    }

    /**
     * @return Catalog_Model_Categories
     */
    public function getCurrentCategory()
    {
        return $this->_current_category;
    }

    /**
     * @return null
     */
    public function getParentCategory()
    {
        return $this->_parent_category;
    }

    /**
     * @return null
     */
    public function getCurrentCategoryId()
    {
        return $this->_current_category_id;
    }

    /**
     * @return boolean
     */
    public function getShowHeaders()
    {
        return $this->_show_headers;
    }

    /**
     * @param boolean $show_headers
     * @return $this
     */
    public function setShowHeaders($show_headers)
    {
        $this->_show_headers = $show_headers;
        return $this;
    }


}

