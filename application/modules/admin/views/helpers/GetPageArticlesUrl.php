<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Zend_View_Helper_getPageArticlesUrl extends Zend_View_Helper_Abstract
{
    function getPageArticlesUrl(){
        $frontController = Zend_Controller_Front::getInstance();
        $request = $frontController->getRequest();
        $moduleName = $request->getModuleName();

        $url = '/'.$moduleName.'/articles/';

        return $url;
    }
}