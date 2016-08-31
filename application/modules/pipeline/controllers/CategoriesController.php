<?php

class Pipeline_CategoriesController extends Zend_Controller_Action
{

    protected $_fullPath = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    /**
     * @var Pipeline_Model_PipelineCategories[]
     */
    protected $_categories = array();

    public function init()
    {
        $this->_redirector = new Zend_Controller_Action_Helper_Redirector();

        $request = $this->getRequest();

        if($request->getParam('fullPath'))
            $this->setFullPath($request->getParam('fullPath'));

        $this->view->assign(array(
            'categories' => $this->getCategories(),
            'title' => 'Детали трубопроводов',
            'adminPath' => 'pipeline-categories/'
        ));
    }

    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();
        //Получаем категорию по переданному url
        $category = $categoriesMapper
            ->findByFulPath($fullPath, new Pipeline_Model_PipelineCategories());

        //Если нет категории с таким url
        if(is_null($category)) {
            //throw new Zend_Controller_Action_Exception("Страница не найдена", 404);
            //перенаправляем в товар, может быть это товар
            $this->forward('view', 'pipeline');
            return;
        }

        $this->getJson($category);
        $this->setParamsDataItem($category);

        $this->checkDeleted($category);


        $this->view->assign(array(
            'category' => $category,
            'title' => $category->getTitle(),
            'adminPath' => 'pipeline-categories/list/'.$category->getId()
        ));

        $this->checkActive($category);
        
        if($category->getId() !== 0){

            $select = $categoriesMapper->getDbTable()->select();
            $select->where('parent_id = ?', $category->getId())
                ->where('deleted != ?', 1)
                ->where('active != ?', 0)
                ->order('sorting ASC');

            $categories = $categoriesMapper->fetchAll($select);

            if(empty($categories)){
                $this->forward('index', 'pipeline');
                return;
            }
            $this->view->assign('categories', $categories);

        }
        else{
            $this->redirect('/pipeline/', array('code' => 301));
            return;
        }

    }

    /**
     * @param Pipeline_Model_PipelineCategories $categories
     * @return $this
     * @throws Zend_Controller_Action_Exception
     */
    public function checkDeleted(Pipeline_Model_PipelineCategories $categories)
    {
        if($categories->getDeleted() != '0'){
            if (!Zend_Auth::getInstance()->hasIdentity())
                throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

            $this->_redirector->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'pipeline-categories'
            ),'adminEdit', true);
        }

        return $this;
    }

    /**
     * @param Pipeline_Model_PipelineCategories $categories
     * @return $this
     * @throws Zend_Controller_Action_Exception
     */
    public function checkActive(Pipeline_Model_PipelineCategories $categories)
    {
        if($categories->getActive() != '1' && !Zend_Auth::getInstance()->hasIdentity()){
            $this->view->assign(array(
                'title' => $categories->getTitle(),
            ));
            throw new Zend_Controller_Action_Exception("Страница временно не доступна", 403);
        }

        return $this;
    }

    /**
     * @param Pipeline_Model_PipelineCategories $categories
     * @return $this
     */
    public function getJson(Pipeline_Model_PipelineCategories $categories)
    {
        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $this->forward('json', 'pipeline-categories', 'admin', array('id' => $categories->getId()));
        }

        return $this;
    }

    /**
     * @param Pipeline_Model_PipelineCategories $categories
     * @return $this
     */
    public function setParamsDataItem(Pipeline_Model_PipelineCategories $categories)
    {
        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'pipeline-categories',
                    'id' => $categories->getId(),
                    'active' => $categories->getActive(),
                    'deleted' => $categories->getDeleted()
                )
            ));
        }

        return $this;
    }

    /**
     * @param null $fullPath
     * @return Pipeline_CategoriesController
     *
     */
    public function setFullPath($fullPath)
    {
        $this->_fullPath = $fullPath;
        return $this;
    }

    /**
     * @return null
     *
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }

    public function viewAction()
    {
        // action body
    }

    /**
     * @param  $categories Pipeline_Model_PipelineCategories[]
     * @return Pipeline_CategoriesController
     */
    public function setCategories($categories)
    {
        $this->_categories = $categories;
        return $this;
    }

    /**
     * @return array
     */
    public function getCategories()
    {
        if(0 == count($this->_categories)){
            $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();
            $select =  $categoriesMapper->getDbTable()->select();
            $select->where('parent_id = ?', 0)
                ->where('active != ?', 0)
                ->where('deleted != ?', 1)
                ->order('sorting ASC');

            $this->_categories = $categoriesMapper->fetchAll($select);
        }
        return $this->_categories;
    }


}



