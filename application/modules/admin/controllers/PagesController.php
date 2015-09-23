<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class Admin_PagesController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
    }

    public function editAction()
    {
        $form = new Admin_Form_PageEdit();
        /*$form->setDefaults(array(
            'sorting'   => 0,
            'active'    => 1,
            'deleted'   => 0,
        ));*/


        if ($this->getRequest()->isPost()){
            $formData = $this->getRequest()->getPost();

            $markdown = $formData['content_markdown'];
            $context_html = Markdown::defaultTransform($markdown);

            $this->view->html = $context_html;

            $form->setDefaults($formData);
            $this->view->formData = $formData;
        }

        $this->view->form = $form;
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_PageEdit();

        $form->setDefaults(array(
            'sorting'   => 0,
            'active'    => 1,
            'deleted'   => 0,
        ));

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())) {

                $page = new Default_Model_Pages($form->getValues());
                $markdown = $request->getParam('content_markdown');
                $context_html = Markdown::defaultTransform($markdown);
                $page->setContentHtml($context_html);
                $pageMapper = new Default_Model_Mapper_Pages();
                $pageMapper->save($page);

                $this->view->html = $context_html;
                $this->view->value = $page->getPath();

                //return $this->_helper->redirector('index');
            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;
    }


}





