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
        $local_repo = APPLICATION_ROOT;
        if($this->getRequest()->isPost() && $_POST['payload']){
            shell_exec("cd {$local_repo} && git pull");
        }
    }

}