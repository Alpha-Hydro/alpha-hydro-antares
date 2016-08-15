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
        $id = $this->_idGroup;

        $cache = Zend_Registry::get('cache');
        $cacheName = 'treeCategoriesArray_'.$id;

        $select = $this->_modelCategoriesMapper->getDbTable()->select()->order('sorting ASC');

        if(!$treeCategories = $cache->load($cacheName)){
            ini_set('max_execution_time', 900);
            $treeCategories = $this->_modelCategoriesMapper->fetchTreeSubCategoriesInArray($id, $select);
            $cache->save($treeCategories, $cacheName, array('api','Catalog', 'treeCategoriesArray'));
        }

        if($id != 0){
            $result = $this->getTopElementsGroup($id, $treeCategories);
        }
        else{
            $result = $this->getElementsGroup($treeCategories);
        }

        return $this->_helper->json->sendJson($result);
    }

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
                    'id' => $product->getId().'t',
                    //'group' => $id_group,
                    //'artikul' => '',
                    'nm' => $product->getName().' ('.$product->getSku().')',
                    'el' => $this->getElementsModifications($product),
                );

                //$result = array_merge($result, $this->getElementsModifications($product));

                //$result[$product->getId()] = $this->getElementsModifications($product);
            }
        }

        return $result;
    }

    /**
     * @param Catalog_Model_Products $product
     * @return array
     */
    public function getElementsModifications(Catalog_Model_Products $product){
        $cache = Zend_Registry::get('cache');
        $cacheName = 'productModifications_'.$product->getId();

        $result = array();
        //$group = $this->_modelProductsMapper->findCategoryRel($product->getId(), $this->_modelCategories);

        if(!$modifications = $cache->load($cacheName)){
            ini_set('max_execution_time', 900);
            $modifications = $this->_modelProductsMapper->findSubproductsRel($product->getId());
            $cache->save($modifications, $cacheName, array('api','Catalog', 'productModifications'));
        }


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
}