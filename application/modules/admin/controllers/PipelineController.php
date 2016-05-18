<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class PipelineController extends Zend_Controller_Action
{
    /**
     * @var Pipeline_Model_Mapper_Pipeline
     */
    protected $_modelMapper = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_modelMapper = new Pipeline_Model_Mapper_Pipeline();
        $this->_redirector = $this->_helper->getHelper('Redirector');

        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('select-add-property', 'html')
            ->addActionContext('select-property-item-array', 'html')
            ->initContext('html');

        $this->_count_item_on_page = 10;
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();
        $select = $pipelineMapper->getDbTable()->select();
        $select->order('sorting ASC');

        if($request->getParam('category_id')){
            $pipelineCategoryMapper = new Pipeline_Model_Mapper_PipelineCategories();
            $category = $pipelineCategoryMapper->find($request->getParam('category_id'), new Pipeline_Model_PipelineCategories());

            if(!is_null($category)){
                $select->where('category_id = ?', $request->getParam('category_id'));
                $this->view->categoryName = $category->getTitle().' - ';
            }
        }

        $pagesItems = $pipelineMapper->fetchAll($select);

        if(!empty($pagesItems)){
            if(count($pagesItems)> $this->getCountItemOnPage()){
                $pageItems = array_chunk($pagesItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($pageItems))
                    $currentPage = count($pageItems)-1;

                $pagesItems = $pageItems[$currentPage];
                $this->view->countPage = count($pageItems);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->pages = $pagesItems;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Категории',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'resource' => 'pipeline-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Свойства товаров',
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'resource' => 'pipeline-property',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить товар',
                'module' => 'admin',
                'controller' => 'pipeline',
                'action' => 'add',
                'resource' => 'pipeline',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_PipelineEdit();

        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'imageLoad'         => '/files/images/product/2012-05-22_foto_nv.jpg',
            'imageDraftLoad'    => '/files/images/product/2012-05-22_foto_nv.jpg',
        ));

        $form->getDisplayGroup('desc')->addAttribs(array('class'=>'tab-pane active'));

        $imageTableElement = $form->getElement('imageTable');
        $imageTablePrepend = '<button type="button" class="btn btn-default" id="imageTableLoadBtn"><span class="glyphicon glyphicon-save"></span></button>';
        $imageTableElement->setAttrib('prepend_btn', $imageTablePrepend);

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())){
                $this->_saveFormData($form);
            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Категории',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'resource' => 'pipeline-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Свойства товаров',
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'resource' => 'pipeline-property',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pipeline',
                'resource' => 'pipeline',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function editAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();
        $pipeline = $pipelineMapper->find($itemId, new Pipeline_Model_Pipeline());

        if(is_null($pipeline))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->item = $pipeline;

        $form = new Admin_Form_PipelineEdit();
        $dataPage = $pipeline->getOptions();

        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }

        $imageValue = ($form->getValue('image') != '')
            ?$form->getValue('image')
            :'/files/images/product/2012-05-22_foto_nv.jpg';
        $form->setDefault('imageLoad', $imageValue);

        $imageDraftValue = ($form->getValue('imageDraft') != '')
            ?$form->getValue('imageDraft')
            :'/files/images/product/2012-05-22_foto_nv.jpg';
        $form->setDefault('imageDraftLoad', $imageDraftValue);

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
                $this->_saveFormData($form);
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

        $propertyArray = $this->_getPropertyArray($itemId);

        if(0 != count($propertyArray)){
            $formValue = new Admin_Form_PipelinePropertyValue();
            $formValue->setDefaults(array(
                'pipelineId' => $itemId,
                'propertyId' => 0,
                'sorting' => 0,
            ));

            $formValue->getElement('propertyId')->setMultiOptions($propertyArray);
            $this->view->formValue = $formValue;
        }

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Категории',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'resource' => 'pipeline-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Список свойств',
                'module' => 'admin',
                'controller' => 'pipeline-property',
                'resource' => 'pipeline-property',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить',
                'module' => 'admin',
                'controller' => 'pipeline',
                'action' => 'add',
                'resource' => 'pipeline',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить',
                'module' => 'admin',
                'controller' => 'pipeline',
                'action' => 'delete',
                'resource' => 'pipeline',
                'params' => array(
                    'id' => $itemId,
                ),
            )),
            Zend_Navigation_Page_Uri::factory(array(
                'label' => 'Посмотреть на сайте',
                'uri' => '/pipeline/'.$pipeline->getFullPath(),
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pipeline',
                'resource' => 'pipeline',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function deleteAction()
    {
        $itemId = $this->_request->getParam('id');
        if(is_null($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $item = $this->_modelMapper->find($itemId, new Pipeline_Model_Pipeline());
        if(is_null($item))
            throw new Zend_Controller_Action_Exception('Страница не найдена', 404);

        $deleted = ($item->getDeleted() != 0)?0:1;

        $item->setDeleted($deleted);
        $this->_modelMapper->save($item);

        $this->_redirector->gotoRouteAndExit(array(
            'module' => 'admin',
            'controller' => 'pipeline-categories',
            'action' => 'list',
            'id'=>$item->getCategoryId()
        ), 'adminEdit', true);
    }

    public function enableAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $item = $this->_modelMapper->find($itemId, new Pipeline_Model_Pipeline());

        $active = ($item->getActive() != 0)?0:1;
        $item->setActive($active);

        $this->_modelMapper->save($item);

        $this->_redirector->gotoRouteAndExit(array(
            'module' => 'admin',
            'controller' => 'pipeline-categories',
            'action' => 'list',
            'id'=>$item->getCategoryId()
        ), 'adminEdit', true);
    }


    public function jsonAction()
    {
        $request = $this->getRequest();
        $id = $request->getParam('id');

        $jsonData = array(
            $request->getControllerKey() => $request->getControllerName(),
            'role' => Zend_Auth::getInstance()->getIdentity()->role
        );

        if($id){
            $entry = $this->_modelMapper->find($id, new Pipeline_Model_Pipeline());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }


        return $this->_helper->json->sendJson($jsonData);
    }

    /**
     * @param null $count_item_on_page
     * @return PipelineController
     *
     */
    public function setCountItemOnPage($count_item_on_page)
    {
        $this->_count_item_on_page = $count_item_on_page;
        return $this;
    }

    /**
     * @return null
     *
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }

    /**
     * @param $itemId
     * @return array
     *
     */
    protected function _getPropertyArray($itemId)
    {
        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $select = $pipelinePropertyMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $pipelinePropertyArray = array();
        $pipelinePropertyArray[] = '...';
        $pipelineProperty = $pipelinePropertyMapper->fetchAll($select);


        $pipelinePropertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();
        $select = $pipelinePropertyValuesMapper->getDbTable()->select();
        $select->where('pipeline_id = ?', $itemId);
        $pipelinePropertyValuesArray = $pipelinePropertyValuesMapper->fetchAll($select);

        $itemIdArray = array();
        if(!empty($pipelinePropertyValuesArray)){
            foreach($pipelinePropertyValuesArray as $pipelinePropertyValue){
                $itemIdArray[] = $pipelinePropertyValue->getPropertyId();
            }
        }

        if(!empty($pipelineProperty)){
            foreach ($pipelineProperty as $property) {
                if(!in_array($property->getId(), $itemIdArray)){
                    $pipelinePropertyArray[$property->getId()] = $property->getName();
                }
            }
        }

        $pipelinePropertyArray['new'] = 'Новое свойство...';

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

    public function selectPropertyItemArrayAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('pipelineId');
        $propertyArray = $this->_getPropertyArray($itemId);

        $this->view->selectOptions = $propertyArray;
    }

    private function _saveFormData(Admin_Form_PipelineEdit $form)
    {
        $request = $this->getRequest();
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
        if(!empty($fileImage) && $fileImage['imageLoadFile']['name'] != ''){
            $form->imageLoadFile->receive();
            $pipeline->setImage('/upload/pipeline/items/'.$fileImage['imageLoadFile']['name']);
        }

        //set imageDraft
        $fileDraftImage = $form->imageDraftLoadFile->getFileInfo();
        if(!empty($fileDraftImage) && $fileDraftImage['imageDraftLoadFile']['name'] != ''){
            $form->imageDraftLoadFile->receive();
            $pipeline->setImageDraft('/upload/pipeline/items/'.$fileDraftImage['imageDraftLoadFile']['name']);
        }

        //set imageTable
        $fileTableImage = $form->imageTableLoadFile->getFileInfo();
        if(!empty($fileTableImage) && $fileTableImage['imageTableLoadFile']['name'] != ''){
            $form->imageTableLoadFile->receive();
            $pipeline->setImageTable('/upload/pipeline/items/'.$fileTableImage['imageTableLoadFile']['name']);
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
}











