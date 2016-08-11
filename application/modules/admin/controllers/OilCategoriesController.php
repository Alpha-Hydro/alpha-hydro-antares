<?php

include_once 'BaseController.php';

class OilCategoriesController extends BaseController
{

    /**
     * @var Oil_Model_Mapper_OilCategories
     */
    protected $_modelMapper = null;

    /**
     * @var Oil_Model_OilCategories
     */
    protected $_model = null;

    /**
     * @var Zend_Form[];
     */
    protected $_forms = array();

    /**
     * @var null
     *
     */
    protected $_upload_path = null;

    public function init()
    {
        $this->_modelMapper = new Oil_Model_Mapper_OilCategories();
        $this->_model = new Oil_Model_OilCategories();
        $this->_forms['edit'] = new Admin_Form_OilCategoriesEdit();
        $this->_upload_path = '/upload/oil/categories/';
    }

    public function indexAction()
    {
        parent::indexAction();

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'На сайт',
                'uri' => '/oil/'
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $editUrlOptions = array(
            'module' => 'admin',
            'controller' => 'pages',
            'action' => 'edit',
            'id' => $this->getPageModule('oil')->getId(),
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

            $this->getRedirector()->gotoUrlAndExit('/oil/'.$categories->getFullPath());
        }

        parent::editAction();
    }

    public function saveFormData(Zend_Form $form)
    {
        $item = $this->getModel();
        $item->setOptions($form->getValues());

        if($this->_request->getParam('contentMarkdown')){
            $context_html = Michelf\MarkdownExtra::defaultTransform($this->_request->getParam('contentMarkdown'));
            $item->setContentHtml($context_html);
        }

        $item->setFullPath($this->_request->getParam('path'));

        if($this->_request->getParam('parentId') !== 0){
            $parentCategory = $this->_modelMapper
                ->find($this->_request->getParam('parentId'), new Oil_Model_OilCategories());

            if(!is_null($parentCategory))
                $item->setFullPath($parentCategory->getFullPath().'/'.$this->_request->getParam('path'));
        }

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











