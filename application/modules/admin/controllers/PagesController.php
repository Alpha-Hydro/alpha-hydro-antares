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
            'id' => 10,
            'title' => 'Страница',
            'path' => 'home',
            'description' => 'Описание страницы'
        ));*/


        if ($this->getRequest()->isPost()){
            $formData = $this->getRequest()->getPost();

            $markdown = $this->getRequest()->getPost('content_html');

            $context_html = Markdown::defaultTransform($markdown);
            $this->view->html = $context_html;

            $form->setDefaults($formData);
            $this->view->formData = $formData;
        }

        $this->view->form = $form;
    }


}



