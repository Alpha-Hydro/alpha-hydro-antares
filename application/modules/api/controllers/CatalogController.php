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
     * @var Zend_Db_Table_Select
     */
    protected $_select = null;

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
        $id = ($this->_request->getParam('id'))?$this->_request->getParam('id'):0;

        $cache = Zend_Registry::get('cache');
        $cacheName = 'treeCategoriesArray_'.$id;

        if(!$treeCategories = $cache->load($cacheName)){
            $treeCategories = $this->_modelCategoriesMapper->fetchTreeSubCategoriesInArray($id);
            $cache->save($treeCategories, $cacheName, array('api','Catalog', 'treeCategoriesArray'));
        }

        $result = array();
        $art = 00001;
        foreach ($treeCategories as $category) {
            $categories = $this->getIteratorArray($category, $art++);
            $result[] = $categories;
        }

        //Zend_Debug::dump($this->getSectionsArray());
        return $this->_helper->json->sendJson($treeCategories);
    }

    public function getIteratorArray(&$array, $art)
    {
        $result = array(
            'id' => $array['id'],
            'group' => $array['parent_id'],
            'artikul' => '', //sprintf("%05d", $art++),
            'name' => $array['name'],
        );

        $subCategories = $array['subCategories'];
        if(is_array($subCategories)){
            foreach ($subCategories as $children) {
                $result['elements'] = $this->getIteratorArray($children, $art++);
            }
        }

        if(0 != count($array['countProducts']) && $subCategories == null)
            $result['elements'] = $array['countProducts'];

        return $result;
    }

}

