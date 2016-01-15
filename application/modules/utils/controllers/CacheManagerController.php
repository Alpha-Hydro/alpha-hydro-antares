<?php

class Utils_CacheManagerController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $cache = Zend_Registry::get('cache');
        $frontendOptions = array(
            'lifetime' => 3600 * 24, // время жизни кэша - 24 часа
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


        var_dump($cache->getIds());
    }


}

