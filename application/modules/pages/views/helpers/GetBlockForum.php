<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Zend_View_Helper_getBlockForum extends Zend_View_Helper_Abstract
{
    function getBlockForum(){
        $forumMapper = new Forum_Model_Mapper_Forum();
        $select = $forumMapper->getDbTable()->select();
        $select->where('parent_id != ?', 'null')
            ->order('timestamp DESC')
            ->limit(1,0);
        $forumReply = $forumMapper->fetchAll($select);
        if(!empty($forumReply)){

            $forumReply = array_shift($forumReply);
            $forumQuestion = $forumMapper->find($forumReply->getParentId(), new Forum_Model_Forum());

            if(!is_null($forumQuestion)){
                $this->view->assign(array(
                    'forum_question' => $forumQuestion,
                    'forum_reply' => $forumReply,
                ));
            }
        }
    }
}