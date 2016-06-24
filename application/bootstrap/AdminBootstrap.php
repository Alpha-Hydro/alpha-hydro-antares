<?php

class AdminBootstrap extends Zend_Application_Bootstrap_Bootstrap
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
        $config = $this->getOptions();
        Zend_Debug::dump($config);

        $this->bootstrap('view');
        $view = $this->getResource('view');
        $view->setEncoding('UTF-8');
        $view->headMeta()->appendHttpEquiv('Content-Type', 'text/html;charset=utf-8');
        $view->doctype('HTML5');
        $view->addBasePath(APPLICATION_PATH."/modules/admin/views/");
        $view->addScriptPath(APPLICATION_PATH."/layouts/scripts/");
        $view->auth = Zend_Auth::getInstance()->hasIdentity();
    }

    protected function _initFrontControllerOutput() {
        $this->bootstrap('FrontController');
        $frontController = $this->getResource('FrontController');

        $response = new Zend_Controller_Response_Http;
        $response->setHeader('Content-Type', 'text/html; charset=UTF-8', true);
        $frontController->setResponse($response);

        $frontController->setParam('useDefaultControllerAlways', false);

        return $frontController;
    }

    protected function _initPlugins() {
        $this->bootstrap('frontController');

        $pluginsLoader = new Zend_Loader_PluginLoader();
        $pluginsLoader->addPrefixPath("Plugin", APPLICATION_PATH.'/plugins');
        $pluginsLoader->load("Acl");
    }

    public function _initCache()
    {
        $frontendOptions = array(
            'lifetime' => 3600 * 24 * 2, // время жизни кэша - 2 дня
            'automatic_serialization' => true
        );

        $backendOptions = array(
            'cache_dir' => '../cache/' // директория, в которой размещаются файлы кэша
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

    public function _initRoute()
    {
    }

}
