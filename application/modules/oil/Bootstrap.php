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

        $routeItem = new Zend_Controller_Router_Route(
            'oil/:oil_path_item',
            array(
                'module' => 'oil',
                'controller' => 'index',
                'action'     => 'view'
            ),
            array(
                'oil_path_item' => '\w+',
            )
        );
        $router->addRoute('oilPath', $routeItem);
    }
}