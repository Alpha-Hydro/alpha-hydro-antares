<?php

class Catalog_SidebarController extends Zend_Controller_Action
{
    protected $_current_category_id = 0;
    protected $_current_category = null;
    protected $_parent_category = null;
    protected $_show_headers = false;


    public function init()
    {
        //var_dump($this->getFrontController()->getRequest()->getParam('fullPath'));

        $categories = new Model_Mapper_Categories();

        $this->_current_category_id = $this->_getParam('category');

        if(!is_null($this->_getParam('headers')))
            $this->setShowHeaders($this->_getParam('headers'));

        $this->view->headers = $this->getShowHeaders();

        if($this->getCurrentCategoryId() != 0){
            $this->_current_category = $categories->find($this->getCurrentCategoryId(), new Model_Categories());
            $this->_parent_category = $categories->find($this->_current_category->getParentId(), new Model_Categories());
        }
    }

    public function indexAction()
    {
        $this->view->current_category = $this->getCurrentCategory();

        if(null != $this->getParentCategory())
            $this->view->parent_category = $this->getParentCategory();

        if(null != $this->getCurrentCategory())
            $this->view->sidebar_item = $this->getSidebarItem($this->getCurrentCategory()->getParentId());

    }


    /**
     * @param $category_id
     * @return array
     */
    public function getSidebarItem($category_id)
    {
        $categories = new Model_Mapper_Categories();

        $select = $categories->getDbTable()->select();
        $select->where('parent_id = ?', $category_id)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $entries = $categories->fetchAll($select);

        return $entries;
    }

    /**
     * @return null
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

