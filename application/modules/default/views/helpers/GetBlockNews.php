<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Zend_View_Helper_getBlockNews extends Zend_View_Helper_Abstract
{
    function getBlockNews(){
        $mediaMapper = new Media_Model_Mapper_Media();
        $select = $mediaMapper->getDbTable()->select();

        //News
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id = ?', 2)
            ->order('timestamp DESC')
            ->limit(1,0);
        $newsItem = $mediaMapper->fetchAll($select);

        if(!empty($newsItem))
            $this->view->assign('newsItem', array_shift($newsItem));
    }
}