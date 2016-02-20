<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Zend_View_Helper_ParamsPage extends Zend_Controller_Plugin_Abstract
{

    function paramsPage(){
        return Zend_Controller_Front::getInstance()
            ->getRequest()
            ->getParams();
    }
}