<?php

class AboutController extends Zend_Controller_Action
{
    public function init()
    {
    }

    public function indexAction()
    {
        $this->forward('index', 'about', 'pages');
    }
}

