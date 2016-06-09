<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
    /**
     * Initialize auto loader and add resource loaders
     */
    public function _initAutoloader() {
        $resourceLoader = new Zend_Loader_Autoloader_Resource(array(
            'basePath' => APPLICATION_PATH . '/models',
            'namespace' => 'Model'
        ));

        $Dir = dirname(APPLICATION_PATH) . '/library/';
        $D = opendir($Dir);
        while($LibraryDir = readdir($D))
            if($LibraryDir != '.' && $LibraryDir != '..' && $LibraryDir != 'Zend')
                $resourceLoader->addResourceType(strtolower($LibraryDir),
                    dirname(APPLICATION_PATH) . '/library/' . $LibraryDir, $LibraryDir);

        return $resourceLoader;
    }

    /**
     *
     */
    protected function _initDoctype()
    {
        $this->bootstrap('view');
        $view = $this->getResource('view');
        $view->doctype('HTML5');
        $view->addScriptPath(APPLICATION_PATH."/layouts/scripts/");
        $view->addBasePath(APPLICATION_PATH."/modules/admin/views/");
        $view->addBasePath(APPLICATION_PATH."/modules/default/views/");
    }

    protected function _initPlugins() {
        $this->bootstrap('frontController');

        $pluginsLoader = new Zend_Loader_PluginLoader();
        $pluginsLoader->addPrefixPath("Plugin", APPLICATION_PATH.'/plugins');

        $front = Zend_Controller_Front::getInstance();

        $pluginsLoader->load("Redirect");
        if ( $pluginsLoader->isLoaded("Redirect"))
            $front->registerPlugin(new Plugin_Redirect());

    }

    public function _initRoute()
    {
        $router = Zend_Controller_Front::getInstance()->getRouter();

        $sitemap = new Zend_Controller_Router_Route_Regex(
            'sitemap.xml',
            array(
                'module' => 'default',
                'controller' => 'sitemap',
                'action' => 'index',
            ),
            'sitemap.xml'
        );
        $router->addRoute('sitemap', $sitemap);
    }

    public function _initCache()
    {
        $frontendOptions = array(
            'lifetime' => 3600 * 24 * 2, // время жизни кэша - 2 дня
            'automatic_serialization' => true
        );

        $backendOptions = array(
            'cache_dir' => APPLICATION_ROOT.'/cache/' // директория, в которой размещаются файлы кэша
        );

        // получение объекта Zend_Cache_Core
        $cache = Zend_Cache::factory('Core',
            'File',
            $frontendOptions,
            $backendOptions
        );
        Zend_Db_Table_Abstract::setDefaultMetadataCache($cache); //cache database table schemata metadata for faster SQL queries
        Zend_Registry::set('cache',$cache);
    }
}
