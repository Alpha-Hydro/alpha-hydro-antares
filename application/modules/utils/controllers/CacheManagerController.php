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


        Zend_Debug::dump($cache->getTags());

        $xml = simplexml_load_string($cache->load('productsCategoryXml83'));

        Zend_Debug::dump($xml);
    }


}

