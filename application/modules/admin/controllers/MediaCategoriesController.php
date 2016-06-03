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
     *
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
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'media-categories',
                'action' => 'add',
                'resource' => 'media-categories',
            ))
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function addAction()
    {
        parent::addAction();
    }
    
}







