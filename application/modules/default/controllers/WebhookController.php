<?php

class WebhookController extends Zend_Controller_Action
{
    public function indexAction(){

        if($this->getRequest()->isPost() && $this->getRequest()->getPost('payload')){
            $local_repo = APPLICATION_ROOT;
            shell_exec("cd {$local_repo} && git pull");
        }
        else{
//            $this->getResponse()->setHttpResponseCode(404);
//            $this->_helper->viewRenderer('404');
            //throw new Zend_Exception("Page not found", 404);
        }
    }
}

