<?php

class HomeController extends Zend_Controller_Action
{
    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    public function init()
    {
        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        $this->_helper->layout->setLayout('layout_admin');
        $this->forward('index', 'home', 'pages');
        return;
    }


}

