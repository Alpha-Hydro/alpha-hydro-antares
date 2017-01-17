<?php

class Pages_StaticPageController extends Zend_Controller_Action
{
    /**
     * @var Pages_Model_Mapper_Pages
     */
    protected $_pagesMapper = null;

    /**
     * @var Pages_Model_Pages
     */
    protected $_page = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    public function init()
    {
    }

    public function indexAction()
    {
        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){
            $id = ($this->getRequest()->getParam('json') != '')
                ?$this->getRequest()->getParam('json')
                :$this->getPage()->getId();

            $this->forward('json', 'pages', 'admin', array('id' => $id));
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'pages',
                    'id' => $this->getPage()->getId(),
                    'active' => $this->getPage()->getActive(),
                    'deleted' => $this->getPage()->getDeleted()
                )
            ));
        }

        if($this->getPage()->getDeleted() === '1'){
            if (!Zend_Auth::getInstance()->hasIdentity())
                throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

            $this->getRedirector()->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'pages',
                'action' => 'index'
            ),'adminEdit', true);
        }

        if($this->getPage()->getActive() === '0'
            && !Zend_Auth::getInstance()->hasIdentity())
            throw new Zend_Controller_Action_Exception("Раздел временно не доступен", 500);

        if($this->_request->getServer('HTTP_HOST') === 'alfa-hydro.loc'){

            $layout = Zend_Layout::getMvcInstance();
            $loading = $this->_request->getParam('loading');
            if(isset($loading)){
                $layout->setLayout('layout');
            }
            else{
                $layout->setLayout('alfa-hydro');
            }
        }

        $this->view->assign(array(
            'adminPath' => 'pages/edit/'.$this->getPage()->getId(),
            'page' => $this->getPage(),
            'meta_description' => $this->getPage()->getMetaDescription(),
            'meta_keywords' => $this->getPage()->getMetaKeywords()
        ));
    }

    /**
     * @return Pages_Model_Mapper_Pages
     */
    public function getPagesMapper()
    {
        return $this->_pagesMapper = new Pages_Model_Mapper_Pages();
    }


    /**
     * @return Pages_Model_Pages
     */
    public function getPage()
    {
        $pageStaticPath = $this->_request->getControllerName();
        $this->_page = $this->getPagesMapper()->findByPath($pageStaticPath, new Pages_Model_Pages());
        return $this->_page;
    }

    /**
     * @return Zend_Controller_Action_Helper_Redirector
     */
    public function getRedirector()
    {
        $this->_redirector = $this->_helper->getHelper('Redirector');
        return $this->_redirector;
    }
}

