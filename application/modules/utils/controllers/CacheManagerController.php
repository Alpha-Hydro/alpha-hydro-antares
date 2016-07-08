<?php

class Utils_CacheManagerController extends Zend_Controller_Action
{
    /**
     * @var Zend_Cache_Core
     */
    protected $_cache = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;


    public function init()
    {
        $this->_cache = Zend_Registry::get('cache');
        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        //Zend_Debug::dump($this->_cache->getIdsMatchingTags(array('api')));
        
        $this->view->assign(array(
            'cacheTags' => $this->_cache->getTags()
        ));

        //$cache->clean(Zend_Cache::CLEANING_MODE_ALL);

        //$cache->clean(Zend_Cache::CLEANING_MODE_OLD);
        //$cache->remove('treeCategories');

        /*$xml = simplexml_load_string($cache->load('productsCategoryXml83'));

        Zend_Debug::dump($xml);*/

        /*$cache->remove('treeCategoriesArray');

        $cache->clean(
            Zend_Cache::CLEANING_MODE_MATCHING_ANY_TAG,
            array(
                'sectionXml',
                'productsCategoryObj',
                'productsCategoryXml',
                )
        );*/

        /*$cache->clean(
            Zend_Cache::CLEANING_MODE_MATCHING_TAG,
            array(
                'productsCategoryXml',
                )
        );*/
    }

    public function clearTagAction()
    {

        $this->_cache->clean(
            Zend_Cache::CLEANING_MODE_MATCHING_TAG,
            array($this->_request->getParam('tag'))
        );

        $this->_redirector->gotoSimpleAndExit('index');
    }

    public function clearAllAction()
    {

        $this->_cache->clean(Zend_Cache::CLEANING_MODE_ALL);

        $this->_redirector->gotoSimpleAndExit('index');
    }


}

