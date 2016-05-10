<?php

class Api_BaseController extends Zend_Controller_Action
{
    protected $_modelMapper = null;

    protected $_model = null;

    /**
     * @var Zend_Db_Table_Select
     */
    protected $_select = null;

    public function init()
    {

    }

    /**
     * @var Zend_Db_Table_Select $select
     */
    public function indexAction()
    {
        $select = $this->_modelMapper->getDbTable()->select();
        $colsTable = $this->_modelMapper->getDbTable()->info('cols');
        $jsonData = array();

        if($this->_request->getParam('filter') != '' && $this->_request->getParam('val') != ''){
            if(in_array($this->_request->getParam('filter'), $colsTable)){
                $select->where(
                    $this->_request->getParam('filter').'= ?',
                    $this->_request->getParam('val')
                );
            }
            else{
                return $this->_helper->json->sendJson(array(
                    'error' => $this->_request->getParam('filter') . ' - column table in not found.'
                ));
            }
        }

        if($this->_request->getParam('sorting') != ''){
            if(in_array($this->_request->getParam('sorting'), $colsTable)){
                $select->order(
                    $this->_request->getParam('sorting'));
            }
            else{
                return $this->_helper->json->sendJson(array(
                    'error' => $this->_request->getParam('sorrting') . ' - column table in not found.'
                ));
            }
        }

        $entries = $this->_modelMapper->fetchAll($select);

        if(!empty($entries)){
            foreach ($entries as $entry) {
                $jsonData[] = $entry->getOptions();
            }
        }
        return $this->_helper->json->sendJson($jsonData);
        //Zend_Debug::dump($entries);
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



