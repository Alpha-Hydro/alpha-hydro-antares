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
        if($_POST['payload']){
            $writer = new Zend_Log_Writer_Stream(APPLICATION_ROOT.'webhook.json');
            $logger = new Zend_Log($writer);

            $logger->info('Informational message');
        }
    }

}