<?php

class Api_BaseController extends Zend_Controller_Action
{

    protected $_modelMapper = null;

    protected $_model = null;

    public function init()
    {
        /*$contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('get', array('json'))
            ->initContext();*/

        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('get', 'json')
            ->initContext();
    }

    public function indexAction()
    {
        Zend_Debug::dump($this->getRequest()->getParams());
    }

    public function getAction()
    {
        $id = $this->_request->getParam('id');

        $jsonData = array(
            'role' => Zend_Auth::getInstance()->getIdentity()->role,
            $this->_request->getControllerKey() => $this->_request->getControllerName(),

        );

        if($id){
            $entry = $this->_modelMapper->find($id, $this->_model);
            if(!is_null($entry)){
                $jsonData = array_merge($jsonData, $entry->getOptions());
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


}



