<?php

class ProductsController extends Zend_Controller_Action
{

    /**
     * @var Catalog_Model_Mapper_Products
     *
     */
    protected $_modelMapper = null;

    /**
     * @var Zend_Controller_Request_Abstract
     *
     */
    protected $_request = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     */
    protected $_redirector = null;

    public function init()
    {
        $this->_modelMapper = new Catalog_Model_Mapper_Products();
        $this->_request = $this->getRequest();
        $this->_redirector = $this->_helper->getHelper('Redirector');

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->addActionContext('category', array('json'))
            ->initContext();
    }

    public function indexAction()
    {
        // action body
    }

    public function jsonAction()
    {
        $id = $this->_request->getParam('id');

        $jsonData = array(
            $this->_request->getControllerKey() => $this->_request->getControllerName(),
            'role' => Zend_Auth::getInstance()->getIdentity()->role
        );

        if($id){
            $entry = $this->_modelMapper->find($id, new Catalog_Model_Products());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }

        return $this->_helper->json->sendJson($jsonData);
    }

    public function categoryAction()
    {
        $id = $this->_request->getParam('id');
        $jsonData = array();
        if($id){
            $category = $this->_modelMapper->findCategoryRel($id, new Catalog_Model_Categories());
            if(!is_null($category)){
                $jsonData = $category->getOptions();
                $categoryMapper = new Catalog_Model_Mapper_Categories();
                
            }
        }

        return $this->_helper->json->sendJson($jsonData);
        //Zend_Debug::dump($jsonData);
    }


}



