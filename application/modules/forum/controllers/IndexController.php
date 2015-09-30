<?php

class Forum_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $form_ask = new Forum_Form_ForumAsk();
        $this->view->form_ask = $form_ask;

        $forumMapper = new Forum_Model_Mapper_Forum();
        $forumItemsAll = $forumMapper->fetchAll();

        $this->view->title = 'Форум';

        $this->view->forumItemsAll = $forumItemsAll;
    }

    public function askAction()
    {
        $request = $this->getRequest();

        $form_ask = new Forum_Form_ForumAsk();
        if($request->isPost()){
            if($form_ask->isValid($request->getPost())){
                var_dump($request->getParams());
            }
            if($form_ask->isErrors()){
                var_dump($form_ask->getErrorMessages());
            }
        }
    }


}



