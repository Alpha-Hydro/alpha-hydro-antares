<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class Admin_ManufactureController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
        $this->view->pages = $manufactureMapper->fetchAll();
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_ManufactureEdit();

        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
        ));

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())){
                $manufacture = new Manufacture_Model_Manufacture($form->getValues());
                $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();

                $manufactureCategoryMapper = new Manufacture_Model_Mapper_ManufactureCategories();
                $manufactureCategory = $manufactureCategoryMapper->find($request->getParam('categoryId'),
                    new Manufacture_Model_ManufactureCategories());

                $fullPath = (!is_null($manufactureCategory))
                    ?$manufactureCategory->getPath().'/'.$this->getParam('path')
                    :$this->getParam('path');
                $manufacture->setFullPath($fullPath);

                $file = $form->imageLoadFile->getFileInfo();
                if(!empty($file) && $file['imageLoadFile']['name'] !== ''){
                    $form->imageLoadFile->receive();
                    $manufacture->setImage('/upload/manufacture/items/'.$file['imageLoadFile']['name']);
                }

                $markdown = $request->getParam('contentMarkdown');
                $context_html = Markdown::defaultTransform($markdown);
                $manufacture->setContentHtml($context_html);

                $metaTitle = $request->getParam('metaTitle');
                if(empty($metaTitle))
                    $manufacture->setMetaTitle($request->getParam('title'));

                $description = $request->getParam('description');
                $metaDescription = $request->getParam('metaDescription');
                if(empty($metaDescription) && !empty($description))
                    $manufacture->setMetaDescription($description);

                $manufactureMapper->save($manufacture);

                return $this->_helper->redirector('index');

            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;
    }

    public function editAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId))
            return $this->_helper->redirector('index');

        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
        $manufacture = $manufactureMapper->find($itemId, new Manufacture_Model_Manufacture());

        if(is_null($manufacture))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $form = new Admin_Form_ManufactureEdit();
        $dataPage = $manufacture->getOptions();
        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())){
                $manufacture = new Manufacture_Model_Manufacture($form->getValues());
                $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();

                $manufactureCategoryMapper = new Manufacture_Model_Mapper_ManufactureCategories();
                $manufactureCategory = $manufactureCategoryMapper->find($request->getParam('categoryId'),
                    new Manufacture_Model_ManufactureCategories());

                $fullPath = (!is_null($manufactureCategory))
                    ?$manufactureCategory->getPath().'/'.$this->getParam('path')
                    :$this->getParam('path');
                $manufacture->setFullPath($fullPath);

                $file = $form->imageLoadFile->getFileInfo();
                if(!empty($file) && $file['imageLoadFile']['name'] !== ''){
                    $form->imageLoadFile->receive();
                    $manufacture->setImage('/upload/manufacture/items/'.$file['imageLoadFile']['name']);
                }


                $markdown = $request->getParam('contentMarkdown');
                $context_html = Markdown::defaultTransform($markdown);
                $manufacture->setContentHtml($context_html);

                $metaTitle = $request->getParam('metaTitle');
                if(empty($metaTitle))
                    $manufacture->setMetaTitle($request->getParam('title'));

                $description = $request->getParam('description');
                $metaDescription = $request->getParam('metaDescription');
                if(empty($metaDescription) && !empty($description))
                    $manufacture->setMetaDescription($description);

                $manufactureMapper->save($manufacture);

                return $this->_helper->redirector('index');

            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;
    }

    public function deleteAction()
    {
        // action body
    }


}







