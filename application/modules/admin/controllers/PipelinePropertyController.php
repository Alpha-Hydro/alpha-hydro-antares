<?php

class PipelinePropertyController extends Zend_Controller_Action
{

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 10;
        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $select = $pipelinePropertyMapper->getDbTable()->select();
        $select->order('sorting ASC');

        $pipelineProperties = $pipelinePropertyMapper->fetchAll($select);

        if(!empty($pipelineProperties)){
            if(count($pipelineProperties)> $this->getCountItemOnPage()){
                $pages = array_chunk($pipelineProperties, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($pages))
                    $currentPage = count($pages)-1;

                $pipelineProperties = $pages[$currentPage];
                $this->view->countPage = count($pages);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->pages = $pipelineProperties;
    }

    public function addAction()
    {
        $request = $this->getRequest();

        $form = new Admin_Form_PipelinePropertyEdit();

        $form->setDefaults(array(
            'showList'       => 1,
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
        ));

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())){
                $pipelineProperty = new Pipeline_Model_PipelineProperty($form->getValues());
                $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();

                $pipelineProperty->setSistemName(strtolower($form->getValue('sistemName')));

                $pipelinePropertyMapper->save($pipelineProperty);

                $this->_redirector->gotoRouteAndExit(array(
                    'module' => 'admin',
                    'controller' => 'pipeline-property',
                    'action' => 'index'
                ), 'adminEdit', true);
            }
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'route' => 'adminEdit',
                'resource' => 'pipeline-property',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function editAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'action' => 'index'
            ), 'adminEdit', true);

        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $pipelineProperty = $pipelinePropertyMapper->find($itemId, new Pipeline_Model_PipelineProperty());

        if(is_null($pipelineProperty))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $form = new Admin_Form_PipelinePropertyEdit();
        $dataPage = $pipelineProperty->getOptions();
        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())){
                $pipelineProperty = new Pipeline_Model_PipelineProperty($form->getValues());
                $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();

                $pipelineProperty->setSistemName(strtolower($form->getValue('sistemName')));

                $pipelinePropertyMapper->save($pipelineProperty);

                $this->_redirector->gotoRouteAndExit(array(
                    'module' => 'admin',
                    'controller' => 'pipeline-property',
                    'action' => 'index'
                ), 'adminEdit', true);
            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'route' => 'adminEdit',
                'resource' => 'pipeline-property',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function deleteAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'action' => 'index'
            ), 'adminEdit', true);

        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $pipelineProperty = $pipelinePropertyMapper->find($itemId, new Pipeline_Model_PipelineProperty());

        if(is_null($pipelineProperty))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $deleted = ($pipelineProperty->getDeleted() != 0)?0:1;

        $pipelineProperty->setDeleted($deleted);
        $pipelinePropertyMapper->save($pipelineProperty);

        $this->_redirector->gotoRouteAndExit(array(
            'module' => 'admin',
            'controller' => 'pipeline-property',
            'action' => 'index'
        ), 'adminEdit', true);
    }

    public function enableAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'action' => 'index'
            ), 'adminEdit', true);

        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $pipelineProperty = $pipelinePropertyMapper->find($itemId, new Pipeline_Model_PipelineProperty());

        if(is_null($pipelineProperty))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $active = ($pipelineProperty->getActive() != 0)?0:1;

        $pipelineProperty->setActive($active);
        $pipelinePropertyMapper->save($pipelineProperty);

        $this->_redirector->gotoRouteAndExit(array(
            'module' => 'admin',
            'controller' => 'pipeline-property',
            'action' => 'index'
        ), 'adminEdit', true);
    }

    /**
     * @param null $count_item_on_page
     * @return PipelinePropertyController
     */
    public function setCountItemOnPage($count_item_on_page)
    {
        $this->_count_item_on_page = $count_item_on_page;
        return $this;
    }

    /**
     * @return null
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }


}







