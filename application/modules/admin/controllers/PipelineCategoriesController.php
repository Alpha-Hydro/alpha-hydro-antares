<?php
include_once 'BaseController.php';

class PipelineCategoriesController extends Admin_BaseController
{
    /**
     * @var Pipeline_Model_Mapper_PipelineCategories
     */
    protected $_modelMapper = null;

    /**
     * @var Pipeline_Model_PipelineCategories
     */
    protected $_model = null;

    /**
     * @var Zend_Form[]
     *
     */
    protected $_forms = array();

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 10;

        $this->_modelMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $this->_model = new Pipeline_Model_PipelineCategories();
        $this->_forms['edit'] = new Admin_Form_PipelineCategoriesEdit();

        $this->_redirector = $this->_helper->getHelper('Redirector');

    }

    public function indexAction()
    {
        parent::indexAction();

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'action' => 'add',
                'resource' => 'pipeline-categories',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }
    
    public function addAction()
    {
        $form = $this->_forms['edit'];

        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'parentId'      => 0,
        ));

        parent::addAction();

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'action' => 'add',
                'resource' => 'pipeline-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'resource' => 'pipeline-categories',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function editAction()
    {
        parent::editAction();

        /*$config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'action' => 'add',
                'resource' => 'pipeline-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'action' => 'delete',
                'resource' => 'pipeline-categories',
                'params' => array(
                    'id' => $itemId,
                ),
            )),
            Zend_Navigation_Page_Uri::factory(array(
                'label' => 'Посмотреть на сайте',
                'uri' => '/pipeline/'.$page->getFullPath().'/',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'resource' => 'pipeline-categories',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;*/
    }

    public function saveFormData(Zend_Form $form)
    {
        
        $item = $this->_model;
        $item->setOptions($form->getValues());

        if($this->_request->getParam('contentMarkdown')){
            $context_html = Michelf\MarkdownExtra::defaultTransform($this->_request->getParam('contentMarkdown'));
            $item->setContentHtml($context_html);
        }

        if(!$this->_request->getParam('fullPath')){
            $fullPath = $this->_request->getParam('path');

            if($this->_request->getParam('parentId') != 0){
                $parentCategory = $this->_modelMapper->find($this->_request->getParam('parentId'), new Pipeline_Model_PipelineCategories());
                if($parentCategory)
                    $fullPath = $parentCategory->getFullPath();
            }
            $item->setFullPath($fullPath);
        }

        $this->setMetaData($item);

        //Zend_Debug::dump($item);

        $this->getModelMapper()->save($item);


        if($item->getId() && $item->getId() != ''){
            $id = $item->getId();
        }
        else{
            $id = $this->getModelMapper()->getDbTable()->getAdapter()->lastInsertId();

        }
        $item = $this->getModelMapper()->find($id, $this->getModel());

        foreach ($form->getElements() as $key => $element) {
            if($element instanceof Zend_Form_Element_File && $element->isUploaded()){
                $item = $this->saveUploadFile($element, $item);
            }
        }

        return $item;
    }

}







