<?php

class Admin_PipelinePropertyController extends Zend_Controller_Action
{

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 10;
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $select = $pipelinePropertyMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->order('sorting ASC');

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

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Категории',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'resource' => 'pipeline-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Товары',
                'module' => 'admin',
                'controller' => 'pipeline',
                'resource' => 'pipeline',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить свойство',
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'action' => 'add',
                'resource' => 'pipeline-property',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
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

                return $this->_helper->redirector('index');
            }
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить свойство',
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'action' => 'add',
                'resource' => 'pipeline-property',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pipeline-property',
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
            return $this->_helper->redirector('index');

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

                return $this->_helper->redirector('index');
            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить свойство',
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'action' => 'add',
                'resource' => 'pipeline-property',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить свойство',
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'action' => 'delete',
                'resource' => 'pipeline-property',
                'params' => array(
                    'id' => $itemId,
                ),
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pipeline-property',
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
            return $this->_helper->redirector('index');

        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $pipelineProperty = $pipelinePropertyMapper->find($itemId, new Pipeline_Model_PipelineProperty());

        if(is_null($pipelineProperty))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $pipelineProperty->setDeleted(1);
        $pipelinePropertyMapper->save($pipelineProperty);

        return $this->_helper->redirector('index');

    }

    /**
     * @param null $count_item_on_page
     * @return Admin_PipelinePropertyController
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







