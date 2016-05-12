<?php

include_once 'BaseController.php';

class Api_PipelineCategoriesController extends Api_BaseController
{

    /**
     * @var Pipeline_Model_Mapper_PipelineCategories
     */
    protected $_modelMapper;

    /**
     * @var Pipeline_Model_PipelineCategories
     */
    protected $_model;

    public function init()
    {
        $this->_modelMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $this->_model = new Pipeline_Model_PipelineCategories();
    }


}

