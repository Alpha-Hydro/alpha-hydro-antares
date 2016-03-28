<?php

class ProductsController extends Zend_Controller_Action
{

    /**
     * @var Catalog_Model_Mapper_Products
     *
     */
    protected $_modelMapper = null;

    /**
     * @var Catalog_Model_Mapper_ProductParams
     *
     */
    protected $_paramsMapper = null;

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
        $this->_paramsMapper = new Catalog_Model_Mapper_ProductParams();
        $this->_request = $this->getRequest();
        $this->_redirector = $this->_helper->getHelper('Redirector');

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->addActionContext('category', array('json'))
            ->addActionContext('property', array('json'))
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
            if(!is_null($entry)){
                $jsonData = array_merge($jsonData, $entry->getOptions());

                $select = $this->_paramsMapper->getDbTable()->select()->order('order ASC');
                $properties = $this->_modelMapper->findProductParams($id, $select, true);

                if(!empty($properties))
                    $jsonData['properties'] = $properties;
            }
        }

        return $this->_helper->json->sendJson($jsonData);
        //Zend_Debug::dump($jsonData);
    }

    public function categoryAction()
    {
        $id = $this->_request->getParam('id');
        $jsonData = array();
        if($id){
            $category = $this->_modelMapper->findCategoryRel($id, new Catalog_Model_Categories());
            if(!is_null($category)){
                $jsonData = $category->getOptions();

                $breadcrumbs = $this->breadcrumbs($category->getId());
                $jsonData = array_merge($jsonData, $breadcrumbs);
            }
        }

        return $this->_helper->json->sendJson($jsonData);
        //Zend_Debug::dump($jsonData);
    }

    public function breadcrumbs($id)
    {
        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $entries = $categoryMapper->fetchTreeParentCategories($id);
        $breadcrumbs = array();
        foreach ($entries as $entry) {
            $breadcrumbs[] = $entry->name;
        }

        if(!empty($breadcrumbs))
            array_shift($breadcrumbs);

        $treeCategories = array(
          'breadcrumbs' =>  implode(" > ", array_reverse($breadcrumbs))
        );

        return $treeCategories;
    }

    public function editAction()
    {
        Zend_Debug::dump($this->_request->getParams());
    }

    public function addAction()
    {
        Zend_Debug::dump($this->_request->getParams());
    }

    public function seoAction()
    {
        Zend_Debug::dump($this->_request->getParams());
    }

    public function deleteAction()
    {
        Zend_Debug::dump($this->_request->getParams());
    }

    public function disabledAction()
    {
        Zend_Debug::dump($this->_request->getParams());
    }

    public function enabledAction()
    {
        Zend_Debug::dump($this->_request->getParams());
    }

    public function propertyAction()
    {
        $id = $this->_request->getParam('id');
        $select = $this->_paramsMapper->getDbTable()->select()->order('order ASC');
        $properties = $this->_modelMapper->findProductParams($id, $select, true);

        return $this->_helper->json->sendJson($properties);
        //Zend_Debug::dump($properties);
    }
}

















