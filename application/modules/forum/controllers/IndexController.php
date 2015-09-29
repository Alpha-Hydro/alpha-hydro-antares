<?php

class Forum_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $forumMapper = new Forum_Model_Mapper_Forum();
        $forumItemsAll = $forumMapper->fetchAll();

        $this->view->title = 'Форум';

        $this->view->forumItemsAll = $forumItemsAll;
    }


}

