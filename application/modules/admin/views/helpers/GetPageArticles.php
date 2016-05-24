<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Zend_View_Helper_getPageArticles extends Zend_View_Helper_Abstract
{
    function getPageArticles(){
        $frontController = Zend_Controller_Front::getInstance();
        $request = $frontController->getRequest();
        $moduleName = $request->getModuleName();

        $pagesMapper = new Pages_Model_Mapper_Pages();
        $page = $pagesMapper->findByPath($moduleName, new Pages_Model_Pages());
        
        if(!$page)
            return null;

        $this->view->sectionName = $page->getTitle();

        $mediaModelMapper = new Media_Model_Mapper_Media();
        $selectMedia = $mediaModelMapper->getDbTable()->select();
        $selectMedia->where('section_site_id = ?', $page->getId());

        $media = $mediaModelMapper->fetchAll($selectMedia);

        return $media;
    }
}