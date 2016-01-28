<?php

class Utils_XmlCatalogGeneratorController extends Zend_Controller_Action
{

    /**
     * @var Catalog_Model_Mapper_Categories
     */
    protected $_categoriesModelMapper;

    /**
     * @var Catalog_Model_Mapper_Products
     */
    protected $_productsModelMapper;

     /**
     * @var Catalog_Model_Mapper_Subproducts
     */
    protected $_subproductsModelMapper;

    /**
     * @var Catalog_Model_Mapper_ProductParams
     */
    protected $_productsParamsMapper;

    /**
     * @var Catalog_Model_Mapper_SubproductParams
     */
    protected $_subproductsParamsMapper;

    /**
     * @var Catalog_Model_Mapper_SubproductParamsValues
     */
    protected $_subproductParamsValuesMapper;


    public function init()
    {
        $this->_categoriesModelMapper = new Catalog_Model_Mapper_Categories();
        $this->_productsModelMapper = new Catalog_Model_Mapper_Products();
        $this->_productsParamsMapper = new Catalog_Model_Mapper_ProductParams();
        $this->_subproductsModelMapper = new Catalog_Model_Mapper_Subproducts();
        $this->_subproductsParamsMapper = new Catalog_Model_Mapper_SubproductParams();
        $this->_subproductParamsValuesMapper = new Catalog_Model_Mapper_SubproductParamsValues();
    }

    public function indexAction()
    {
        $this->forward('xml');

    }

    public function xmlAction()
    {

        $treeCategories = $this->_categoriesModelMapper->fetchTreeSubCategories();

        // Disable Layout
        $this->view->layout()->disableLayout();
        $this->_helper->viewRenderer->setNoRender(true);

        // Output XML than HTML
        $this->getResponse()->setHeader('Content-Type', 'text/xml; charset=utf-8');

//        $data = $treeCategories[1]->getSubCategories();
//        $xml = $this->genArray2Xml($data, $level = 2);

//        set_time_limit(1800);
//        $xml = $this->genArray2Xml($treeCategories, $level = 1);

//        echo $xml->asXml();



        $cache = $cache = Zend_Registry::get('cache');

        foreach ($treeCategories as $category) {
            /* @var $category Catalog_Model_Categories */
            if($category->getId() == 3){
                if(!$xmlSection = $cache->load('sectionXml'.$category->getId())){
                    $xml = $this->genArray2Xml(array($category), $level = 1);
                    $xmlSection = $xml->asXml();
                    $cache->save($xmlSection, 'sectionXml'.$category->getId(), array('sectionXml'));
                }
                $xmlObj = simplexml_load_string($xmlSection);
                $xmlObj->asXML('./tmp/'.$category->getPath().'.xml');

                echo $xmlSection;
                /*$xml = $this->genArray2Xml(array($category), $level = 1);
                echo $xml->asXml();*/
            }
        }
    }

    public function arrayAction()
    {

        $this->view->array = $this->_categoriesModelMapper->fetchAllProductsCategory(92);
    }

    public function treeAction()
    {
        $treeCategories = $this->_categoriesModelMapper->fetchTreeSubCategories();

        $expArray = $this->getSubGroups($treeCategories, $level = 1);
        $this->view->array = $expArray;
    }

    /**
     * @param $groups Catalog_Model_Categories[]
     * @param $level
     * @return array
     */
    public function getSubGroups(&$groups, $level)
    {
        $result = array();
        if(!empty($groups)){
            foreach ($groups as $group) {
                $subGroups = $group->getSubCategories();
                if(is_array($subGroups) && $level < 3){
                    $result[$group->getId()] = array(
                        'name' => $group->getName(),
                        'groups' => $this->getSubGroups($subGroups, $level+1),
                    );
                }
                else{
                    $result[$group->getId()] = array(
                        'name' => $group->getName(),
                        'products' => count($this->getAllProductsCategory($group->getId())),
                    );
                }
            }
        }

        return $result;
    }


    /**
     * @param $data Catalog_Model_Categories[]
     * @param $level
     * @param bool $xml
     * @return mixed
     */
    public function genArray2Xml($data, $level, $xml = false)
    {
        if($xml === false){
            $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><root/>');
        }
        foreach ($data as $item) {
            $subGroup = $item->getSubCategories();
            $group = $xml->addChild('group');
            $group->addAttribute('name', $item->getName());
            $group->addAttribute('id', $item->getId());
            $group->addAttribute('level', $level);
            if(is_array($subGroup) && $level < 3){
                $this->genArray2Xml($subGroup, $level+1, $group);
            }
            else{
                $this->addProducts($group, $item->getId());
            }
        }

        return $xml;
    }

