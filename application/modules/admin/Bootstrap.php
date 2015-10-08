<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 21.09.2015
 * Time: 12:14
 */
class Admin_Bootstrap extends Zend_Application_Module_Bootstrap
{
    protected function _initPlugins()
    {
        $this->bootstrap('frontController');

        $pluginsLoader = new Zend_Loader_PluginLoader();
        $pluginsLoader->addPrefixPath('Plugin', $this->getResourceLoader()->getBasePath().'/plugins');
        $pluginsLoader->load("Acl");
        $pluginsLoader->addPrefixPath('Plugin', APPLICATION_PATH.'/plugins');
        $pluginsLoader->load("LayoutLoader");

        if($pluginsLoader->isLoaded('LayoutLoader'))
            Zend_Controller_Front::getInstance()->registerPlugin(new Plugin_LayoutLoader());
    }

    protected function _initAlc()
    {
        // Создаём объект Zend_Acl
        $acl = new Zend_Acl();

        // указываем, что у нас есть ресурсы
        //$acl->addResource(new Zend_Acl_Resource('error'));
        $acl->addResource(new Zend_Acl_Resource('auth'));
        $acl->addResource(new Zend_Acl_Resource('index'));
        $acl->addResource(new Zend_Acl_Resource('pages'));
        $acl->addResource(new Zend_Acl_Resource('oil'));

        // далее переходим к созданию ролей, которых у нас 2:
        // гость (неавторизированный пользователь)
        $acl->addRole('guest');

        // администратор, который наследует доступ от гостя
        $acl->addRole('admin', 'guest');

        $acl->deny();
        //$acl->allow('guest', array('default', 'catalog', 'error'));
        $acl->allow('guest', 'auth');
        $acl->allow('admin');

        // получаем экземпляр главного контроллера
        $fc = Zend_Controller_Front::getInstance();

        // регистрируем плагин с названием Acl, в который передаём
        // на ACL и экземпляр Zend_Auth
        $fc->registerPlugin(new Plugin_Acl($acl, Zend_Auth::getInstance()));
    }

    public function _initRoute(){

        $front = Zend_Controller_Front::getInstance();
        $router = $front->getRouter();

        $route = new Zend_Controller_Router_Route(
            'admin/:controller/:action/:id',
            array(
                'module' => 'admin',
                'action' => 'index',
                'id' => null,
            ),
            array(
                'controller' => '\w+',
                'id' => '\d+',
            )
        );
        $router->addRoute('adminEdit', $route);

    }
}