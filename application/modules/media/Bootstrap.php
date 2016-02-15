<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 04.08.2015
 * Time: 17:32
 */
class Media_Bootstrap extends Zend_Application_Module_Bootstrap
{
    public function _initBootstrap()
    {

    }

    public function _initRoute(){

        $front = Zend_Controller_Front::getInstance();
        $router = $front->getRouter();

        $route_media = new Zend_Controller_Router_Route_Regex(
            'media/([\w\-\/]+)',
            array(
                'module' => 'media',
                'controller' => 'index',
                'action' => 'index',
                1 => null,
            ),
            array(
                1 => 'fullPath',
            ),
            'media/%s/'
        );
        $router->addRoute('media', $route_media);

        /*$routeCategory = new Zend_Controller_Router_Route(
            'media/:media_path_category',
            array(
                'module' => 'media',
                'controller' => 'index',
                'action'     => 'index'
            ),
            array(
                'media_path_category' => '\w+',
            )
        );
        $router->addRoute('mediaCategory', $routeCategory);

        $routeItem = new Zend_Controller_Router_Route(
            ':media_path_item',
            array(
                'module' => 'media',
                'controller' => 'index',
                'action'     => 'view'
            ),
            array(
                'media_path_item' => '\w+',
            )
        );

        $routeFullPath = new Zend_Controller_Router_Route_Chain();
        $routeFullPath
            ->chain($routeCategory)
            ->chain($routeItem);
        $router->addRoute('mediaFullPath', $routeFullPath);*/
    }
}