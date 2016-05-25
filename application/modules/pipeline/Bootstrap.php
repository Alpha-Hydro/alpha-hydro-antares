<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 04.08.2015
 * Time: 17:32
 */
class Pipeline_Bootstrap extends Zend_Application_Module_Bootstrap
{
    public function _initBootstrap()
    {

    }

    public function _initRoute(){

        $front = Zend_Controller_Front::getInstance();
        $router = $front->getRouter();

        $route_pipeline = new Zend_Controller_Router_Route_Regex(
            'pipeline/([\w\-\/]+)',
            array(
                'module' => 'pipeline',
                'controller' => 'categories',
                'action' => 'index',
                1 => null,
            ),
            array(
                1 => 'fullPath',
            ),
            'pipeline/%s/'
        );
        $router->addRoute('pipeline', $route_pipeline);

        $module_articles = new Zend_Controller_Router_Route(
            'pipeline/articles/:path',
            array(
                'module' => 'pipeline',
                'controller' => 'index',
                'action' => 'articles',
                'path' => null
            )
            ,
            array(
                'path' => '[\w\-]+'
            )
        );
        $router->addRoute('pipeline_articles', $module_articles);
    }
}