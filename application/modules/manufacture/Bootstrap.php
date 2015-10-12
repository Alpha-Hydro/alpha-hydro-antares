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

        $routeCategory = new Zend_Controller_Router_Route(
            'manufacture/:manufacture_path_category',
            array(
                'module'                    => 'manufacture',
                'controller'                => 'index',
                'action'                    => 'categories',
            ),
            array(
                'manufacture_path_category' => '\w+',
            )
        );
        $router->addRoute('manufactureCategory', $routeCategory);

        $routeItem = new Zend_Controller_Router_Route(
            ':manufacture_path_item',
            array(
                'module'                    => 'manufacture',
                'controller'                => 'index',
                'action'                    => 'view',
            ),
            array(
                'manufacture_path_item' => '\w+',
            )
        );

        $routeFullPath = new Zend_Controller_Router_Route_Chain();
        $routeFullPath
            ->chain($routeCategory)
            ->chain($routeItem);
        $router->addRoute('manufactureFullPath', $routeFullPath);
    }
}