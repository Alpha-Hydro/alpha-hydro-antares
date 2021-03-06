<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 21.09.2015
 * Time: 12:14
 */
class Admin_Bootstrap extends Zend_Application_Module_Bootstrap
{
    protected function _init(){
        Zend_Controller_Front::getInstance()->setDefaultModule('admin');
    }

    protected function _initPlugins()
    {
        $this->bootstrap('frontController');

        $pluginsLoader = new Zend_Loader_PluginLoader();
        $pluginsLoader->addPrefixPath('Plugin', $this->getResourceLoader()->getBasePath().'/plugins');
        $pluginsLoader->load("AclAdmin");
        //$pluginsLoader->load("SessionAdmin");
        //$pluginsLoader->load("Acl");

        $pluginsLoader->addPrefixPath('Plugin', APPLICATION_PATH.'/plugins');
        $pluginsLoader->load("LayoutLoader");

        if($pluginsLoader->isLoaded('LayoutLoader'))
            Zend_Controller_Front::getInstance()->registerPlugin(new Plugin_LayoutLoader());
    }

    protected function _initAlc()
    {
        $auth = Zend_Auth::getInstance();
        // Определяем роль пользователя.
        // Если не авторизирован - значит "гость"
        $role = ($auth->hasIdentity() && !empty($auth->getIdentity()->role))
            ? $auth->getIdentity()->role
            : 'guest';

        // Создаём объект Zend_Acl
        $acl = new Zend_Acl();

        // указываем, что у нас есть ресурсы
        $acl->addResource(new Zend_Acl_Resource('error'));
        $acl->addResource(new Zend_Acl_Resource('auth'));
        $acl->addResource(new Zend_Acl_Resource('index'));

        $acl->addResource(new Zend_Acl_Resource('pages'));

        $acl->addResource(new Zend_Acl_Resource('catalog'));
        $acl->addResource(new Zend_Acl_Resource('categories'));
        $acl->addResource(new Zend_Acl_Resource('products'));

        $acl->addResource(new Zend_Acl_Resource('manufacture'));
        $acl->addResource(new Zend_Acl_Resource('manufacture-categories'));

        $acl->addResource(new Zend_Acl_Resource('pipeline'));
        $acl->addResource(new Zend_Acl_Resource('pipeline-categories'));
        $acl->addResource(new Zend_Acl_Resource('pipeline-property'));
        $acl->addResource(new Zend_Acl_Resource('pipeline-property-value'));
        $acl->addResource(new Zend_Acl_Resource('oil'));
        $acl->addResource(new Zend_Acl_Resource('oil-categories'));
        $acl->addResource(new Zend_Acl_Resource('forum'));
        $acl->addResource(new Zend_Acl_Resource('media'));
        $acl->addResource(new Zend_Acl_Resource('media-categories'));
        $acl->addResource(new Zend_Acl_Resource('home'));
        $acl->addResource(new Zend_Acl_Resource('about'));
        $acl->addResource(new Zend_Acl_Resource('contacts'));
        $acl->addResource(new Zend_Acl_Resource('search'));

        $acl->addResource(new Zend_Acl_Resource('trash'));

        $acl->addResource(new Zend_Acl_Resource('utils'));
        $acl->addResource(new Zend_Acl_Resource('search-index'));
        $acl->addResource(new Zend_Acl_Resource('cache-manager'));
        $acl->addResource(new Zend_Acl_Resource('update-image-catalog'));
        $acl->addResource(new Zend_Acl_Resource('products-draft'));
        $acl->addResource(new Zend_Acl_Resource('models-generator'));
        $acl->addResource(new Zend_Acl_Resource('sefurl'));
        $acl->addResource(new Zend_Acl_Resource('csv-catalog-generator'));
        $acl->addResource(new Zend_Acl_Resource('xml-catalog-generator'));

        $acl->addResource(new Zend_Acl_Resource('api'));
        $acl->addResource(new Zend_Acl_Resource('get'));

        // далее переходим к созданию ролей, которых у нас 2:
        // гость (неавторизированный пользователь)
        $acl->addRole('guest');

        // администратор, который наследует доступ от гостя
        $acl->addRole('manager', 'guest');

        // администратор, который наследует доступ от гостя
        $acl->addRole('admin', 'guest');

        $acl->deny();
        $acl->allow('guest', array('auth', 'error'));
        $acl->allow('manager', array(
            'index',
            'home',
            'contacts',
            'about',
            'pages',
            'categories',
            'products',
            'manufacture',
            'manufacture-categories',
            'pipeline',
            'pipeline-categories',
            'pipeline-property',
            'oil',
            'oil-categories',
            'forum',
            'media',
            'media-categories',
            'search'
        ), array(
            'index',
            'list',
            'edit',
            'json',
            'get',
            'property',
            'modifications',
            'modification-edit',
            'modification-property-edit',
            'category',
            'slugify',
            'slugify-product-sku',
            'property-edit',
            'view',
            'passport',
            'reply',
            'articles',
            'categories'
        ));

        $acl->allow('admin');


        // получаем экземпляр главного контроллера
        $fc = Zend_Controller_Front::getInstance();

        // регистрируем плагин с названием Acl, в который передаём
        // на ACL и экземпляр Zend_Auth
        $fc->registerPlugin(new Plugin_AclAdmin($acl, Zend_Auth::getInstance()));

        // Цепляем ACL к Zend_Navigation
        Zend_View_Helper_Navigation_HelperAbstract::setDefaultAcl($acl);
        Zend_View_Helper_Navigation_HelperAbstract::setDefaultRole($role);
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
                'controller' => '[\w\-]+',
                'id' => '\d+',
            )
        );
        $router->addRoute('adminEdit', $route);

        $route = new Zend_Controller_Router_Route(
            'admin/categories/:parent_id',
            array(
                'module' => 'admin',
                'controller' => 'categories',
                'action' => 'index',
                'parent_id' => null,
            ),
            array(
                'parent_id' => '\d+',
            )
        );
        $router->addRoute('adminCategoriesEdit', $route);

        $route = new Zend_Controller_Router_Route_Static(
            'admin/',
            array(
                'module' => 'admin',
                'controller' => 'index',
                'action' => 'index',
                'advanced' => 'dashboard',
            )
        );
        $router->addRoute('adminAdvanced', $route);

    }

    public function _initAutoloader()
    {
        $loader = new Zend_Application_Module_Autoloader(array(
            'namespace' => 'Admin',
            'basePath'  => APPLICATION_PATH . '/modules/admin',
        ));

        $loader->addResourceType('Admin',APPLICATION_PATH . '/modules/admin/controllers/', 'Admin');

        return $loader;
    }

    /*protected function _initForceSSL() {
        if($_SERVER['SERVER_PORT'] != '443') {
            header('Location: https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
            exit();
        }
    }*/

}