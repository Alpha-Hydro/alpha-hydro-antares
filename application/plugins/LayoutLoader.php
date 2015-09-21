<?php
/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 18.08.2015
 * Time: 11:55
 */


class Plugin_LayoutLoader extends Zend_Controller_Plugin_Abstract
{
    public function preDispatch(Zend_Controller_Request_Abstract $request)
    {

        $frontController = Zend_Controller_Front::getInstance();

        $module = $request->getModuleName();

        $configPath  = $frontController->getModuleDirectory($module)
            . DIRECTORY_SEPARATOR . 'configs/module.ini';

        if(file_exists($configPath)){
            $module_config = new Zend_Config_Ini($configPath, APPLICATION_ENV);
            $layoutPath = $module_config->resources->layout->layoutPath;
            $layoutScript = $module_config->resources->layout->layout;

            $layout = Zend_Layout::getMvcInstance();

            if(!is_null($layoutPath))
                $layout->setLayoutPath($layoutPath);

            if(!is_null($layoutScript))
                $layout->setLayout($layoutScript);

        }
    }
}