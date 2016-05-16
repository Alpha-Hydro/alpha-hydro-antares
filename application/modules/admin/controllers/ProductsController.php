<?php

class ProductsController extends Zend_Controller_Action
{

    /**
     * @var Catalog_Model_Mapper_Products
     *
     */
    protected $_modelMapper = null;

    /**
     * @var Catalog_Model_Mapper_Categories
     *
     */
    protected $_categoriesModelMapper = null;

    /**
     * @var Catalog_Model_Mapper_ProductParams
     *
     */
    protected $_paramsMapper = null;

    /**
     * @var Catalog_Model_Mapper_Subproducts
     *
     */
    protected $_subproductsModelMapper = null;

    /**
     * @var Catalog_Model_Mapper_SubproductParams
     *
     */
    protected $_subproductsParamsMapper = null;

    /**
     * @var Catalog_Model_Mapper_SubproductParamsValues
     *
     */
    protected $_subproductParamsValuesMapper = null;

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
            ->addActionContext('modification-property-edit', array('json'))
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

                $category = $this->_modelMapper->findCategoryRel($id, new Catalog_Model_Categories());
                if(!is_null($category)){
                    $jsonData['categoryId'] = $category->getId();

                    $breadcrumbs = $this->breadcrumbs($category->getId(), true);
                    $jsonData = array_merge($jsonData, $breadcrumbs);
                }

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

