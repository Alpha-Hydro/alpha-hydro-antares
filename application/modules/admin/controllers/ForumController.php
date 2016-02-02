<?php

class Admin_ForumController extends Zend_Controller_Action
{
    /**
     * @var Forum_Model_Mapper_Forum
     */
    protected $_forumMapper;

    protected $_topics = array();
    protected $_noReply = array();

    public function init()
    {
        $this->_forumMapper = new Forum_Model_Mapper_Forum();

        $select = $this->_forumMapper->getDbTable()->select();

        $select->where('parent_id is null')
            ->order('timestamp DESC');
        $forumItems = $this->_forumMapper->fetchAll($select);

        if(!empty($forumItems)){
            $forums = array();
            $noReply = array();
            /* @var $forumItem Forum_Model_Forum */
            foreach ($forumItems as $forumItem) {
                $topic = array();

                $select->reset()
                    ->where('parent_id = ?', $forumItem->getId())
                    ->order('timestamp ASC');

                $reply = $this->_forumMapper->fetchAll($select);

                if(0 !== count($reply)){
                    $topic['question'] = $forumItem;
                    $topic['reply'] = $reply;
                }
                else{
                    $noReply[] = $forumItem;
                }

                if(!empty($topic))
                    $forums['topic'][] = $topic;
            }

            $this->setNoReply($noReply);
            $this->setTopics($forums);
        }
    }

    public function indexAction()
    {
        $this->view->assign('no_reply',$this->getNoReply());

    }

    /**
     * @param array $topics
     * @return Admin_ForumController
     */
    public function setTopics($topics)
    {
        $this->_topics = $topics;
        return $this;
    }

    /**
     * @return array
     */
    public function getTopics()
    {
        return $this->_topics;
    }

    /**
     * @param array $noReply
     * @return Admin_ForumController
     */
    public function setNoReply($noReply)
    {
        $this->_noReply = $noReply;
        return $this;
    }

    /**
     * @return array
     */
    public function getNoReply()
    {
        return $this->_noReply;
    }


}

