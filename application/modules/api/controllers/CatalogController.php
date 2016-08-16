<?php

class Api_CatalogController extends Zend_Controller_Action
{

    /**
     * @var Catalog_Model_Mapper_Categories
     */
    protected $_modelCategoriesMapper = null;

    /**
     * @var Catalog_Model_Categories
     */
    protected $_modelCategories = null;

    /**
     * @var Catalog_Model_Mapper_Products
     */
    protected $_modelProductsMapper = null;

    /**
     * @var Catalog_Model_Products
     */
    protected $_modelProducts = null;

    /**
     * @var null
     */
    protected $_idGroup = null;

    public function init()
    {
        $this->_modelCategories = new Catalog_Model_Categories();
        $this->_modelCategoriesMapper = new Catalog_Model_Mapper_Categories();
        $this->_modelProducts = new Catalog_Model_Products();
        $this->_modelProductsMapper = new Catalog_Model_Mapper_Products();

        $this->_idGroup = ($this->_request->getParam('id'))?$this->_request->getParam('id'):0;
    }

    public function indexAction()
    {
        $jsonData = $this->_request->getParams();

        return $this->_helper->json->sendJson($jsonData);
    }

    public function nomenclature1cAction()
    {
        $treeCategories = $this->_getTreeCategoriesArray();

        if($this->_idGroup != 0){
            $result = $this->getTopElementsGroup($this->_idGroup, $treeCategories);
        }
        else{
            $result = $this->getElementsGroup($treeCategories);
        }

        return $this->_helper->json->sendJson($result);
    }

    public function xml1cAction()
    {
        $treeCategories = $this->_getTreeCategories();

        // XML-related routine
        $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><root/>');

        if($this->_idGroup != 0){
            $this->genTopXmlGroup($xml, $treeCategories, $this->_idGroup);
        }
        else{
            $this->getXmlGroup($xml, $treeCategories);
        }

        $output = $xml->saveXML();

        // Both layout and view renderer should be disabled
        Zend_Controller_Action_HelperBroker::getStaticHelper('viewRenderer')->setNoRender(true);
        Zend_Layout::getMvcInstance()->disableLayout();

        // Set up headers and body
        $this->_response->setHeader('Content-Type', 'text/xml; charset=utf-8')
            ->setBody($output);
    }

    /**
     * @param SimpleXMLElement $xml
     * @param $data Catalog_Model_Categories[]
     * @param $id
     * @return SimpleXMLElement
     */
    public function genTopXmlGroup(SimpleXMLElement $xml, $data, $id)
    {
        $element = $xml->addChild('item');
        $element->addAttribute('id', $id);
        $element->addAttribute('name', $this->_modelCategoriesMapper->find($id, new Catalog_Model_Categories())->getName());

        $this->getXmlGroup($element, $data);

        return $xml;
    }

    /**
     * @param SimpleXMLElement $xml
     * @param $data Catalog_Model_Categories[]
     * @return SimpleXMLElement
     */
    public function getXmlGroup(SimpleXMLElement $xml, $data)
    {
        foreach ($data as $item) {
            $group = $xml->addChild('item');
            $group->addAttribute('id', $item->getId());
            $group->addAttribute('name', $item->getName());

            if(is_array($item->getSubCategories())){
                $this->getXmlGroup($group, $item->getSubCategories());
            }
            else{
                $this->getXmlProducts($group, $item->getId());
            }
        }

        return $xml;
    }

    /**
     * @param SimpleXMLElement $group
     * @param $id_group
     * @return SimpleXMLElement
     */
    public function getXmlProducts(SimpleXMLElement $group, $id_group)
    {
        $products = $this->_getCategoryProducts($id_group);
        if($products){
            foreach ($products as $product) {
                $xml = $group->addChild('item');
                $xml->addAttribute('id', $product->getId().'t');
                $xml->addAttribute('name', $product->getName().' ('.$product->getSku().')');
                $this->getXmlModifications($xml, $product->getId());
            }
        }

        return $group;
    }

    /**
     * @param SimpleXMLElement $product
     * @param $id_product
     * @return SimpleXMLElement
     */
    public function getXmlModifications(SimpleXMLElement $product, $id_product)
    {
        $modifications = $this->_getProductModifications($id_product);

        if($modifications){
            foreach ($modifications as $modification) {
                $xml = $product->addChild('item');
                $xml->addAttribute('id', str_replace(' ','',$modification->getSku()));
                $xml->addAttribute('name', $modification->getSku());
            }
        }

        return $product;
    }

