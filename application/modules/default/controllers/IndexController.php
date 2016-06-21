<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
    }

    public function indexAction()
    {
        //Zend_Debug::dump($this->_request->getParams());
        //$this->forward('index', 'index', 'pages');

        /*$forumMapper = new Forum_Model_Mapper_Forum();
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

        //article
        $select->reset()
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id = ?', 4)
            ->order('timestamp DESC')
            ->limit(1,0);
        $articleItem = $mediaMapper->fetchAll($select);

        if(!empty($articleItem))
            $this->view->assign('articleItem', array_shift($articleItem));*/
    }

    /*public function aboutAction()
    {
//        $this->forward('index', 'about', 'default');
//        Zend_Controller_Front::getInstance()->getResponse()->setRedirect('/about/', 301);
//        return;
    }*/

    public function plugAction()
    {
        Zend_Layout::getMvcInstance()->setLayout("plug");
        $host = $this->getRequest()->getServer('HTTP_HOST');

        if($host === 'xn----7sbavhvfm6b0af.xn--p1ai')
            $host = 'ханза-флекс.рф';

        $this->view->assign('host', $host);
    }

}

