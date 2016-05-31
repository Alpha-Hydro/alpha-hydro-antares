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
        /*$request = $this->getRequest();

        $pageMapper = new Pipeline_Model_Mapper_PipelineCategories();

        $select = $pageMapper->getDbTable()->select();
        $select->order('sorting ASC');

        $pageItems = $pageMapper->fetchAll($select);

        if(!empty($pageItems)){
            if(count($pageItems)> $this->getCountItemOnPage()){

                $pages = array_chunk($pageItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($pages))
                    $currentPage = count($pages)-1;

                $pageItems = $pages[$currentPage];
                $this->view->countPage = count($pages);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->pages = $pageItems;*/

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

    /*public function listAction()
    {
        $this->forward('index', 'pipeline', 'admin', array('category_id' => $this->_getParam('id')));
        return;
    }*/

    public function addAction()
    {
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

}