    /**
     * @param $id
     * @param $treeCategories
     * @return array
     */
    public function getTopElementsGroup($id, &$treeCategories)
    {
        $group = $this->_modelCategoriesMapper->find($id, new Catalog_Model_Categories());
        return $result = array(
            'id' => $id,
            //'group' => $group->getParentId(),
            //'artikul' => '',
            'nm' => $group->getName(),
            'el' => $this->getElementsGroup($treeCategories)
        );
    }

    /**
     * @param $subCategories
     * @return array
     */
    public function getElementsGroup($subCategories)
    {
        $result = array();
        foreach ($subCategories as $groups) {
            $result[] = array(
                'id' => $groups['id'],
                //'group' => $groups['parent_id'],
                //'artikul' => '', //sprintf("%05d", $art++),
                'nm' => $groups['name'],
                'el' => (is_array($groups['subCategories']))
                    ?$this->getElementsGroup($groups['subCategories'])
                    :$this->getElementsProducts($groups['id'])
            );
        }
        return $result;
    }

    /**
     * @param $id_group
     * @return array
     */
    public function getElementsProducts($id_group)
    {
        $products = $this->_getCategoryProducts($id_group);

        $result = array();
        if($products){
            foreach ($products as $product) {
                $result[] = array(
                    'id' => $product->getId().'t',
                    //'group' => $id_group,
                    //'artikul' => '',
                    'nm' => $product->getName().' ('.$product->getSku().')',
                    'el' => $this->getElementsModifications($product),
                );
            }
        }

        return $result;
    }

    /**
     * @param Catalog_Model_Products $product
     * @return array
     */
    public function getElementsModifications(Catalog_Model_Products $product){
        $result = array();

        $modifications = $this->_getProductModifications($product->getId());

        if($modifications){
            foreach ($modifications as $modification) {
                $result[] = array(
                    //'id' => $modification->getId(),
                    //'group' => $product->getId(),
                    //'artikul' => str_replace(' ','',$modification->getSku()),
                    'id' => str_replace(' ','',$modification->getSku()),
                    'nm' => $modification->getSku(),
                );
            }
        }

        return $result;
    }

    /**
     * @return array|false|mixed|null
     */
    private function _getTreeCategoriesArray()
    {
        $id = $this->_idGroup;

        $cache = Zend_Registry::get('cache');
        $cacheName = 'treeCategoriesArray_'.$id;

        $select = $this->_modelCategoriesMapper->getDbTable()->select()->order('sorting ASC');

        if(!$treeCategories = $cache->load($cacheName)){
            ini_set('max_execution_time', 900);
            $treeCategories = $this->_modelCategoriesMapper->fetchTreeSubCategoriesInArray($id, $select);
            $cache->save($treeCategories, $cacheName, array('api','Catalog', 'treeCategoriesArray'));
        }

        return $treeCategories;
    }

    /**
     * @return Catalog_Model_Categories[]|null
     */
    private function _getTreeCategories()
    {
        $id = $this->_idGroup;

        $cache = Zend_Registry::get('cache');
        $cacheName = 'treeCategories_'.$id;

        $select = $this->_modelCategoriesMapper->getDbTable()->select()->order('sorting ASC');

        if(!$treeCategories = $cache->load($cacheName)){
            ini_set('max_execution_time', 900);
            $treeCategories = $this->_modelCategoriesMapper->fetchTreeSubCategories($id, $select);
            $cache->save($treeCategories, $cacheName, array('api','Catalog', 'treeCategories'));
        }

        return $treeCategories;
    }

    /**
     * @param $id_group
     * @return Catalog_Model_Products[]|null
     */
    private function _getCategoryProducts($id_group)
    {
        $cache = Zend_Registry::get('cache');
        $cacheName = 'categoryProducts_'.$id_group;

        $select = $this->_modelProductsMapper->getDbTable()->select()
            ->order('sorting ASC');

        if(!$products = $cache->load($cacheName)){
            ini_set('max_execution_time', 900);
            $products = $this->_modelCategoriesMapper->fetchProductsRel($id_group, $select);
            $cache->save($products, $cacheName, array('api','Catalog', 'categoryProducts'));
        }

        return $products;
    }

    /**
     * @param $id_product
     * @return Catalog_Model_Subproducts[]|null
     */
    private function _getProductModifications($id_product)
    {
        $cache = Zend_Registry::get('cache');
        $cacheName = 'productModifications_'.$id_product;

        if(!$modifications = $cache->load($cacheName)){
            ini_set('max_execution_time', 900);
            $modifications = $this->_modelProductsMapper->findSubproductsRel($id_product);
            $cache->save($modifications, $cacheName, array('api','Catalog', 'productModifications'));
        }

        return $modifications;
    }
}