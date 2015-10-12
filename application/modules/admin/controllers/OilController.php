<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class Admin_OilController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $oilMapper = new Oil_Model_Mapper_Oil();
        $this->view->pages = $oilMapper->fetchAll();
    }

    public function editAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId))
            return $this->_helper->redirector('index');

        $oilMapper = new Oil_Model_Mapper_Oil();
        $page = $oilMapper->find($itemId, new Oil_Model_Oil());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);


        $form = new Admin_Form_OilEdit();
        $dataPage = $page->getOptions();
        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())) {

                $newItem = new Oil_Model_Oil($form->getValues());

                $markdown = $request->getParam('contentMarkdown');
                $context_html = Markdown::defaultTransform($markdown);
                $newItem->setContentHtml($context_html);

                $description = $request->getParam('description');
                $metaDescription = $request->getParam('metaDescription');
                if(empty($metaDescription) && !empty($description))
                    $newItem->setMetaDescription($description);

                $oilMapper->save($newItem);

                return $this->_helper->redirector('index');

            }

            $form->setDefaults($form->getValues());
        }

        $this->view->form = $form;
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_OilEdit();

        $form->setDefaults(array(
            'categoryId'    => 0,
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
        ));

        if ($this->getRequest()->isPost()){
        if ($form->isValid($request->getPost())) {

            $oilItem = new Oil_Model_Oil($form->getValues());

            $markdown = $request->getParam('contentMarkdown');
            $context_html = Markdown::defaultTransform($markdown);
            $oilItem->setContentHtml($context_html);

            $metaTitle = $request->getParam('metaTitle');
            if(empty($metaTitle))
                $oilItem->setMetaTitle($request->getParam('title'));

            $description = $request->getParam('description');
            $metaDescription = $request->getParam('metaDescription');
            if(empty($metaDescription) && !empty($description))
                $oilItem->setMetaDescription($description);

            $oilMapper = new Oil_Model_Mapper_Oil();
            $oilMapper->save($oilItem);

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
        $oilId = $request->getParam('id');

        if(is_null($oilId))
            return $this->_helper->redirector('index');

        $oilMapper = new Oil_Model_Mapper_Oil();
        $oilItem = $oilMapper->find($oilId, new Oil_Model_Oil());

        if(is_null($oilItem))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $page = $oilMapper->find($oilId, new Oil_Model_Oil());
        $page->setDeleted(1);
        $oilMapper->save($page);

        return $this->_helper->redirector('index');
    }


}







