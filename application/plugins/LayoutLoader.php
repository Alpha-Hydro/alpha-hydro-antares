<?php
/**
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
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
