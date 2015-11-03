<?php

class Pipeline_IndexController extends Zend_Controller_Action
{

    public function init()
    {

    }

    public function indexAction()
    {
        $this->view->title = 'Трубопроводная арматура';

        $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $select =  $categoriesMapper->getDbTable()->select();
        $select->where('parent_id = ?', 0)
            ->where('active != ?', 0)
            ->where('deleted != ?', 1)
            ->order('sorting ASC');

        $categories = $categoriesMapper->fetchAll($select);

        $this->view->categories = $categories;
    }

}

