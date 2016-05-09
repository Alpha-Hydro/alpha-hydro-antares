<?php

include_once 'BaseController.php';

class Api_OilCategoriesController extends Api_BaseController
{
    /**
     * @var Oil_Model_Mapper_OilCategories
     */
    protected $_modelMapper;

    /**
     * @var Oil_Model_OilCategories
     */
    protected $_model;

    public function init()
    {
        $this->_modelMapper = new Oil_Model_Mapper_OilCategories();
        $this->_model = new Oil_Model_OilCategories();
    }

}



