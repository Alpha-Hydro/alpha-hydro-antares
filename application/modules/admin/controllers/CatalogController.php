<?php

class CatalogController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        //$this->_helper->layout->disableLayout();
        $this->forward('index', 'index', 'catalog');
    }


}

