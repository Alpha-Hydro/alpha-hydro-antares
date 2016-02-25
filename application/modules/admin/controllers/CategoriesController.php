<?php

class CategoriesController extends Zend_Controller_Action
{
    /**
     * @var Catalog_Model_Mapper_Categories
     */
    protected $_modelMapper = null;

    public function init()
    {
        $this->_modelMapper = new Catalog_Model_Mapper_Categories();

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->initContext();
    }

    public function indexAction()
    {
        // action body
    }

    public function jsonAction()
    {
        $request = $this->getRequest();
        $id = $request->getParam('id');

        $jsonData = array();

        if($id){
            $categories = $this->_modelMapper->find($id, new Catalog_Model_Categories());
            $jsonData = $categories->getOptions();
        }


        return $this->_helper->json->sendJson($jsonData);
    }
}

