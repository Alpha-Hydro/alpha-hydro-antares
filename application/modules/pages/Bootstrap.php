<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 04.08.2015
 * Time: 17:32
 */
class Pages_Bootstrap extends Zend_Application_Module_Bootstrap
{
    public function _initRoute(){

        $front = Zend_Controller_Front::getInstance();
        $router = $front->getRouter();

        $pages_about = new Zend_Controller_Router_Route_Static(
            'about',
            array(
                'module' => 'pages',
                'controller' => 'about',
                'action'     => 'index',
            )
        );
        $router->addRoute('pages_about', $pages_about);

        $pages_contacts = new Zend_Controller_Router_Route_Static(
            'contacts',
            array(
                'module' => 'pages',
                'controller' => 'contacts',
                'action'     => 'index',
            )
        );
        $router->addRoute('pages_contacts', $pages_contacts);
    }
}