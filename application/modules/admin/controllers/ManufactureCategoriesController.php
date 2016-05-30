<?php

include_once 'BaseController.php';

class ManufactureCategoriesController extends Admin_BaseController
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

    public function init()
    {
        $this->_count_item_on_page = 10;

        $this->_modelMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $this->_model = new Manufacture_Model_ManufactureCategories();
        $this->_forms['edit'] = new Admin_Form_ManufactureCategoriesEdit();


        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        parent::indexAction();

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'action' => 'add',
                'resource' => 'manufacture-categories',
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function addAction()
    {
        parent::addAction();

        /*$config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'action' => 'add',
                'resource' => 'manufacture-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'resource' => 'manufacture-categories',
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;*/
    }
}







