<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 04.08.2015
 * Time: 10:50
 */
class WebhookController extends Zend_Controller_Action
{
    public function indexAction(){

        if($this->getRequest()->isPost() && $this->getRequest()->getPost('payload')){
            $local_repo = APPLICATION_ROOT;
            shell_exec("cd {$local_repo} && git pull");
        }
        else{
            throw new Zend_Exception("Page not found", 404);
        }
    }

}