                $breadcrumbs = $this->breadcrumbs($category->getId(), true);
                $jsonData = array_merge($jsonData, $breadcrumbs);
            }
        }

        return $this->_helper->json->sendJson($jsonData);
        //Zend_Debug::dump($jsonData);
    }

    public function breadcrumbs($id, $full = false)
    {
        $entries = $this->_categoriesModelMapper->fetchTreeParentCategories($id);
        $breadcrumbs = array();
        foreach ($entries as $entry) {
            $breadcrumbs[] = $entry->name;
        }

        if(!empty($breadcrumbs) && !$full)
            array_shift($breadcrumbs);

        $treeCategories = array(
          'breadcrumbs' =>  implode(" > ", array_reverse($breadcrumbs))
        );

        return $treeCategories;
    }

    public function editAction()
    {
        //Zend_Debug::dump($this->_request->getParams());

        $productId = $this->_request->getParam('id');

        if(is_null($productId))
            $this->_redirector->gotoSimpleAndExit('index');

        $product = $this->_modelMapper->find($productId, new Catalog_Model_Products());

        if($this->_request->isPost()){
            $url = $this->_request->getParam('currentUrl');

            if($this->_request->getParam('dataFormProducts')){
                $dataProducts = $this->_request->getParam('dataFormProducts');
                //основные - sku, name, description, note, sorting, path
                $product->setOptions($dataProducts);
                //modDate, order
                $product->setModDate(date("Y-m-d H:i:s"));
                $product->setOrder($dataProducts['sorting']);

                //fullPath, categoryId в category_xref
                $categoryId = $this->_request->getParam('categoryId');
                $category = $this->_categoriesModelMapper->find($categoryId, new Catalog_Model_Categories());
                if($category){
                    $fullPath = $category->getFullPath().'/'.$dataProducts['path'];
                    $product->setFullPath($fullPath);

                    $categoriesXrefMapper = new Catalog_Model_Mapper_CategoriesXref();
                    $oldCategory = $this->_modelMapper->findCategoryRel($productId, new Catalog_Model_Categories());
                    $categoriesXref = $categoriesXrefMapper->find($productId, $oldCategory->getId(), new Catalog_Model_CategoriesXref());
                    $categoriesXref->setCategoryId($categoryId);
                    $categoriesXrefMapper->updateByProductId($categoriesXref);

                    $url = '/catalog/'.$fullPath;
                }

                $upload = new Zend_File_Transfer();
                $uploadPath = '/upload/products/'.$productId.'/';
                //image
                if($upload->isUploaded('fileLoadImage')){
                    $imageFile = $this->_uploadFiles($productId, $upload, 'fileLoadImage');
                    $product
                        ->setUploadPath($uploadPath)
                        ->setImage($imageFile['fileLoadImage']['name']);
                }

                //draft
                if($upload->isUploaded('fileLoadDraft')){
                    $imageFile = $this->_uploadFiles($productId, $upload, 'fileLoadDraft');
                    $product
                        ->setUploadPathDraft($uploadPath)
                        ->setDraft($imageFile['fileLoadDraft']['name']);
                }

                $this->_modelMapper->save($product);
            }

            //Zend_Debug::dump($product);
            $this->_redirector->gotoUrlAndExit($url);
        }
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

        $properties = $this->_request->getParam('properties');
        if($properties && !empty($properties)){
            foreach ($properties as $property) {
                if($property['id'] != 'new'){
                    $productParams = $this->_paramsMapper->find($property['id'], new Catalog_Model_ProductParams());
                    if($productParams){
                        $productParams->setOptions($property);
                        $this->_paramsMapper->save($productParams);
                    }
                }
                else{
                    $productParams = new Catalog_Model_ProductParams();
                    $productParamsOrder = ($property['order'] && $property['order'] != '')
                        ? $property['order']
                        : 0;

                    $productParams
                        ->setName($property['name'])
                        ->setOrder($productParamsOrder)
                        ->setProductId($property['productId'])
                        ->setValue($property['value']);

                    $this->_paramsMapper->save($productParams);

                    $id = $this->_paramsMapper->getDbTable()->getAdapter()->lastInsertId();
                    $productParams->setId($id);
                }
            }
        }

        $deletedProperies = $this->_request->getParam('deleted');
        if($deletedProperies && !empty($deletedProperies)){
            foreach ($deletedProperies as $deletedPropery) {
                $id = $deletedPropery['id'];
                $this->_paramsMapper->delete($id);
            }
        }

        $this->_helper->json->sendJson($properties);
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
                        $subProductOrder = ($item['order'] && $item['order'] != '')
                            ? $item['order']
                            : 0;
                        $subProduct
                            ->setParentId($item['parentId'])
                            ->setSku($item['sku'])
                            ->setName($item['sku'])
                            ->setAddDate(date("Y-m-d H:i:s"))
                            ->setModDate(date("Y-m-d H:i:s"))
                            ->setOrder($subProductOrder)
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
            
            $deletedModifications = $modificationTableData['deleted'];
            if($deletedModifications && !empty($deletedModifications)){
                foreach ($deletedModifications as $deletedModification) {
                    $item = $deletedModification['item'];
                    $subProductId = $item['id'];
                    if($subProductId != 'new'){
                        $subProduct = $this->_subproductsModelMapper
                            ->find($subProductId, new Catalog_Model_Subproducts());
                        if($subProduct){
                            $subProduct->setDeleted(1);
                            $this->_subproductsModelMapper->save($subProduct);
                        }
                    }
                }
            }
        }
        
        $this->_helper->json->sendJson($modificationTableData);
    }

    public function modificationPropertyEditAction()
    {
        //Zend_Debug::dump($this->_request->getParams());
        $modificationPropertyData = $this->_request->getParam('modificationPropertyData');

        $subproductProperties = $modificationPropertyData['columns'];
        if($subproductProperties){
            foreach ($subproductProperties as $subproductProperty) {
                $propertyId = $subproductProperty['id'];
                if($propertyId != 'new'){
                    $subproductParams = $this->_subproductsParamsMapper
                        ->find($propertyId, new Catalog_Model_SubproductParams());
                    if($subproductParams){
                        $subproductParams->setOptions($subproductProperty);
                        $this->_subproductsParamsMapper->save($subproductParams);
                    }
                }
                else{
                    $subproductParams = $this->newSubproductProperty($subproductProperty);

                    $modificationPropertyData['newProperty'][] = $subproductParams->getOptions();
                }

            }
        }
        
        $deletedSubproductProperties = $modificationPropertyData['deleted'];
        if($deletedSubproductProperties && !empty($deletedSubproductProperties)){
            foreach ($deletedSubproductProperties as $deletedSubproductProperty) {
                $propertyId = $deletedSubproductProperty['id'];
                if($propertyId != 'new'){
                    $this->_subproductsParamsMapper
                        ->delete($propertyId);
                    $subproductParamsValues = $this->_subproductParamsValuesMapper
                        ->fetchAll($this->_subproductParamsValuesMapper
                            ->getDbTable()
                            ->select()
                            ->where('param_id = ?', $propertyId));
                    if(!empty($subproductParamsValues))
                        $this->_subproductParamsValuesMapper
                            ->getDbTable()
                            ->delete(array('param_id = ?' => $propertyId));
                }
            }
        }

        return $this->_helper->json->sendJson($modificationPropertyData);
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

    /**
     * @param $id
     * @param $data
     */
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

    /**
     * @param $subproductProperty
     * @return Catalog_Model_SubproductParams
     */
    public function newSubproductProperty(&$subproductProperty)
    {
        $subproductParams = new Catalog_Model_SubproductParams();
        $subproductParamsOrder = ($subproductProperty['order'] && $subproductProperty['order'] != '')
            ? $subproductProperty['order']
            : 0;
        $subproductParams
            ->setProductId($subproductProperty['productId'])
            ->setName($subproductProperty['name'])
            ->setOrder($subproductParamsOrder);

        $this->_subproductsParamsMapper->save($subproductParams);
        $id = $this->_subproductsParamsMapper->getDbTable()->getAdapter()->lastInsertId();
        $subproductParams->setId($id);

        $modifications = $this->_subproductsModelMapper
            ->fetchAll($this->_subproductsModelMapper
                ->getDbTable()
                ->select()
                ->where('parent_id = ?', $subproductProperty['productId'])
            );
        if(!empty($modifications)){
            foreach ($modifications as $modification) {
                $subproductParamsValue = new Catalog_Model_SubproductParamsValues();
                $subproductParamsValue
                    ->setParamId($id)
                    ->setSubproductId($modification->getId())
                    ->setValue('-');
                $this->_subproductParamsValuesMapper->save($subproductParamsValue);
            }
        }

        return $subproductParams;
    }

    /**
     * @param $subProductId
     * @param $values
     */
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

    /**
     * @param $id
     * @param Zend_File_Transfer $upload
     * @param string $uploadName
     * @return mixed
     */
    protected function _uploadFiles($id, Zend_File_Transfer $upload, $uploadName = 'fileLoad')
    {
        $moduleFolder = UPLOAD_DIR . '/products';
        if (!file_exists($moduleFolder))
            mkdir($moduleFolder, 0755);

        $destinationPath = $moduleFolder . '/' . $id;
        if (!file_exists($destinationPath))
            mkdir($destinationPath, 0755);


        $upload->setDestination($destinationPath)
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,gif,svg');
        $upload->receive($uploadName);

        $uploadFile = $upload->getFileInfo($uploadName);

        return $uploadFile;
    }


}































