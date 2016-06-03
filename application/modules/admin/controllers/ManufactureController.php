<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

include_once 'BaseController.php';

class ManufactureController extends BaseController
{
    /**
     * @var Manufacture_Model_Mapper_Manufacture
     */
    protected $_modelMapper = null;

    /**
     * @var Manufacture_Model_Manufacture
     */
    protected $_model = null;

    /**
     * @var Manufacture_Model_Mapper_ManufactureCategories
     */
    protected $_modelCategoriesMapper = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    protected $_count_item_on_page = null;

    /**
     * @var Zend_Form[]
     *
     */
    protected $_forms = array();

    public function init()
    {
        $this->_modelMapper = new Manufacture_Model_Mapper_Manufacture();
        $this->_model = new Manufacture_Model_Manufacture();
        $this->_modelCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $this->_forms['edit'] = new Admin_Form_ManufactureEdit();

        $this->_redirector = $this->_helper->getHelper('Redirector');

        $this->_count_item_on_page = 10;

    }

    public function indexAction()
    {
        parent::indexAction();

        if($this->_request->getParam('category_id')){
            $this->view->categoryName = $this->_modelCategoriesMapper
                    ->find(
                        $this->_request->getParam('category_id'),
                        new Manufacture_Model_ManufactureCategories())
                    ->getTitle().' - ';

            $this->view->category_id = $this->_request->getParam('category_id');
        }




        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить товар',
                'module' => 'admin',
                'controller' => 'manufacture',
                'action' => 'add',
                'resource' => 'manufacture',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Категории',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
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
                'label' => 'Добавить товар',
                'module' => 'admin',
                'controller' => 'manufacture',
                'action' => 'add',
                'resource' => 'manufacture',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Категории',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'resource' => 'manufacture-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отмена',
                'module' => 'admin',
                'controller' => 'manufacture',
                'resource' => 'manufacture',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;*/
    }

    public function editAction()
    {
        parent::editAction();

        /*$config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить товар',
                'module' => 'admin',
                'controller' => 'manufacture',
                'action' => 'add',
                'resource' => 'manufacture',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить',
                'module' => 'admin',
                'controller' => 'manufacture',
                'action' => 'delete',
                'resource' => 'manufacture',
                'params' => array(
                    'id' => $itemId,
                ),
            )),
            Zend_Navigation_Page_Uri::factory(array(
                'label' => 'Посмотреть на сайте',
                'uri' => '/manufacture/'.$manufacture->getFullPath().'/',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отмена',
                'module' => 'admin',
                'controller' => 'manufacture',
                'resource' => 'manufacture',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;*/
    }
}







