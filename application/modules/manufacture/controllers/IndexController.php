<?php

class Manufacture_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $pageMapper = new Default_Model_Mapper_Pages();
        $page = $pageMapper->find(4, new Default_Model_Pages());

        $this->view->page = $page;
    }


}

