<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 18.12.2015
 * Time: 16:10
 */
class Zend_View_Helper_navMenu extends Zend_View_Helper_Abstract
{
    function navMenu($container){
        $view = new Zend_View();
        return $view->navigation($container)->menu();
    }
}