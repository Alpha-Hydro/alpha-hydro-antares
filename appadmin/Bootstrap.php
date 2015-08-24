<?php
/**
 * Classic Zend Bootstrap
 *
 * @author Bakin Vlad
 * @version $Id: Bootstrap.php 2012$
 * @package Default
 * @category System
 */

/**
 * Standard Bootstrap class. Add models default directories and change theme files extension
 *
 * @package Default
 * @author Bakin Vlad
 */
class Bootstrap extends Zend_Application_Bootstrap_Bootstrap {

	/**
	 * Initialize auto loader and add resource loaders(for models)
	 */
	public function _initAutoloader() {
		$autoloader = Zend_Loader_Autoloader::getInstance();

		$resourceLoader = new Zend_Loader_Autoloader_Resource( array('basePath' => APPLICATION_PATH . '/models', 'namespace' => 'Model'));
		$resourceLoader -> addResourceType('DbTable', 'DbTable/', 'DbTable');
		$resourceLoader -> addResourceType('DbRow', 'DbRow/', 'DbRow');
		$resourceLoader -> addResourceType('Static', 'Static/', 'Static');

		$Dir = dirname(APPLICATION_PATH) . '/library/';
        $D = opendir($Dir);
        while($LibraryDir = readdir($D))
            if($LibraryDir != '.' && $LibraryDir != '..' && $LibraryDir != 'Zend')
                $resourceLoader->addResourceType(strtolower($LibraryDir), dirname(APPLICATION_PATH) . '/library/' . $LibraryDir, $LibraryDir);
	}

	protected function _initPlugins() {
		$this -> bootstrap('frontController');

        $pluginsLoader = new Zend_Loader_PluginLoader();
		$pluginsLoader->addPrefixPath("Plugin", APPLICATION_PATH.'/plugins');
		
		$pluginsLoader->load("Layout");
		if ( $pluginsLoader->isLoaded("Layout"))
			$front = Zend_Controller_Front::getInstance()->registerPlugin(new Plugin_Layout());

		$pluginsLoader->load("Acl");
		if ( $pluginsLoader->isLoaded("Acl"))
			$front = Zend_Controller_Front::getInstance()->registerPlugin(new Plugin_Acl());       
	}

	public function _initRoute(){
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
					'controller' => 'sections',
					'action'     => 'plug',
					'module'     => 'default'
				)
			);
			$router->addRoute('hostAlfa', $hostnameRoute);
		}
	}

	protected function _initDoctype()
	{
		$this->bootstrap('layout');
		$layout = $this->getResource('layout');
		$view = $layout->getView();
		$view->doctype('HTML5');
	}

	/**
	 * @return Zend_Controller_Front
	 */
	protected function _initFrontControllerOutput() {

		$this->bootstrap('FrontController');
		$frontController = $this->getResource('FrontController');

		$response = new Zend_Controller_Response_Http;
		$response->setHeader('Content-Type', 'text/html; charset=UTF-8', true);
		$frontController->setResponse($response);

		$this->_frontController = $frontController;

		return $frontController;
	}


}
?>