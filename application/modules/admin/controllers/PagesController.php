<?php
include_once 'BaseController.php';

class PagesController extends BaseController
{
    /**
     * @var Pages_Model_Mapper_Pages
     */
    protected $_modelMapper = null;

    /**
     * @var Pages_Model_Pages
     */
    protected $_model = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    /**
     * @var Zend_Form[]
     */
    protected $_forms = array();


    public function init()
    {
        $this->_modelMapper = new Pages_Model_Mapper_Pages();
        $this->_model = new Pages_Model_Pages();
        $this->_forms['edit'] = new Admin_Form_PageEdit();

        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        parent::indexAction();
        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'На сайт',
                'uri' => '/'
            )),
        );
        $containerNav = new Zend_Navigation($config);
        $this->view->assign('container_nav', $containerNav);
    }

    public function addAction()
    {
        parent::addAction();

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pages',
                'action' => 'index',
            )),
        );
        $containerNav = new Zend_Navigation($config);
        $this->view->assign('container_nav', $containerNav);
    }

    public function editAction()
    {
        parent::editAction();

        $page = $this->_modelMapper->find($this->_request->getParam('id'), new Pages_Model_Pages());
        if(is_null($page))
            $this->_redirector->gotoSimpleAndExit('index');

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'На сайт',
                'uri' => ($page->getPath() != 'home')
                    ?'/'.$page->getPath().'/'
                    :'/',
            ))
        );
        $containerNav = new Zend_Navigation($config);
        $this->view->container_nav = $containerNav;
    }

    public function seoAction()
    {
        $pageId = $this->_request->getParam('id');

        if(is_null($pageId))
            $this->_redirector->gotoSimpleAndExit('index');

        $page = $this->_modelMapper->find($pageId, new Pages_Model_Pages());

        if ($this->getRequest()->isPost()){
            if($this->getRequest()->getParam('dataFormSeo')){
                $dataFormSeo = $this->getRequest()->getParam('dataFormSeo');
                $page->setOptions($dataFormSeo);
                $this->_modelMapper->save($page);
            }
        }

        $url = ($page->getPath() != 'home')? '/'.$page->getPath():'/';
        $this->_redirector->gotoUrlAndExit($url);
    }


    public function disabledAction()
    {
        $this->forward('enable');
    }


    public function enabledAction()
    {
        $this->forward('enable');
    }
}













