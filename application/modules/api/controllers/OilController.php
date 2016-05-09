<?php

include_once 'BaseController.php';

class Api_OilController extends Api_BaseController
{
    /**
     * @var Oil_Model_Mapper_Oil
     */
    protected $_modelMapper = null;

    /**
     * @var Oil_Model_Oil
     */
    protected $_model;


    public function init()
    {
        $this->_modelMapper = new Oil_Model_Mapper_Oil();
        $this->_model = new Oil_Model_Oil();
    }
}



