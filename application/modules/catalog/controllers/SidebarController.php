<?php

class Catalog_SidebarController extends Zend_Controller_Action
{
    protected $_current_category_id = 0;
    protected $_current_category = null;
    protected $_parent_category = null;


    public function init()
    {
        $categories = new Application_Model_Mapper_Categories();

        $this->_current_category_id = $this->_getParam('category');

        if($this->getCurrentCategoryId() != 0){
            $this->_current_category = $categories->find($this->getCurrentCategoryId(), new Application_Model_Categories());
            $this->_parent_category = $categories->find($this->_current_category->getParentId(), new Application_Model_Categories());
        }
    }

    public function indexAction()
    {
        $this->view->current_category = $this->getCurrentCategory();

        var_dump($this->getParentCategory()->id);

        if(null != $this->getParentCategory())
            $this->view->parent_category = $this->getParentCategory();

        if(null != $this->getCurrentCategory())
            $this->view->sidebar_item = $this->getSidebarItem($this->getCurrentCategory()->getParentId());

    }


    public function getSidebarItem($category_id)
    {
        $categories = new Application_Model_Mapper_Categories();

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


}

