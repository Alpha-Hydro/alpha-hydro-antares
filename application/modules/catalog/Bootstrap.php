<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 04.08.2015
 * Time: 17:32
 */
class Catalog_Bootstrap extends Zend_Application_Module_Bootstrap
{
    public function _initBootstrap()
    {

    }

    public function _initRoute(){

        $front = Zend_Controller_Front::getInstance();
        $router = $front->getRouter();


        /*$default = new Zend_Controller_Router_Route(
            ':module/:controller/:action/*',
            array(
                'module' => 'catalog',
                //'controller' => 'categories',
                'action' => 'index'
            )
        );
        $router->addRoute('default_catalog', $default);*/


        $route_catalog = new Zend_Controller_Router_Route_Regex(
            'catalog/([\w\-\/]+)',
            array(
                'module' => 'catalog',
                'controller' => 'categories',
                'action' => 'index',
                1 => null,
            ),
            array(
                1 => 'fullPath',
            ),
            'catalog/%s/'
        );
        $router->addRoute('catalog', $route_catalog);

        $route_product_print_pdf = new Zend_Controller_Router_Route_Regex(
            'catalog/([\w\-\/]+)\.pdf',
            array(
                'module' => 'catalog',
                'controller' => 'products',
                'action' => 'print',
                1 => null,
            ),
            array(
                1 => 'fullPath',
            ),
            'catalog/%s.pdf'
        );
        $router->addRoute('printPdf', $route_product_print_pdf);



    }
}