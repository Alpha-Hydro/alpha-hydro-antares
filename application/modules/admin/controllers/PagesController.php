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
        $pagesMapper = new Default_Model_Mapper_Pages();
        $this->view->pages = $pagesMapper->fetchAll();
    }

    public function editAction()
    {
        $request = $this->getRequest();
        $pageId = $request->getParam('id');

        if(is_null($pageId))
            return $this->_helper->redirector('index');

        $pagesMapper = new Default_Model_Mapper_Pages();
        $page = $pagesMapper->find($pageId, new Default_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);


        $form = new Admin_Form_PageEdit();
        $dataPage = $page->getOptions();
        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())) {

                $newPage = new Default_Model_Pages($form->getValues());

                $markdown = $request->getParam('contentMarkdown');
                $context_html = Markdown::defaultTransform($markdown);
                $newPage->setContentHtml($context_html);

                $description = $request->getParam('description');
                $metaDescription = $request->getParam('metaDescription');
                if(empty($metaDescription) && !empty($description))
                    $newPage->setMetaDescription($description);

                $pagesMapper->save($newPage);

                return $this->_helper->redirector('index');

            }

            $form->setDefaults($form->getValues());
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

                $markdown = $request->getParam('contentMarkdown');
                $context_html = Markdown::defaultTransform($markdown);
                $page->setContentHtml($context_html);

                $metaTitle = $request->getParam('metaTitle');
                if(empty($metaTitle))
                    $page->setMetaTitle($request->getParam('title'));

                $description = $request->getParam('description');
                $metaDescription = $request->getParam('metaDescription');
                if(empty($metaDescription) && !empty($description))
                    $page->setMetaDescription($description);

                $pagesMapper = new Default_Model_Mapper_Pages();
                $pagesMapper->save($page);

                return $this->_helper->redirector('index');
            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;
    }

    public function deleteAction()
    {
        $request = $this->getRequest();
        $pageId = $request->getParam('id');

        if(is_null($pageId))
            return $this->_helper->redirector('index');

        $pagesMapper = new Default_Model_Mapper_Pages();
        $page = $pagesMapper->find($pageId, new Default_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $page = $pagesMapper->find($pageId, new Default_Model_Pages());
        $page->setDeleted(1);
        $pagesMapper->save($page);

        return $this->_helper->redirector('index');
    }


}







