<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Zend_View_Helper_getPageArticles extends Zend_View_Helper_Abstract
{
    protected $_count_item_on_page = 5;

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
        $selectMedia
            ->where('active != ?', 0)
            ->where('deleted != ?', 1)
            ->where('section_site_id = ?', $page->getId())
            ->order('timestamp DESC');

        $mediaItems = $mediaModelMapper->fetchAll($selectMedia);

        if(!empty($mediaItems)){
            if(count($mediaItems) > $this->getCountItemOnPage()){
                $mediaPages = array_chunk($mediaItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($mediaPages))
                    $currentPage = count($mediaPages)-1;

                $mediaItems = $mediaPages[$currentPage];

                $this->view->countPage = count($mediaPages);
                $this->view->currentPage = $currentPage+1;
            }
        }

        return $mediaItems;
    }

    /**
     * @param null $count_item_on_page
     * @return Zend_View_Helper_getPageArticles
     */
    public function setCountItemOnPage($count_item_on_page)
    {
        $this->_count_item_on_page = $count_item_on_page;
        return $this;
    }

    /**
     * @return null
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }
}