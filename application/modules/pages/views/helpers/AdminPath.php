<?php
class Zend_View_Helper_AdminPath extends Zend_View_Helper_Abstract
{
    function adminPath(){
        $request = Zend_Controller_Front::getInstance()->getRequest();
        return $request->getParams();
    }
}