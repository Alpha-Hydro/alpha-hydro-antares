<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 18.12.2015
 * Time: 16:10
 */
class Zend_View_Helper_navbarRightMenu extends Zend_View_Helper_Abstract
{
    function navbarRightMenu(){
        $config = new Zend_Config_Xml(APPLICATION_PATH.'/modules/admin/configs/navbar.xml', 'nav');
        $container = new Zend_Navigation();
        $container->setPages($config->toArray());
        $container->addPage(
            array(
                'label'      => Zend_Auth::getInstance()->getIdentity()->email,
                'title'      => 'Dashboard',
                'uri'     => '/admin/',
            ));
        $view = new Zend_View();
        echo $view->navigation($container)->menu()->setUlClass('nav navbar-nav navbar-right')->render();
    }
}