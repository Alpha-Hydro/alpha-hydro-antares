<?php

class Catalog_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $categories = new Catalog_Model_Mapper_Categories();

        $select = $categories->getDbTable()->select();
        $select->where('parent_id = ?', 0)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $entries = $categories->fetchAll($select);

        $this->view->entries = $entries;
    }


}

