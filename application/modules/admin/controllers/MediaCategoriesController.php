<?php

include_once 'BaseController.php';

class MediaCategoriesController extends Admin_BaseController
{

    /**
     * @var Media_Model_Mapper_MediaCategories
     */
    protected $_modelMapper = null;

    public function init()
    {
        $this->_modelMapper = new Media_Model_Mapper_MediaCategories();

    }

    public function indexAction()
    {
        parent::indexAction();
        $this->setNavigation('Добавить категорию', 'add');
    }

    public function editAction()
    {
        parent::editAction();
        $this->setNavigation('Добавить категорию', 'add');
    }

    public function addAction()
    {
        // action body
    }


    public function deleteAction()
    {
        // action body
    }

}







