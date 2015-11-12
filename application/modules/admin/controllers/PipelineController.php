<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class Admin_PipelineController extends Zend_Controller_Action
{

    protected $_count_item_on_page = null;

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('select-add-property', 'html')
            ->initContext('html');

        $this->_count_item_on_page = 10;
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();
        $select = $pipelineMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->order('sorting ASC');

        $pipelineItems = $pipelineMapper->fetchAll($select);

        if(!empty($pipelineItems)){
            if(count($pipelineItems)> $this->getCountItemOnPage()){
                $pipelinePages = array_chunk($pipelineItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($pipelinePages))
                    $currentPage = count($pipelinePages)-1;

                $pipelineItems = $pipelinePages[$currentPage];
                $this->view->countPage = count($pipelinePages);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->pages = $pipelineItems;
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_PipelineEdit();

        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'image'         => '/files/images/product/2012-05-22_foto_nv.jpg',
            'imageDraft'    => '/files/images/product/2012-05-22_foto_nv.jpg',
        ));

        $imageTableElement = $form->getElement('imageTable');
        $imageTablePrepend = '<button type="button" class="btn btn-default" id="imageTableLoadBtn"><span class="glyphicon glyphicon-save"></span></button>';
        $imageTableElement->setAttrib('prepend_btn', $imageTablePrepend);

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())){
                $pipeline = new Pipeline_Model_Pipeline($form->getValues());
                $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();

                $pipelineCategoryMapper = new Pipeline_Model_Mapper_PipelineCategories();
                $pipelineCategory = $pipelineCategoryMapper->find($request->getParam('categoryId'),
                    new Pipeline_Model_PipelineCategories());

                $fullPath = (!is_null($pipelineCategory))
                    ?$pipelineCategory->getPath().'/'.$this->getParam('path')
                    :$this->getParam('path');
                $pipeline->setFullPath($fullPath);

                //set Image
                $file = $form->imageLoadFile->getFileInfo();
                if(!empty($file) && $file['imageLoadFile']['name'] !== ''){
                    $form->imageLoadFile->receive();
                    $pipeline->setImage('/upload/pipeline/items/'.$file['imageLoadFile']['name']);
                }

                //set imageDraft
                $fileDraftImage = $form->imageDraftLoadFile->getFileInfo();
                if(!empty($fileDraftImage) && $fileDraftImage['imageDraftLoadFile']['name'] !== ''){
                    $form->imageDraftLoadFile->receive();
                    $pipeline->setImageDraft('/upload/pipeline/items/'.$fileDraftImage['imageDraftLoadFile']['name']);
                }

                //set imageTable
                $fileTableImage = $form->imageTableLoadFile->getFileInfo();
                if(!empty($fileTableImage) && $fileTableImage['imageTableLoadFile']['name'] !== ''){
                    $form->imageTableLoadFile->receive();
                    $pipeline->setImageTable('/upload/pipeline/items/'.$fileTableImage['imageTableLoadFile']['name']);
                }

                $markdown = $request->getParam('contentMarkdown');
                $context_html = Markdown::defaultTransform($markdown);
                $pipeline->setContentHtml($context_html);

                $metaTitle = $request->getParam('metaTitle');
                if(empty($metaTitle))
                    $pipeline->setMetaTitle($request->getParam('title'));

                $description = $request->getParam('description');
                $metaDescription = $request->getParam('metaDescription');
                if(empty($metaDescription) && !empty($description))
                    $pipeline->setMetaDescription($description);

                $pipelineMapper->save($pipeline);

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

        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();
        $pipeline = $pipelineMapper->find($itemId, new Pipeline_Model_Pipeline());

        if(is_null($pipeline))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $form = new Admin_Form_PipelineEdit();
        $dataPage = $pipeline->getOptions();
        $image = $dataPage['image'];
        $imageDraft = $dataPage['imageDraft'];
        $imageTable = $dataPage['imageTable'];

        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }

        if(empty($image))
            $form->setDefault('image', '/files/images/product/2012-05-22_foto_nv.jpg');
        if(empty($imageDraft))
            $form->setDefault('imageDraft', '/files/images/product/2012-05-22_foto_nv.jpg');
