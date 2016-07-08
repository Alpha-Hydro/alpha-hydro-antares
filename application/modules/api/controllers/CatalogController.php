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
    

    public function init()
    {
        $this->_modelCategories = new Catalog_Model_Categories();
        $this->_modelCategoriesMapper = new Catalog_Model_Mapper_Categories();
        $this->_modelProducts = new Catalog_Model_Products();
        $this->_modelProductsMapper = new Catalog_Model_Mapper_Products();
    }

    public function indexAction()
    {
        $jsonData = $this->_request->getParams();

        return $this->_helper->json->sendJson($jsonData);
    }

    public function nomenclature1cAction()
    {
        $id = ($this->_request->getParam('id'))?$this->_request->getParam('id'):0;

        $cache = Zend_Registry::get('cache');
        $cacheName = 'treeCategoriesArray_'.$id;

        $select = $this->_modelCategoriesMapper->getDbTable()->select()->order('sorting ASC');

        if(!$treeCategories = $cache->load($cacheName)){
            ini_set('max_execution_time', 900);
            $treeCategories = $this->_modelCategoriesMapper->fetchTreeSubCategoriesInArray($id, $select);
            $cache->save($treeCategories, $cacheName, array('api','Catalog', 'treeCategoriesArray'));
        }

        return $this->_helper->json->sendJson($this->getElementsGroup($treeCategories));
    }

    public function getElementsGroup($subCategories)
    {
        $result = array();
        foreach ($subCategories as $groups) {
            $result[] = array(
                'id' => $groups['id'],
                'group' => $groups['parent_id'],
                'artikul' => '', //sprintf("%05d", $art++),
                'name' => $groups['name'],
                'elements' => (is_array($groups['subCategories']))
                    ?$this->getElementsGroup($groups['subCategories'])
                    :$this->getElementsProducts($groups['id'])
            );
        }
        return $result;
    }

    public function getElementsProducts($id_group)
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

        $result = array();
        if($products){
            /**@var $product Catalog_Model_Products*/
            foreach ($products as $product) {
                $result[] = array(
                    'id' => $product->getId(),
                    'group' => $id_group,
                    'artikul' => $product->getSku(),
                    'name' => $product->getName(),
                );
            }
        }

        return $result;
    }

}







