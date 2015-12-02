<?php

class Pipeline_CategoriesController extends Zend_Controller_Action
{
    protected $_fullPath = null;

    public function init()
    {
        $request = $this->getRequest();

        if($request->getParam('fullPath'))
            $this->setFullPath($request->getParam('fullPath'));

        $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $select =  $categoriesMapper->getDbTable()->select();
        $select->where('parent_id = ?', 0)
            ->where('active != ?', 0)
            ->where('deleted != ?', 1)
            ->order('sorting ASC');

        $categories = $categoriesMapper->fetchAll($select);

        $this->view->categories = $categories;
    }

    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $category = $categoriesMapper
            ->findByFulPath($fullPath, new Pipeline_Model_PipelineCategories());

        if(is_null($category)) {
            //throw new Zend_Controller_Action_Exception("Страница не найдена", 404);
            $this->forward('view', 'pipeline');
            return;
        }

        $current_category_id = $category->getId();
        $this->view->category = $category;
        $this->view->title = $category->getTitle();


        if($current_category_id !== 0){
            $select = $categoriesMapper->getDbTable()->select();
            $select->where('parent_id = ?', $current_category_id)
                ->where('deleted != ?', 1)
                ->where('active != ?', 0)
                ->order('sorting ASC');

            $categories = $categoriesMapper->fetchAll($select);

            if(empty($categories)){
                $this->forward('index', 'pipeline');
                return;
            }
            $this->view->categories = $categories;

        }
        else{
            $this->redirect('/pipeline/', array('code' => 301));
            return;
        }

    }

    /**
     * @param null $fullPath
     * @return Pipeline_CategoriesController
     */
    public function setFullPath($fullPath)
    {
        $this->_fullPath = $fullPath;
        return $this;
    }

    /**
     * @return null
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }

}

