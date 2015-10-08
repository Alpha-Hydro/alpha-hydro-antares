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
    }

}

