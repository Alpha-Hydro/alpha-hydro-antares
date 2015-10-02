<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 04.08.2015
 * Time: 17:32
 */
class Forum_Bootstrap extends Zend_Application_Module_Bootstrap
{
    public function _initBootstrap()
    {

    }

    public function _initRoute(){

        $front = Zend_Controller_Front::getInstance();
        $router = $front->getRouter();

        //var_dump($this->getModuleName());

        if($this->getModuleName() == 'Forum'){
            $config = new Zend_Config_Ini(APPLICATION_PATH . "/modules/" . strtolower($this->getModuleName()) . '/configs/route.ini', 'production');
            $router->addConfig($config,'routes');
        }
    }
}