    /**
     * @param SimpleXMLElement $group
     * @param $group_id
     * @return SimpleXMLElement
     */
    public function addProducts(SimpleXMLElement $group, $group_id)
    {
//        $cache = Zend_Registry::get('cache');

//        if(!$groupXml = $cache->load('productsCategoryXml'.$group_id)){
            $products = $this->getAllProductsCategory($group_id);
            if($products){
                $countProduct = count($products);
                $group->addAttribute('products',$countProduct);
                foreach ($products as $product) {
                    $element = $group->addChild('product');
                    $this->addProductXml($element, $product);
                }
            }

//            $groupXml = $group->asXML();
//            $cache->save($groupXml, 'productsCategoryXml'.$group_id, array('productsCategoryXml'));
//        }

//        $group = simplexml_load_string($groupXml);

        return $group;
    }


    /**
     * @param SimpleXMLElement $element
     * @param Catalog_Model_Products $product
     * @return SimpleXMLElement
     */
    public function addProductXml(SimpleXMLElement $element, Catalog_Model_Products $product)
    {
        $element->addAttribute('id', $product->getid());
        $element->addChild('title', $product->getName())
            ->addAttribute('sku', $product->getSku());
        $element->addChild('image', $product->getImage());

        $draftImages = unserialize($product->getAImages());
        $draft = (!empty($draftImages))?$draftImages[0]:null;
        $element->addChild('image', $draft);

        $element->addChild('description', $product->getDescription());
        $element->addChild('note', $product->getNote());

        $properties = $element->addChild('properties');
        $this->addPropertiesProductXml($properties, $product);

        $modifications = $element->addChild('modificationsTable');
        $this->addModificationTableXml($modifications, $product);

        return $element;
    }

    /**
     * @param SimpleXMLElement $element
     * @param Catalog_Model_Products $product
     * @return SimpleXMLElement
     */
    public function addPropertiesProductXml(SimpleXMLElement $element, Catalog_Model_Products $product)
    {
        $selectParams = $this->_productsParamsMapper->getDbTable()->select()->order('order ASC');
        $productParams = $this->_productsModelMapper->findProductParams($product->getId(), $selectParams);

        if($productParams && !empty($productParams)){
            foreach ($productParams as $productParam) {
                /* @var $productParam Catalog_Model_ProductParams */
                $element->addChild('property', $productParam->getValue())
                    ->addAttribute('name', $productParam->getName());
            }
        }

        return $element;
    }

    /**
     * @param SimpleXMLElement $element
     * @param Catalog_Model_Products $product
     */
    public function addModificationTableXml(SimpleXMLElement $element, Catalog_Model_Products $product)
    {
        $selectModification = $this->_subproductsModelMapper->getDbTable()->select()->order('order ASC');

        $cache = Zend_Cache::factory('Core',
            'File',
            array(
                'lifetime' => 3600 * 24 * 2, // время жизни кэша - 2 дня
                'automatic_serialization' => true
            ),
            array(
                'cache_dir' => '../cache/modifications/' // директория, в которой размещаются файлы кэша
            )
        );

        if(!$modifications = $cache->load('modifications'.$product->getId())){
            $modifications = $this->_productsModelMapper->findSubproductsRel($product->getId(), $selectModification);
            $cache->save($modifications, 'modifications'.$product->getId(), array('modificationsTable'));
        }


        if($modifications && !empty($modifications)){
            $selectSubproductParams = $this->_subproductsParamsMapper->getDbTable()->select()->order('order ASC');
            $subproductProperty = $this->_productsModelMapper->findSubproductParams($product->getId(), $selectSubproductParams);
            foreach ($modifications as $modification) {
                /* @var $modification Catalog_Model_Subproducts */
                $row = $element->addChild('tr');
                $row->addAttribute('id', $modification->getId());
                $row->addChild('td', $modification->getSku())
                    ->addAttribute('title', 'Наименование');
                foreach ($subproductProperty as $property) {
                    /* @var $property Catalog_Model_SubproductParams */
                    $row->addChild('td', $this->_getModificationParamValue($modification->getId(), $property->getId()))
                        ->addAttribute('title', $property->getName());
                }
            }
        }

    }

    /**
     * @param $id
     * @return array
     * @throws Zend_Exception
     */
    public function getAllProductsCategory($id)
    {
        $cache = Zend_Registry::get('cache');

        if(!$products = $cache->load('productsCategoryObj'.$id)){

            $products = $this->_categoriesModelMapper->fetchAllProductsCategory($id);

            $cache->save(
                $products,
                'productsCategoryObj'.$id,
                array(
                    'productsCategoryObj'
                )
            );
        }

        return $products;
    }

    /**
     * @param $modification_id
     * @param $property_id
     * @return mixed
     */
    protected function _getModificationParamValue($modification_id, $property_id)
    {
        $result = $this->_subproductParamsValuesMapper->findBySubproductParam($modification_id, $property_id, new Catalog_Model_SubproductParamsValues());

        return $result->getValue();
    }

}

