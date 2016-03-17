<?php

class CategoriesController extends Zend_Controller_Action
{
    /**
     * @var Catalog_Model_Mapper_Categories
     */
    protected $_modelMapper = null;

    public function init()
    {
        $this->_modelMapper = new Catalog_Model_Mapper_Categories();

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->addActionContext('list', array('json'))
            ->initContext();
    }

    public function indexAction()
    {
        // action body
    }

    public function jsonAction()
    {
        $request = $this->getRequest();
        $id = $request->getParam('id');

        $jsonData = array(
            $request->getControllerKey() => $request->getControllerName(),
            'role' => Zend_Auth::getInstance()->getIdentity()->role,
            'name' => 'Root'
        );

        if($id){
            $entry = $this->_modelMapper->find($id, new Catalog_Model_Categories());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }


        return $this->_helper->json->sendJson($jsonData);
    }


    public function listAction()
    {
        $request = $this->getRequest();
        $parent_id = $request->getParam('id');

        $jsonData = array();

        if(isset($parent_id)){
            $select = $this->_modelMapper->getDbTable()->select();
            $select->where('parent_id = ?', $parent_id)
                ->order('sorting ASC');

            $entries = $this->_modelMapper->fetchAll($select);
            if(!is_null($entries)){
                /** @var Catalog_Model_Categories $entry */
                foreach ($entries as $entry) {
                    $categoryInfo = array(
                        'id' => $entry->getId(),
                        'name' => $entry->getName(),
                        'active' => $entry->getActive(),
                        'deleted' => $entry->getDeleted(),
                        'countSubCategories' => $this->_countSubCategories($entry->getId())
                    );
                    $jsonData[] = $categoryInfo;
                }
            }
        }

        // Zend_Debug::dump($jsonData);
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
}

