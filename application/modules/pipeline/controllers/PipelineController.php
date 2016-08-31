<?php

class Pipeline_PipelineController extends Zend_Controller_Action
{

    protected $_fullPath = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    public function init()
    {
        $request = $this->getRequest();
        $this->setFullPath($request->getParam('fullPath'));

        $this->_redirector = new Zend_Controller_Action_Helper_Redirector();
    }

    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();

        $category = $categoriesMapper->findByFulPath($fullPath, new Pipeline_Model_PipelineCategories());

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);
        
        $this->view->category = $category;

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

        if(!empty($pipelineItems)){
            $this->view->listItems = $pipelineItems;
        }
        else{
            $this->forward('view', 'categories');
            return;
        }
    }

    public function viewAction()
    {
        $fullPath =  $this->getFullPath();
        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();

        $pipeline = $pipelineMapper->findByFulPath($fullPath, new Pipeline_Model_Pipeline());

        if(is_null($pipeline))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->getJson($pipeline);
        $this->setParamsDataItem($pipeline);

        $this->checkDeleted($pipeline);

        $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $category = $categoriesMapper->find($pipeline->getCategoryId(), new Pipeline_Model_PipelineCategories());

        $pipelineProperties = $pipelineMapper->fetchPropertyRel($pipeline->getId());

        if(!empty($pipelineProperties)){
            $propertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();

            $viewProperties = array();
            foreach ($pipelineProperties as $property) {
                $propertyValues = $propertyValuesMapper->findByKey($pipeline->getId(), $property->getId(), new Pipeline_Model_PipelinePropertyValues());
                $viewProperties[$property->getName()] = $propertyValues;
            }
            $this->view->assign('properties', $viewProperties);
        }

        $this->view->assign(array(
            'pipeline' => $pipeline,
            'category' => $category,
            'title' => $pipeline->getTitle(),
            'adminPath' => 'pipeline/edit/'.$pipeline->getId()
        ));

        $this->checkActive($pipeline);
    }

    /**
     * @param Pipeline_Model_Pipeline $pageItem
     * @return $this
     * @throws Zend_Controller_Action_Exception
     */
    public function checkDeleted(Pipeline_Model_Pipeline $pageItem)
    {
        if($pageItem->getDeleted() != '0'){
            if (!Zend_Auth::getInstance()->hasIdentity())
                throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

            $this->_redirector->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'action' => 'list',
                'id' => $pageItem->getCategoryId()
            ),'adminEdit', true);
        }

        return $this;
    }

    /**
     * @param Pipeline_Model_Pipeline $pageItem
     * @return $this
     * @throws Zend_Controller_Action_Exception
     */
    public function checkActive(Pipeline_Model_Pipeline $pageItem)
    {
        if($pageItem->getActive() != '1' && !Zend_Auth::getInstance()->hasIdentity()){
            $this->view->assign(array(
                'title' => $pageItem->getTitle(),
            ));
            throw new Zend_Controller_Action_Exception("Страница временно не доступна", 403);
        }

        return $this;
    }

    /**
     * @param Pipeline_Model_Pipeline $pageItem
     * @return $this
     */
    public function getJson(Pipeline_Model_Pipeline $pageItem)
    {
        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $this->forward('json', 'pipeline', 'admin', array('id' => $pageItem->getId()));
        }

        return $this;
    }

    /**
     * @param Pipeline_Model_Pipeline $pageItem
     * @return $this
     */
    public function setParamsDataItem(Pipeline_Model_Pipeline $pageItem)
    {
        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'pipeline',
                    'id' => $pageItem->getId(),
                    'active' => $pageItem->getActive(),
                    'deleted' => $pageItem->getDeleted()
                )
            ));
        }

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



