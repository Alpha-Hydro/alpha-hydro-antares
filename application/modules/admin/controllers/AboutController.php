<?php

class AboutController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $this->_helper->layout->setLayout('layout_admin');
        $this->forward('index', 'about', 'pages');
        return;
    }


}

