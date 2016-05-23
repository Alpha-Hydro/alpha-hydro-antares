<?php

class Zend_View_Helper_getSectionSite extends Zend_View_Helper_Abstract
{
    function getSectionSite(){
        $pagesMapper = new Pages_Model_Mapper_Pages();
        $select = $pagesMapper->getDbTable()->select();

        $select
            ->where('active != ?', 0)
            ->where('deleted != ?', 1)
            ->order('sorting ASC');

        $sectionSiteArray = array();
        $sectionSiteArray[] = 'нет';
        /**
         * @var $page Pages_Model_Pages;
         */
        foreach ($pagesMapper->fetchAll($select) as $page) {
            $sectionSiteArray[$page->getId()] = $page->getTitle();
        }

        return $sectionSiteArray;
    }
}