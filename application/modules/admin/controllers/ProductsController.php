<?php

include_once 'BaseController.php';

class ProductsController extends BaseController
{

    /**
     * @var Catalog_Model_Mapper_Products
     *
     */
    protected $_modelMapper = null;

    /**
     * @var Catalog_Model_Products
     *
     */
    protected $_model = null;

    /**
     * @var Catalog_Model_Mapper_Categories
     *
     */
    protected $_modelCategoriesMapper = null;

    /**
     * @var Catalog_Model_Categories
     *
     */
    protected $_categoriesModel = null;

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

    /**
     * @var null
     */
    protected $_count_item_on_page = null;


    public function init()
    {
        $this->_modelMapper = new Catalog_Model_Mapper_Products();
        $this->_model = new Catalog_Model_Products();

        $this->_modelCategoriesMapper = new Catalog_Model_Mapper_Categories();
        $this->_categoriesModel = new Catalog_Model_Categories();

        $this->_paramsMapper = new Catalog_Model_Mapper_ProductParams();

        $this->_subproductsModelMapper = new Catalog_Model_Mapper_Subproducts();
        $this->_subproductsParamsMapper = new Catalog_Model_Mapper_SubproductParams();
        $this->_subproductParamsValuesMapper = new Catalog_Model_Mapper_SubproductParamsValues();

        $this->_request = $this->getRequest();
        $this->_redirector = $this->_helper->getHelper('Redirector');
        $this->_count_item_on_page = 10;
    }

    public function indexAction()
    {
        $cache = Zend_Registry::get('cache');

        $select = $this->_modelMapper->getDbTable()->select();
        $select->order('sorting ASC');

        if($this->_request->getParam('category_id')){
            $cacheName = 'Admin_CatalogProductsList_'.$this->_request->getParam('category_id');
            if(!$pageItems = $cache->load($cacheName)){
                $pageItems = $this->_modelCategoriesMapper
                    ->fetchProductsRel($this->_request->getParam('category_id'), $select);

                $cache->save($pageItems, $cacheName, array('admin','Catalog', 'CatalogProductsList'));
            }

            $category = $this->_modelCategoriesMapper
                ->find(
                    $this->_request->getParam('category_id'),
                    new Catalog_Model_Categories()
                );
        }
        else{
            $cacheName = 'Admin_CatalogProductsList_All';
            if(!$pageItems = $cache->load($cacheName)) {
                $pageItems = $this->_modelMapper->fetchAll($select);

                $cache->save($pageItems, $cacheName, array('admin','Catalog', 'CatalogProductsList'));
            }
        }

        if(!empty($pageItems))
            $pageItems = $this->setPaginationPage($pageItems);

        $this->view->pages = $pageItems;

        if(isset($category)){
            $this->view->categoryName = $category->getName().' - ';
            $this->view->current_category = $category->getId();
        }
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
        $entries = $this->_modelCategoriesMapper->fetchTreeParentCategories($id);
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
                $category = $this->_modelCategoriesMapper->find($categoryId, new Catalog_Model_Categories());
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

                /*Zend_Debug::dump($upload->isUploaded('fileLoadImage'));
                Zend_Debug::dump($upload->isUploaded('fileLoadDraft'));*/
            }

            //Zend_Debug::dump($product);
            $this->_redirector->gotoUrlAndExit($url);
        }
    }

    public function addAction()
    {
        if($this->_request->isPost()){
            $url = $this->_request->getParam('currentUrl');

            if($this->_request->getParam('dataFormProducts')){
                $dataProducts = $this->_request->getParam('dataFormProducts');
                //основные - sku, name, description, note, sorting, path
                $product = new Catalog_Model_Products($dataProducts);
                //modDate, order
                $product
                    ->setMetaTitle($dataProducts['name'])
                    ->setMetaDescription($dataProducts['description'])
                    ->setMetaKeywords($dataProducts['name'])
                    ->setOrder($dataProducts['sorting'])
                    ->setActive(1)
                    ->setDeleted(0)
                    ->setAddDate(date("Y-m-d H:i:s"))
                    ->setModDate(date("Y-m-d H:i:s"));

                $this->_modelMapper->save($product);

                $productId = $this->_modelMapper->getDbTable()->getAdapter()->lastInsertId();

                $categoriesMapperXref = new Catalog_Model_Mapper_CategoriesXref();
                $categoriesMapperXref->save(
                    new Catalog_Model_CategoriesXref(
                        array(
                            'productId' => $productId,
                            'categoryId' => $this->_request->getParam('categoryId')
                        )
                    )
                );
                
                $product = $this->_modelMapper->find($productId, $this->_model);

                $upload = new Zend_File_Transfer();
                $uploadPath = '/upload/products/'.$product->getId().'/';

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

                $url = '/catalog/'.$product->getFullPath();
            }

            $this->clearCache('CatalogProductsList');
            $this->_redirector->gotoUrlAndExit($url);
        }

        //Zend_Debug::dump($this->_request->getParams());
    }

    public function deleteAction()
    {
        $productId = $this->_request->getParam('id');
        $category = $this->_modelMapper->findCategoryRel($productId, new Catalog_Model_Categories());

        $this->setRedirectUrl('/catalog/'.$category->getFullPath());
        $this->clearCache('CatalogProductsList');

        parent::deleteAction();
    }

    public function recoverAction()
    {
        $this->setRedirectUrl('/catalog/'.
            $this->_modelMapper
                ->find(
                     $this->_request->getParam('id'),
                     $this->_model
                )
            ->getFullPath()
        );
        parent::deleteAction();
    }


    public function disabledAction()
    {
        $this->setRedirectUrl($this->_request->getParam('currentUrl'));
        $this->clearCache('CatalogProductsList');
        parent::enableAction();
        //Zend_Debug::dump($this->_request->getParams());
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
        $destinationPath = UPLOAD_DIR . '/products/' . $id;
        if (!file_exists($destinationPath))
            mkdir($destinationPath, 0755, true);


        $upload->setDestination($destinationPath)
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,gif,svg');
        $upload->receive($uploadName);

        $uploadFile = $upload->getFileInfo($uploadName);

        return $uploadFile;
    }

    /**
     * @param $item Catalog_Model_Products
     * @param $uploadPath
     * @param string $uploadName
     * @param string $collTableName
     * @return mixed
     * @throws Exception
     * @throws Zend_File_Transfer_Exception
     * @internal param string $upload_path
     */
    protected function _uploadImage($item, $uploadPath, $uploadName = 'fileLoad', $collTableName = 'image')
    {
        $upload = new Zend_File_Transfer_Adapter_Http();

        if($upload->isUploaded()){
            $destinationPath = APPLICATION_ROOT.$uploadPath;

            if(!file_exists($destinationPath))
                mkdir($destinationPath, 0755, true);

            $imageFile = $upload->getFileInfo($uploadName);
            $imagePath = $destinationPath.'/'.$imageFile[$uploadName]['name'];
            $imagePath = iconv('utf-8', 'cp1251', $imagePath);

            $upload->addValidator('Size', false, 1024000)
                ->addValidator('Extension', false, 'jpg,png,gif,svg');

            try {
                $upload->addFilter('Rename', array('target' => $imagePath,
                    'overwrite' => true));
                $upload->receive();
                $item->setOptions(array(
                    $collTableName => $imageFile[$uploadName]['name']
                ));
            }
            catch (Zend_File_Transfer_Exception $e)
            {
                throw new Exception('Bad image data: '.$e->getMessage());
            }
        }

        return $item;
    }
}































