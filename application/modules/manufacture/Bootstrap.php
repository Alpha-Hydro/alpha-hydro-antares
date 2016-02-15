<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 04.08.2015
 * Time: 17:32
 */
class Manufacture_Bootstrap extends Zend_Application_Module_Bootstrap
{
    public function _initBootstrap()
    {

    }

    public function _initRoute(){

        $front = Zend_Controller_Front::getInstance();
        $router = $front->getRouter();

        $route_manufacture = new Zend_Controller_Router_Route_Regex(
            'manufacture/([\w\-\/]+)',
            array(
                'module' => 'manufacture',
                'controller' => 'index',
                'action' => 'categories',
                1 => null,
            ),
            array(
                1 => 'fullPath',
            ),
            'manufacture/%s/'
        );
        $router->addRoute('manufacture', $route_manufacture);
    }
}