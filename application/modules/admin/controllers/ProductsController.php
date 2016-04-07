<?php

class ProductsController extends Zend_Controller_Action
{

    /**
     * @var Catalog_Model_Mapper_Products
     */
    protected $_modelMapper = null;

    /**
     * @var Catalog_Model_Mapper_Categories
     */
    protected $_categoriesModelMapper = null;

    /**
     * @var Catalog_Model_Mapper_ProductParams
     */
    protected $_paramsMapper = null;

    /**
     * @var Catalog_Model_Mapper_Subproducts
     */
    protected $_subproductsModelMapper = null;

    /**
     * @var Catalog_Model_Mapper_SubproductParams
     */
    protected $_subproductsParamsMapper = null;

    /**
     * @var Catalog_Model_Mapper_SubproductParamsValues
     */
    protected $_subproductParamsValuesMapper = null;

    /**
     * @var Zend_Controller_Request_Abstract
     */
    protected $_request = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    public function init()
    {
        $this->_modelMapper = new Catalog_Model_Mapper_Products();
        $this->_categoriesModelMapper = new Catalog_Model_Mapper_Categories();
        $this->_paramsMapper = new Catalog_Model_Mapper_ProductParams();
        $this->_subproductsModelMapper = new Catalog_Model_Mapper_Subproducts();
        $this->_subproductsParamsMapper = new Catalog_Model_Mapper_SubproductParams();
        $this->_subproductParamsValuesMapper = new Catalog_Model_Mapper_SubproductParamsValues();

        $this->_request = $this->getRequest();
        $this->_redirector = $this->_helper->getHelper('Redirector');

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->addActionContext('category', array('json'))
            ->addActionContext('property', array('json'))
            ->addActionContext('property-edit', array('json'))
            ->addActionContext('property-del', array('json'))
            ->addActionContext('modification', array('json'))
            ->addActionContext('modification-edit', array('json'))
            ->addActionContext('modification-del', array('json'))
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
        $entries = $this->_categoriesModelMapper->fetchTreeParentCategories($id);
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

    public function propertyEditAction()
    {
        //Zend_Debug::dump($this->_request->getParams());
        $paramsProperty = $this->_request->getParam('property');

        if($paramsProperty){
            $productParams = new Catalog_Model_ProductParams();

            $productParamsOrder = ($paramsProperty['order'] && $paramsProperty['order'] != '')
                ? $paramsProperty['order']
                : 0;
            
            if($paramsProperty['id'] != 'new'){
                $productParams->setOptions($paramsProperty);
                $this->_paramsMapper->save($productParams);
            }
            else {
                $productParams
                    ->setName($paramsProperty['name'])
                    ->setOrder($productParamsOrder)
                    ->setProductId($paramsProperty['productId'])
                    ->setValue($paramsProperty['value']);

                $this->_paramsMapper->save($productParams);

                $id = $this->_paramsMapper->getDbTable()->getAdapter()->lastInsertId();
                $productParams->setId($id);
            }

            $this->_helper->json->sendJson($productParams->getOptions());
        }
    }

    public function propertyDelAction()
    {
        //Zend_Debug::dump($this->_request->getParams());
        $response = '';
        if($this->_request->getParam('id')){
            $id = $this->_request->getParam('id');
            $this->_paramsMapper->delete($id);

            $response = 'deleted';
        }
            
        $this->_helper->json->sendJson($response);
    }

    public function modificationAction()
    {
        $id = $this->_request->getParam('id');
        $select = $this->_subproductsModelMapper->getDbTable()->select()
            ->where('deleted != ?', 1)
            ->order('order ASC');

        $jsonData = array();
        $jsonData['parentId'] = $id;
        $modifications = $this->_modelMapper->findSubproductsRel($id, $select, true);

        if(!empty($modifications)){
            $selectSubproductParams = $this->_subproductsParamsMapper
                ->getDbTable()->select()->order('order ASC');
            $subproductProperty = $this->_modelMapper->findSubproductParams($id, $selectSubproductParams, true);

            $jsonData['columns'] = $subproductProperty;

            $modificationsTableValues = array();
            foreach ($modifications as $modification) {
                $modificationPropertyValues = $this->_subproductsModelMapper
                    ->findSubProductParamValue($modification['id']);
                $values['item'] = $modification;
                $values['values'] = array();
                foreach ($modificationPropertyValues as $modificationPropertyValue) {
                    $values['values'][] = $modificationPropertyValue->getOptions();
                }
                $modificationsTableValues[] = $values;
            }

            $jsonData['rows'] = $modificationsTableValues;
            //Zend_Debug::dump($jsonData);
            $this->_helper->json->sendJson($jsonData);
        }
    }

    public function modificationEditAction()
    {
        $modificationTableData = $this->_request->getParam('modificationTableData');
        if($modificationTableData){

            $subproductProperties = $modificationTableData['columns'];
            if($subproductProperties){
                foreach ($subproductProperties as $subproductProperty) {
                    $subproductParams = $this->_subproductsParamsMapper->find($subproductProperty['id'], new Catalog_Model_SubproductParams());
                    if($subproductParams){
                        $subproductParams->setOptions($subproductProperty);
                        $this->_subproductsParamsMapper->save($subproductParams);
                    }
                }
            }

            $modifications = $modificationTableData['rows'];
            if($modifications){
                foreach ($modifications as $modification) {
                    $item = $modification['item'];
                    $subProductId = $item['id'];

                    if($subProductId != 'new'){
                        $this->saveEditSubproduct($subProductId, $modification);
                    }
                    else {
                        $subProduct = new Catalog_Model_Subproducts();
                        $subProduct
                            ->setParentId($item['parentId'])
                            ->setSku($item['sku'])
                            ->setName($item['sku'])
                            ->setAddDate(date("Y-m-d H:i:s"))
                            ->setModDate(date("Y-m-d H:i:s"))
                            ->setOrder($item['order'])
                            ->setDeleted(0);

                        $this->_subproductsModelMapper->save($subProduct);
                        $id = $this->_subproductsModelMapper->getDbTable()->getAdapter()->lastInsertId();
                        $subProduct->setId($id);

                        $values = $modification['values'];
                        if($values){
                            foreach ($values as $value) {
                                $subproductParamsValue = new Catalog_Model_SubproductParamsValues();
                                $subproductParamsValue
                                    ->setSubproductId($id)
                                    ->setParamId($value['paramId'])
                                    ->setValue($value['value']);
                                $this->_subproductParamsValuesMapper->save($subproductParamsValue);
                            }
                        }
                        $modificationTableData['newItem'][] = $modification;
                    }
                }
            }
        }
        
        $this->_helper->json->sendJson($modificationTableData);
    }

    public function modificationDelAction()
    {
        //Zend_Debug::dump($this->_request->getParams());
        $response = '';
        if($this->_request->getParam('id')){
            $id = $this->_request->getParam('id');
            $subProduct = $this->_subproductsModelMapper
                ->find($id, new Catalog_Model_Subproducts());

            if($subProduct){
                $subProduct
                    ->setDeleted(1)
                    ->setModDate(date("Y-m-d H:i:s"));
                $this->_subproductsModelMapper->save($subProduct);
                $response = 'deleted';
            }
        }
        $this->_helper->json->sendJson($response);
    }

    public function saveEditSubproduct($id, &$data)
    {
        $subProduct = $this->_subproductsModelMapper
            ->find($id, new Catalog_Model_Subproducts());
        if($subProduct){
            $subProduct->setOptions($data['item']);
            $this->_subproductsModelMapper->save($subProduct);
            $values = $data['values'];
            if($values){
                $this->saveEditSubproductParamsValues($subProduct->getId(), $values);
            }
        }
    }

    public function saveEditSubproductParamsValues($subProductId, &$values)
    {
        foreach ($values as $value) {
            $subproductParamsValue = $this->_subproductParamsValuesMapper
                ->find(
                    $subProductId,
                    $value['paramId'],
                    new Catalog_Model_SubproductParamsValues()
                );

            if(is_null($subproductParamsValue)){
                $subproductParamsValue = new Catalog_Model_SubproductParamsValues();
                $subproductParamsValue
                    ->setSubproductId($subProductId)
                    ->setParamId($value['paramId']);
            }

            $subproductParamsValue->setValue($value['value']);
            $this->_subproductParamsValuesMapper->save($subproductParamsValue);
        }
    }
}





























