<?php

class RobotstxtController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $this->view->layout()->disableLayout();

        // Output txt than HTML
        $this->getResponse()->setHeader('Content-Type', 'text/plain');
    }


}

