<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
    protected $_moduleName;
    protected $_controllerName;
    protected $_actionName;

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
     * @param mixed $moduleName
     */
    public function setModuleName($moduleName)
    {
        $this->_moduleName = $moduleName;
    }

    /**
     * @return mixed
     */
    public function getModuleName()
    {
        return $this->_moduleName;
    }

    /**
     * @param mixed $controllerName
     */
    public function setControllerName($controllerName)
    {
        $this->_controllerName = $controllerName;
    }

    /**
     * @return mixed
     */
    public function getControllerName()
    {
        return $this->_controllerName;
    }

    /**
     * @param mixed $actionName
     */
    public function setActionName($actionName)
    {
        $this->_actionName = $actionName;
    }

    /**
     * @return mixed
     */
    public function getActionName()
    {
        return $this->_actionName;
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
    }

    protected function _initPlugins() {
        $this->bootstrap('frontController');

        $pluginsLoader = new Zend_Loader_PluginLoader();
        $pluginsLoader->addPrefixPath("Plugin", APPLICATION_PATH.'/plugins');

        $pluginsLoader->load("Redirect");
        $front = Zend_Controller_Front::getInstance();
        if ( $pluginsLoader->isLoaded("Redirect"))
            $front->registerPlugin(new Plugin_Redirect());

    }

    public function _initRoute()
    {
        $router = Zend_Controller_Front::getInstance()->getRouter();
        $aHostName = array(
            'hansa-flex.pro',
            'hansa-flex.su',
            'hansa-flex.org',
            'xn----7sbavhvfm6b0af.xn--p1ai',
        );

        $hostHttp = new Zend_Controller_Request_Http();
        $host = $hostHttp->getServer('HTTP_HOST');

        if(in_array($host, $aHostName)){
            $hostnameRoute = new Zend_Controller_Router_Route_Hostname(
                $host,
                array(
                    'controller' => 'index',
                    'action'     => 'plug',
                    'module'     => 'default'
                )
            );
            $router->addRoute('hostAlfa', $hostnameRoute);
        }

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

    public function preDispatch(Zend_Controller_Request_Abstract $request)
    {
        $this->bootstrap('view');
        $view = $this->getResource('view');
        $view->controller = $request->getModuleName();
    }

}

