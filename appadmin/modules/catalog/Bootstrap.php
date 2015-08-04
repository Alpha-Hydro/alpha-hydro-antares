<?php
/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 24.06.2015
 * Time: 11:59
 */

class Catalog_Bootstrap extends Zend_Application_Module_Bootstrap
{
	protected function _initBootstrap()
	{
		$moduleName = $this->getModuleName();
		$_conf = new Zend_Config_Ini(APPLICATION_PATH . "/modules/" . strtolower($moduleName) . "/config/module.ini", APPLICATION_ENV);
		$this->_options = array_merge($this->_options, $_conf->toArray());

	}

	/*public function _initRoute(){

		$front = Zend_Controller_Front::getInstance();
		$router = $front->getRouter();

		$config = new Zend_Config_Ini(APPLICATION_PATH . "/modules/" . $this->getModuleName() . '/config/route.ini', 'production');
		$router->addConfig($config,'routes');
	}*/

}