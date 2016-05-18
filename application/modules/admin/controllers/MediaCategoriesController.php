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

    public function addAction()
    {
        // action body
    }
    
}







