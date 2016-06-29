<?php

class Pages_IndexController extends Zend_Controller_Action
{
    public function indexAction()
    {
        $this->forward('index', 'home', 'page');
    }

}

