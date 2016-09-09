<?php

include_once 'BaseController.php';

class Api_CategoriesController extends Api_BaseController
{

    /**
     * @var Catalog_Model_Mapper_Categories
     */
    protected $_modelMapper = null;

    /**
     * @var Catalog_Model_Categories
     */
    protected $_model = null;

    public function init()
    {
        $this->_modelMapper = new Catalog_Model_Mapper_Categories();
        $this->_model = new Catalog_Model_Categories();
    }

    public function getAction()
    {
        $id = $this->_request->getParam('id');

        $jsonData = array(
            'role' => Zend_Auth::getInstance()->getIdentity()->role,
            $this->_request->getControllerKey() => $this->_request->getControllerName(),
            'name' => 'Каталог',
            'id' => '0'
        );

        if($id){
            $entry = $this->_modelMapper->find($id, $this->_model);
            if(!is_null($entry)){
                $jsonData = array_merge($jsonData, $entry->getOptions());
                $jsonData = array_merge($jsonData, $this->breadcrumbs($id));
            }
        }


        return $this->_helper->json->sendJson($jsonData);
    }

    public function listAction()
    {
        $id = $this->_request->getParam('id');

        $jsonData = array();

        if(isset($id)){
            $parent_id = 0;

            if($id != 0){
                $category = $this->_modelMapper->find($id, new Catalog_Model_Categories());
                $parent_id = $category->getParentId();

                if($this->_request->getParam('children'))
                    $parent_id = $category->getId();
            }

            $cache = Zend_Registry::get('cache');
            $cacheName = 'ListCategoriesObj_'.$parent_id;

            $select = $this->_modelMapper->getDbTable()->select();
            $select->where('parent_id = ?', $parent_id)
                ->order('sorting ASC');

            if(!$entries = $cache->load($cacheName)){
                $entries = $this->_modelMapper->fetchAll($select);
                $cache->save($entries, $cacheName, array('api','Categories', 'listCategoriesObj'));
            }

            if(!empty($entries)){
                /** @var Catalog_Model_Categories $entry */
                foreach ($entries as $entry) {
                    $categoryInfo = array(
                        'id' => $entry->getId(),
                        'parentId' => $entry->getParentId(),
                        'name' => $entry->getName(),
                        'active' => $entry->getActive(),
                        'deleted' => $entry->getDeleted(),
                        'countSubCategories' => $this->_countSubCategories($entry->getId())
                    );
                    $jsonData[] = $categoryInfo;
                }
            }
        }
        return $this->_helper->json->sendJson($jsonData);
    }

    public function treeListAction()
    {
        $id = ($this->_request->getParam('id'))?$this->_request->getParam('id'):0;

        $cache = Zend_Registry::get('cache');
        $cacheName = 'treeCategoriesObj_'.$id;

        $select = $this->_modelMapper->getDbTable()->select()->order('sorting ASC');

        if(!$treeCategories = $cache->load($cacheName)){
            ini_set('max_execution_time', 900);
            $treeCategories = $this->_modelMapper->fetchTreeSubCategories($id, $select, false);
            $cache->save($treeCategories, $cacheName, array('api','Catalog', 'treeCategoriesObj'));
        }

        return $this->_helper->json->sendJson($this->getListTreeCategories($treeCategories));
    }

    /**
     * @param $categories Catalog_Model_Categories[]
     * @return array
     */
    public function getListTreeCategories($categories)
    {
        $result = array();
        foreach ($categories as $category) {
            $result[] = array(
                'id' => $category->getId(),
                'parentId' => $category->getParentId(),
                'name' => $category->getName(),
                'active' => $category->getActive(),
                'deleted' => $category->getDeleted(),
                'subCategories' => (is_array($category->getSubCategories()))
                    ?$this->getListTreeCategories($category->getSubCategories())
                    :null
            );
        }
        return $result;
    }

    protected function _countSubCategories($id)
    {
        $select = $this->_modelMapper->getDbTable()->select();
        $select->where('parent_id = ?', $id)
            ->order('sorting ASC');

        $entries = $this->_modelMapper->fetchAll($select);

        return count($entries);
    }

    public function breadcrumbs($id)
    {
        $entries = $this->_modelMapper->fetchTreeParentCategories($id);
        $breadcrumbs = array();
        foreach ($entries as $entry) {
            $breadcrumbs[] = $entry->name;
        }

        if(!empty($breadcrumbs))
            array_shift($breadcrumbs);

        $treeCategories = array(
            'breadcrumbs' =>  (!empty($breadcrumbs))
                ?implode(" > ", array_reverse($breadcrumbs))
                :'Каталог'
        );

        return $treeCategories;
    }
    
}



