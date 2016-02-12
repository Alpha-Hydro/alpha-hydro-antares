<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 18.12.2015
 * Time: 16:10
 */
class Zend_View_Helper_navbarMainMenu extends Zend_View_Helper_Abstract
{
    function navbarMainMenu(){
        $config = new Zend_Config_Xml(APPLICATION_PATH.'/modules/admin/configs/navbar.xml', 'main');
        $container = new Zend_Navigation();
        $container->setPages($config->toArray());
        $view = new Zend_View();
        echo $view->navigation($container)->menu()->setUlClass('nav navbar-nav')->render();
    }
}