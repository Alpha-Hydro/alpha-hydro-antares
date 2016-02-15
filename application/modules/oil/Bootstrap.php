<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 04.08.2015
 * Time: 17:32
 */
class Oil_Bootstrap extends Zend_Application_Module_Bootstrap
{
    public function _initBootstrap()
    {

    }

    public function _initRoute(){

        $front = Zend_Controller_Front::getInstance();
        $router = $front->getRouter();

        $route_oil = new Zend_Controller_Router_Route_Regex(
            'oil/([\w\-\/]+)',
            array(
                'module' => 'oil',
                'controller' => 'index',
                'action'     => 'view',
                1 => null,
            ),
            array(
                1 => 'fullPath',
            )
            ,
            'oil/%s/'
        );
        $router->addRoute('oil', $route_oil);
    }
}