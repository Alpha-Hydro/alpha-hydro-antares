<?php

class Catalog_SidebarController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $categories = new Application_Model_Mapper_Categories();

        $current_category_id = 3;

        if($current_category_id != 0){
            $category = new Application_Model_Categories();
            $current_category = $categories->find($current_category_id, $category);

            $this->view->current_category = $current_category;
        }

        $select = $categories->getDbTable()->select();

        $select->where('parent_id = ?', $current_category_id)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $entries = $categories->fetchAll($select);

        $this->view->entries = $entries;
    }


}

