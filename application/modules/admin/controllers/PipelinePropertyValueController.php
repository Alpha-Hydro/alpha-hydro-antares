<?php

class Admin_PipelinePropertyValueController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
    }

    public function addAction()
    {
        $request = $this->getRequest();

        if ($request->isPost()){
            var_dump($request->getPost());
        }

        /*$form = new Admin_Form_PipelinePropertyValue();

        $this->view->form = $form;*/
    }


}



