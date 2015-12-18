<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 18.12.2015
 * Time: 16:10
 */
class Zend_View_Helper_sidebarMenu extends Zend_View_Helper_Abstract
{
    function sidebarMenu(){
        $config = new Zend_Config_Xml(APPLICATION_PATH.'/modules/admin/configs/sidebar.xml', 'sidebar');
        $container = new Zend_Navigation();
        $container->setPages($config->toArray());
        $view = new Zend_View();
        echo $view->navigation($container)->menu()->render();
    }
}