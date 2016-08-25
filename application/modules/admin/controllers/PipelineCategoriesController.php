<?php
include_once 'BaseController.php';

class PipelineCategoriesController extends BaseController
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

    protected $_upload_path = null;

    public function init()
    {
        $this->_count_item_on_page = 10;

        $this->_modelMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $this->_model = new Pipeline_Model_PipelineCategories();
        $this->_forms['edit'] = new Admin_Form_PipelineCategoriesEdit();

        $this->_redirector = $this->_helper->getHelper('Redirector');

        $this->_upload_path = '/upload/pipeline/category/';

    }

    public function indexAction()
    {
        parent::indexAction();

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'На сайт',
                'uri' => '/pipeline/'
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $editUrlOptions = array(
            'module' => 'admin',
            'controller' => 'pages',
            'action' => 'edit',
            'id' => $this->getPageModule('pipeline')->getId(),
        );

        $this->view->assign(array(
            'editUrlOptions' => $editUrlOptions,
            'container_nav' => $containerNav
        ));
    }
    
    public function editAction()
    {
        if($this->_request->getParam('dataPage')){
            $dataPage = $this->_request->getParam('dataPage');
            $id = $this->_request->getParam('id');

            $categories = $this->_modelMapper->find($id, $this->_model);
            $categories->setOptions($dataPage);

            $categories->setFullPath($dataPage['path']);

            $this->setUploadImage($categories);

            $markdown = $dataPage['contentMarkdown'];
            $context_html = Michelf\MarkdownExtra::defaultTransform($markdown);
            $categories->setContentHtml($context_html);

            $this->_modelMapper->save($categories);

            $this->_redirector->gotoUrlAndExit('/pipeline/'.$categories->getPath());
        }

        parent::editAction();
    }

    public function saveFormData(Zend_Form $form)
    {
        $item = $this->_model;
        $item->setOptions($form->getValues());

        if($this->_request->getParam('contentMarkdown')){
            $context_html = Michelf\MarkdownExtra::defaultTransform($this->_request->getParam('contentMarkdown'));
            $item->setContentHtml($context_html);
        }


        $fullPath = $this->_request->getParam('path');

        if($this->_request->getParam('parentId') != 0){
            $parentCategory = $this->_modelMapper->find($this->_request->getParam('parentId'), new Pipeline_Model_PipelineCategories());
            if($parentCategory)
                $fullPath = $parentCategory->getFullPath();
        }
        $item->setFullPath($fullPath);

        $this->setMetaData($item);
        
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







