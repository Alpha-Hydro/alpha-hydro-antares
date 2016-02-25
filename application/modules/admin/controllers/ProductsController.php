<?php

class ProductsController extends Zend_Controller_Action
{

    /**
     * @var Catalog_Model_Mapper_Products
     */
    protected $_modelMapper = null;

    public function init()
    {
        $this->_modelMapper = new Catalog_Model_Mapper_Products();

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
            $product = $this->_modelMapper->find($id, new Catalog_Model_Products());
            $jsonData = $product->getOptions();
        }


        return $this->_helper->json->sendJson($jsonData);
    }

}

