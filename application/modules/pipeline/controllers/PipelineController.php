<?php

class Pipeline_PipelineController extends Zend_Controller_Action
{

    protected $_fullPath = null;

    public function init()
    {
        $request = $this->getRequest();
        $this->setFullPath($request->getParam('fullPath'));
    }

    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();

        $category = $categoriesMapper->findByFulPath($fullPath, new Pipeline_Model_PipelineCategories());

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->title = $category->getTitle();
        $current_category_id = $category->getId();

        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();
        $select = $pipelineMapper->getDbTable()
            ->select()
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id = ?', $current_category_id)
            ->order('sorting ASC');

        $pipelineItems = $pipelineMapper->fetchAll($select);

        if(!empty($pipelineItems))
            $this->view->listItems = $pipelineItems;

    }

    public function viewAction()
    {
        $fullPath =  $this->getFullPath();
        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();

        $pipeline = $pipelineMapper->findByFulPath($fullPath, new Pipeline_Model_Pipeline());

        if(is_null($pipeline))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $category = $categoriesMapper->find($pipeline->getCategoryId(), new Pipeline_Model_PipelineCategories());

        $this->view->title = $pipeline->getTitle();
        $this->view->pipeline = $pipeline;
        $this->view->category = $category;
    }

    /**
     * @return null
     *
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }

    /**
     * @param null $fullPath
     * @return Pipeline_PipelineController
     *
     */
    public function setFullPath($fullPath)
    {
        $this->_fullPath = $fullPath;
        return $this;
    }
}



