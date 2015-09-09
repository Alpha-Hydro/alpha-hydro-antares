<?php

class Catalog_CategoriesController extends Zend_Controller_Action
{
    protected $_fullPath = null;

    /*public function preDispatch()
    {
        $frontController = $this->getFrontController();
        $router = $frontController->getRouter();
        var_dump($router->getCurrentRouteName());
    }*/

    public function init()
    {
        $request = $this->getRequest();
        $this->_fullPath =  $request->getParam('fullPath');
    }

    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categories = new Application_Model_Mapper_Categories();
        $category = new Application_Model_Categories();

        $category = $categories->findByFulPath($fullPath, $category);

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $current_category_id = $category->getId();

        if($current_category_id != 0){

            $select = $categories->getDbTable()->select();
            $select->where('parent_id = ?', $current_category_id)
                ->where('active != ?', 0)
                ->order('sorting ASC');

            $entries = $categories->fetchAll($select);

            $this->view->entries = $entries;
        }
        else{
            $this->redirect('/catalog/', array('code'=>301));
        }

        $this->view->title = $category->getName();
        $this->view->current_category = $current_category_id;
    }

    /**
     * @return null
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }
}

