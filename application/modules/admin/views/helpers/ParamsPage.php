<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Zend_View_Helper_ParamsPage extends Zend_Controller_Plugin_Abstract
{
    public $view;

    public function setView(Zend_View_Interface $view)
    {
        $this->view = $view;
    }

    function paramsPage(){
        $frontController = Zend_Controller_Front::getInstance();
        $request = $frontController->getRequest();
        $moduleName = $request->getModuleName();
        /*$request->clearParams();

        $request->setParams(array(
            'controller' => $moduleName,
            'itemId' => $this->view->itemId
        ));*/
        $params = $request->getControllerKey();

        $params = Zend_Auth::getInstance()->getIdentity()->role;

        return $params;

    }

}