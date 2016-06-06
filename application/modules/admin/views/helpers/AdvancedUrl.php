<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Zend_View_Helper_AdvancedUrl extends Zend_View_Helper_Abstract
{

    /**
     * @var Zend_Controller_Request_Abstract;
     */
    /*protected $_request;

    public function preDispatch(Zend_Controller_Request_Abstract $request)
    {
        $this->_request = $request;
    }*/

    public function advancedUrl()
    {
        $frontController = Zend_Controller_Front::getInstance();
        $request = $frontController->getRequest();
        //Zend_Debug::dump($frontController->getParams());
    }
}