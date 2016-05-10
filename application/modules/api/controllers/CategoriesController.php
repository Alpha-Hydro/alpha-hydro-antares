<?php

include_once 'BaseController.php';

class Api_CategoriesController extends Api_BaseController
{

    /**
     * @var Catalog_Model_Mapper_Categories
     */
    protected $_modelMapper;

    /**
     * @var Catalog_Model_Categories
     */
    protected $_model;

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
            'id' => '0',
        );

        if($id){
            $entry = $this->_modelMapper->find($id, $this->_model);
            if(!is_null($entry)){
                $jsonData = array_merge($jsonData, $entry->getOptions());
                $jsonData = array_merge($jsonData, $this->breadcrumbs($id));
            }
            else{
                $jsonData = array_merge($jsonData, array(
                    'paramId' => $this->_request->getParam('id'),
                    $this->_request->getActionKey() => $this->_request->getActionName(),
                    'error' => 'item not found'
                ));
            }
        }


        return $this->_helper->json->sendJson($jsonData);
    }

    public function listAction()
    {
        $id = $this->_request->getParam('id');

        $jsonData = array();

        if(isset($id)){
            $category = $this->_modelMapper->find($id, new Catalog_Model_Categories());
            $parent_id = $category->getParentId();

            if($this->_request->getParam('children'))
                $parent_id = $category->getId();

            $select = $this->_modelMapper->getDbTable()->select();
            $select->where('parent_id = ?', $parent_id)
                ->order('sorting ASC');

            $entries = $this->_modelMapper->fetchAll($select);
            if(!is_null($entries)){
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

    protected function _countSubCategories($id)
    {
        $select = $this->_modelMapper->getDbTable()->select();
        $select->where('parent_id = ?', $id)
            ->order('sorting ASC');

        $entries = $this->_modelMapper->fetchAll($select);

        return count($entries);
    }

    public function breadcrumbs($id){
        $entries = $this->_modelMapper->fetchTreeParentCategories($id);
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

}

