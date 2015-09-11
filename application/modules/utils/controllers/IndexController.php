<?php

class Utils_IndexController extends Zend_Controller_Action
{

    public function init()
    {

    }

    public function indexAction()
    {
        $categories = new Model_Mapper_Categories();
        var_dump($categories->getDbTable());
    }
}

