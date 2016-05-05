<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 27.04.2016
 * Time: 17:03
 */
class Api_Bootstrap extends Zend_Application_Module_Bootstrap
{
    public function _initRoute(){

        $front = Zend_Controller_Front::getInstance();
        $router = $front->getRouter();

        $route = new Zend_Controller_Router_Route(
            'api/:controller/:action/:id',
            array(
                'module' => 'api',
                'id' => null,
            ),
            array(
                'controller' => '[\w\-]+',
                'action' => '[\w\-]+',
                'id' => '\d+',
            )
        );
        $router->addRoute('api', $route);

    }
}