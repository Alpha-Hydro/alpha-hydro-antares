<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Zend_View_Helper_getBlockArticle extends Zend_View_Helper_Abstract
{
    function getBlockArticle(){
        $mediaMapper = new Media_Model_Mapper_Media();
        $select = $mediaMapper->getDbTable()->select();

        //News
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id = ?', 4)
            ->order('timestamp DESC')
            ->limit(1,0);
        $articleItem = $mediaMapper->fetchAll($select);

        if(!empty($articleItem))
            $this->view->assign('articleItem', array_shift($articleItem));
    }
}