//        if(empty($imageTable))
//            $form->setDefault('imageTable', '/files/images/product/2012-05-22_foto_nv.jpg');

        $imageTableElement = $form->getElement('imageTable');
        $imageTablePrepend = '<button type="button" class="btn btn-default" id="imageTableLoadBtn"><span class="glyphicon glyphicon-save"></span></button>';
        $imageTableValue = $imageTableElement->getValue();
        if(!is_null($imageTableValue)){
            $imageTablePrepend .= '<a href="'.$imageTableValue.'" class="btn btn-default" target="_blank"><span class="glyphicon glyphicon-eye-open"></span></a>';
            $imageTablePrepend .= '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-trash"></span></button>';
        }
        $imageTableElement->setAttrib('prepend_btn', $imageTablePrepend);


        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())){
                $pipeline = new Pipeline_Model_Pipeline($form->getValues());
                $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();

                $pipelineCategoryMapper = new Pipeline_Model_Mapper_PipelineCategories();
                $pipelineCategory = $pipelineCategoryMapper->find($request->getParam('categoryId'),
                    new Pipeline_Model_PipelineCategories());

                //set FullPath
                $fullPath = (!is_null($pipelineCategory))
                    ?$pipelineCategory->getPath().'/'.$this->getParam('path')
                    :$this->getParam('path');
                $pipeline->setFullPath($fullPath);

                //set Image
                $fileImage = $form->imageLoadFile->getFileInfo();
                if(!empty($fileImage) && $fileImage['imageLoadFile']['name'] !== ''){
                    $form->imageLoadFile->receive();
                    $pipeline->setImage('/upload/pipeline/items/'.$fileImage['imageLoadFile']['name']);
                }
                else{
                    $pipeline->setImage($image);
                }

                //set imageDraft
                $fileDraftImage = $form->imageDraftLoadFile->getFileInfo();
                if(!empty($fileDraftImage) && $fileDraftImage['imageDraftLoadFile']['name'] !== ''){
                    $form->imageDraftLoadFile->receive();
                    $pipeline->setImageDraft('/upload/pipeline/items/'.$fileDraftImage['imageDraftLoadFile']['name']);
                }
                else{
                    $pipeline->setImageDraft($imageDraft);
                }

                //set imageTable
                $fileTableImage = $form->imageTableLoadFile->getFileInfo();
                if(!empty($fileTableImage) && $fileTableImage['imageTableLoadFile']['name'] !== ''){
                    $form->imageTableLoadFile->receive();
                    $pipeline->setImageTable('/upload/pipeline/items/'.$fileTableImage['imageTableLoadFile']['name']);
                }
                else{
                    $pipeline->setImageTable($imageTable);
                }

                //set Content (html)
                $markdown = $request->getParam('contentMarkdown');
                $context_html = Markdown::defaultTransform($markdown);
                $pipeline->setContentHtml($context_html);

                //set meta title
                $metaTitle = $request->getParam('metaTitle');
                if(empty($metaTitle))
                    $pipeline->setMetaTitle($request->getParam('title'));

                //set meta Description
                $description = $request->getParam('description');
                $metaDescription = $request->getParam('metaDescription');
                if(empty($metaDescription) && !empty($description))
                    $pipeline->setMetaDescription($description);

                $pipelineMapper->save($pipeline);

                return $this->_helper->redirector('index');
            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;

        $pipelineProperties = $pipelineMapper->fetchPropertyRel($itemId);

        if(!empty($pipelineProperties)){
            $propertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();

            $viewProperties = array();
            foreach ($pipelineProperties as $property) {
                $propertyValues = $propertyValuesMapper->findByKey($itemId, $property->getId(), new Pipeline_Model_PipelinePropertyValues());
                $viewProperties[$property->getName()] = $propertyValues;
            }
            //var_dump($viewProperties);
            $this->view->properties = $viewProperties;
        }

        $formValueAdd = new Admin_Form_PipelinePropertyValueAdd();
        $formValueAdd->setDefaults(array(
            'pipelineId' => $itemId,
            'propertyId' => 0,
        ));
        $this->view->formValueAdd = $formValueAdd;
    }

    public function deleteAction()
    {
        // action body
    }

    /**
     * @param null $count_item_on_page
     * @return Admin_PipelineController
     */
    public function setCountItemOnPage($count_item_on_page)
    {
        $this->_count_item_on_page = $count_item_on_page;
        return $this;
    }

    /**
     * @return null
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }

    protected function _getPropertyArray()
    {
        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $select = $pipelinePropertyMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $pipelinePropertyArray = array();
        $pipelinePropertyArray[] = '...';
        $pipelineProperty = $pipelinePropertyMapper->fetchAll($select);

        if(!empty($pipelineProperty)){
            foreach ($pipelineProperty as $property) {
                $pipelinePropertyArray[$property->getId()] = $property->getName();
            }
        }

        return $pipelinePropertyArray;
    }

    public function selectAddPropertyAction()
    {
        $request = $this->getRequest();

        if($request->getParam('propertyId')){
            $propertyId = $request->getParam('propertyId');

            $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
            $pipelineProperty = $pipelinePropertyMapper
                ->find($propertyId, new Pipeline_Model_PipelineProperty());

            $this->view->property = $pipelineProperty;
        }
    }
}









