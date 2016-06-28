<?php

include_once 'BaseController.php';

class ManufactureCategoriesController extends BaseController
{
    /**
     * @var Manufacture_Model_Mapper_ManufactureCategories
     */
    protected $_modelMapper = null;

    /**
     * @var Manufacture_Model_ManufactureCategories
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

        $this->_modelMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $this->_model = new Manufacture_Model_ManufactureCategories();
        $this->_forms['edit'] = new Admin_Form_ManufactureCategoriesEdit();
        $this->_upload_path = '/upload/manufacture/categories/';

        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        parent::indexAction();
        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'На сайт',
                'uri' => '/manufacture/'
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $editUrlOptions = array(
            'module' => 'admin',
            'controller' => 'pages',
            'action' => 'edit',
            'id' => $this->getPageModule('manufacture')->getId(),
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

            $this->setUploadImage($categories);

            $markdown = $dataPage['contentMarkdown'];
            $context_html = Michelf\MarkdownExtra::defaultTransform($markdown);
            $categories->setContentHtml($context_html);

            $this->_modelMapper->save($categories);

            $this->_redirector->gotoUrlAndExit('/manufacture/'.$categories->getPath());
        }

        parent::editAction();
    }
}







