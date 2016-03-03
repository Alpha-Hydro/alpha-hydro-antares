<?php

class MediaCategoriesController extends Zend_Controller_Action
{

    /**
     * @var Media_Model_Mapper_MediaCategories
     */
    protected $_modelMapper = null;

    public function init()
    {
        $this->_modelMapper = new Media_Model_Mapper_MediaCategories();

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->initContext();
    }

    public function indexAction()
    {
        // action body
    }

    public function addAction()
    {
        // action body
    }

    public function editAction()
    {
        // action body
    }

    public function deleteAction()
    {
        // action body
    }

    public function jsonAction()
    {
        $request = $this->getRequest();
        $id = $request->getParam('id');

        $jsonData = array(
            $request->getControllerKey() => $request->getControllerName(),
            'role' => Zend_Auth::getInstance()->getIdentity()->role
        );

        if($id){
            $entry = $this->_modelMapper->find($id, new Media_Model_MediaCategories());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }

        return $this->_helper->json->sendJson($jsonData);
    }

}







