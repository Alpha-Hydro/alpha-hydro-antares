<?php
/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 24.06.2015
 * Time: 11:49
 */

class Utils_Bootstrap extends Zend_Application_Module_Bootstrap
{
    protected function _initBootstrap()
    {
        /*$_conf = new Zend_Config_Ini(APPLICATION_PATH . "/modules/" . $this->getModuleName() . "/configs/module.ini", APPLICATION_ENV);
        $this->_options = array_merge($this->_options, $_conf->toArray());*/
    }

    protected function _initPlugins()
    {
        $this->bootstrap('frontController');

        $pluginsLoader = new Zend_Loader_PluginLoader();
        $pluginsLoader->addPrefixPath('Plugin', $this->getResourceLoader()->getBasePath().'/plugins');
        $pluginsLoader->load("LayoutLoader");
        $pluginsLoader->load("AclUtils");

        if($pluginsLoader->isLoaded('LayoutLoader'))
            Zend_Controller_Front::getInstance()->registerPlugin(new Plugin_LayoutLoader());
    }

    protected function _initAlc()
    {
        // Создаём объект Zend_Acl
        $acl = new Zend_Acl();

        //$acl->removeAll();

        // указываем, что у нас есть ресурсы
        //$acl->addResource(new Zend_Acl_Resource('error'));
        $acl->addResource(new Zend_Acl_Resource('auth'));
        $acl->addResource(new Zend_Acl_Resource('index'));
        $acl->addResource(new Zend_Acl_Resource('models-generator'));
        $acl->addResource(new Zend_Acl_Resource('slugify'));
        $acl->addResource(new Zend_Acl_Resource('sefurl'));
        $acl->addResource(new Zend_Acl_Resource('search-index'));
        $acl->addResource(new Zend_Acl_Resource('test'));
        $acl->addResource(new Zend_Acl_Resource('export-catalog-generator'));
        $acl->addResource(new Zend_Acl_Resource('tree-catalog'));

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

        // регистрируем плагин с названием AclUtils, в который передаём
        // на ACL и экземпляр Zend_Auth
        $fc->registerPlugin(new Plugin_AclUtils($acl, Zend_Auth::getInstance()));
    }

}