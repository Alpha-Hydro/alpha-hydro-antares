<?php

class ContactsController extends Zend_Controller_Action
{
    public function init()
    {
    }

    public function indexAction()
    {
        $this->forward('index', 'contacts', 'pages');
    }
}

