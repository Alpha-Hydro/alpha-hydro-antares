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

        $route_forum = new Zend_Controller_Router_Route_Regex(
            'forum/([\w\-\/]+)',
            array(
                'module' => 'forum',
                'controller' => 'index',
                'action'     => 'index',
                1 => null,
            ),
            array(
                1 => 'section',
            ),
            'forum/%s/'
        );

        $router->addRoute('forum', $route_forum);

        $refresh_captcha = new Zend_Controller_Router_Route_Static(
            'forum/refresh-captcha',
            array(
                'module' => 'forum',
                'controller' => 'index',
                'action'     => 'refresh-captcha'
            )
        );

        $router->addRoute('refresh_captcha', $refresh_captcha);

        $forum_ask = new Zend_Controller_Router_Route_Static(
            'forum/ask',
            array(
                'module' => 'forum',
                'controller' => 'index',
                'action'     => 'ask'
            )
        );

        $router->addRoute('forum_ask', $forum_ask);

    }
}