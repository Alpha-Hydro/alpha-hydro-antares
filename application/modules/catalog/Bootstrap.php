<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 04.08.2015
 * Time: 17:32
 */
class Catalog_Bootstrap extends Zend_Application_Module_Bootstrap
{
    public function _initRoute(){

        $front = Zend_Controller_Front::getInstance();
        $router = $front->getRouter();

        $config = new Zend_Config_Ini(APPLICATION_PATH . "/modules/" . $this->getModuleName() . '/configs/route.ini', 'production');
        $router->addConfig($config,'routes');
    }
}