<?php

class WebhookController extends Zend_Controller_Action
{
    public function indexAction(){
        if($this->getRequest()->isPost() && $this->getRequest()->getPost('payload')) {
            $local_repo = APPLICATION_ROOT;
            shell_exec("cd {$local_repo} && git pull");
        }
    }
}

