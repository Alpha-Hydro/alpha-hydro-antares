<?php

include_once 'BaseController.php';

class MediaCategoriesController extends BaseController
{

    /**
     * @var Media_Model_Mapper_MediaCategories
     */
    protected $_modelMapper = null;

    /**
     * @var Media_Model_MediaCategories
     */
    protected $_model = null;

    /**
     * @var Zend_Form[]
     */
    protected $_forms = array();

    public function init()
    {
        $this->_modelMapper = new Media_Model_Mapper_MediaCategories();
        $this->_model = new Media_Model_MediaCategories();
        $this->_forms['edit'] = new Admin_Form_MediaCategoriesEdit();
    }

    public function indexAction()
    {
        parent::indexAction();
        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'На сайт',
                'uri' => '/media/'
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $editUrlOptions = array(
            'module' => 'admin',
            'controller' => 'pages',
            'action' => 'edit',
            'id' => $this->getPageModule('media')->getId(),
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

            $this->_modelMapper->save($categories);

            $this->getRedirector()->gotoUrlAndExit('/media/'.$categories->getPath());
        }
        
        parent::editAction();
    }
}











