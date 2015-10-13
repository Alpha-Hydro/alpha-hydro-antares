<?php

class Admin_ManufactureController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
        $this->view->pages = $manufactureMapper->fetchAll();
    }

    public function addAction()
    {
        // action body
    }

    public function editAction()
    {
        // action body
    }

    public function deleteAction()
    {
        // action body
    }


}







