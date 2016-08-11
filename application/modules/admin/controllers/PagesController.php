<?php
/**
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

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

    /**
     * @var null
     *
     */
    protected $_upload_path = null;


    public function init()
    {
        $this->_modelMapper = new Pages_Model_Mapper_Pages();
        $this->_model = new Pages_Model_Pages();
        $this->_forms['edit'] = new Admin_Form_PageEdit();
        $this->_upload_path = '/upload/pages/';

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
        $this->_forms['edit']->removeElement('path');

        $id = $this->_request->getParam('id');
        $page = $this->_modelMapper->find($id, new Pages_Model_Pages());

        if(is_null($page))
            $this->_redirector->gotoSimpleAndExit('index');


        if($this->_request->getParam('dataPage')){
            $dataPage = $this->_request->getParam('dataPage');

            $page->setOptions($dataPage);

            $this->setUploadImage($page);

            $markdown = $dataPage['contentMarkdown'];
            $context_html = Michelf\MarkdownExtra::defaultTransform($markdown);
            $page->setContentHtml($context_html);

            $this->_modelMapper->save($page);

            $this->_redirector->gotoUrlAndExit($this->_request->getParam('currentUrl'));
        }

        parent::editAction();

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
        parent::enableAction();
    }


    public function enabledAction()
    {
        parent::enableAction();
    }
}













