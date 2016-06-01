<?php
include_once 'BaseController.php';

class PipelineController extends Admin_BaseController
{
    /**
     * @var Pipeline_Model_Mapper_Pipeline
     */
    protected $_modelMapper = null;

    /**
     * @var Pipeline_Model_Pipeline
     */
    protected $_model = null;

    /**
     * @var Pipeline_Model_Mapper_PipelineCategories
     */
    protected $_modelCategoriesMapper = null;

    /**
     * @var Zend_Form[]
     *
     */
    protected $_forms = array();

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_modelMapper = new Pipeline_Model_Mapper_Pipeline();
        $this->_model = new Pipeline_Model_Pipeline();
        $this->_modelCategoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $this->_forms['edit'] = new Admin_Form_PipelineEdit();

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
        parent::indexAction();

        if($this->_request->getParam('category_id'))
            $this->view->categoryName = $this->_modelCategoriesMapper
                    ->find(
                        $this->_request->getParam('category_id'),
                        new Pipeline_Model_PipelineCategories())
                    ->getTitle().' - ';

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
                'params' => array('id' => $this->_request->getParam('category_id'))
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function addAction()
    {
        $form = $this->_forms['edit'];

        parent::addAction();

        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'categoryId'    => (!$this->_request->getParam('id'))?0:$this->_request->getParam('id'),
            'imageLoad'         => '/files/images/product/2012-05-22_foto_nv.jpg'
        ));

        $form->getDisplayGroup('desc')->addAttribs(array('class'=>'tab-pane active'));

        $imageTableElement = $form->getElement('imageTable');
        $imageTablePrepend = '<button type="button" class="btn btn-default" id="imageTableLoadBtn"><span class="glyphicon glyphicon-save"></span></button>';
        $imageTableElement->setAttrib('prepend_btn', $imageTablePrepend);


        /*if ($this->getRequest()->isPost()){
            if ($form->isValid($this->_request->getPost())){

                $itemSaveForm = $this->saveFormData($form);

                $item = $this->_modelMapper->find($itemSaveForm->getId(), $this->_model);

                $categoryId = ($this->_request->getParam('category_id'))
                    ?$this->_request->getParam('category_id')
                    :$item->getCategoryId();

                $category = $this->_modelCategoriesMapper->find($categoryId, new Pipeline_Model_PipelineCategories());
                $fullPath = ($category)
                    ?$category->getPath().'/'.$item->getPath()
                    :$item->getPath();

                $item->setFullPath($fullPath);

                $this->_modelMapper->save($item);

                $this->_redirector->gotoRouteAndExit(array(
                    'module' => 'admin',
                    'controller' => 'pipeline-categories',
                    'action' => 'list',
                    'id'=>$item->getCategoryId()
                ), 'adminEdit', true);
            }

            $form->setDefaults($this->_request->getPost());
        }

        $this->view->form = $form;*/

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

        $form = $this->_forms['edit'];

        parent::editAction();

        $imageTableElement = $form->getElement('imageTable');
        $imageTablePrepend = '<button type="button" class="btn btn-default" id="imageTableLoadBtn"><span class="glyphicon glyphicon-save"></span></button>';
        $imageTableValue = $imageTableElement->getValue();

        if(!is_null($imageTableValue)){
            $imageTablePrepend .= '<a href="'.$imageTableValue.'" class="btn btn-default" target="_blank"><span class="glyphicon glyphicon-eye-open"></span></a>';
            $imageTablePrepend .= '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-trash"></span></button>';
        }
        $imageTableElement->setAttrib('prepend_btn', $imageTablePrepend);


        $this->setViewPipelineProperties();

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
            /*Zend_Navigation_Page_Mvc::factory(array(
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
            )),*/
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
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

    /**
     * @return $this
     */
    public function setViewPipelineProperties()
    {
        $itemId = $this->_request->getParam('id');

        $pipelineProperties = $this->_modelMapper->fetchPropertyRel($itemId);

        if(!empty($pipelineProperties)){
            $propertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();

            $viewProperties = array();
            /**@var $property Pipeline_Model_PipelineProperty*/
            foreach ($pipelineProperties as $property) {
                $propertyValues = $propertyValuesMapper->findByKey($itemId, $property->getId(), new Pipeline_Model_PipelinePropertyValues());
                $viewProperties[$property->getName()] = $propertyValues;
            }
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

        return $this;
    }

    /**
     * @param Zend_Form $form
     * @return Catalog_Model_Categories|Catalog_Model_Products|Manufacture_Model_Manufacture|Manufacture_Model_ManufactureCategories|Media_Model_Media|Media_Model_MediaCategories|null|Oil_Model_Oil|Oil_Model_OilCategories|Pages_Model_Pages|Pipeline_Model_Pipeline|Pipeline_Model_PipelineCategories
     * @throws Exception
     */
    public function saveFormData(Zend_Form $form)
    {

        $item = $this->_model;
        $item->setOptions($form->getValues());

        if($this->_request->getParam('contentMarkdown')){
            $context_html = Michelf\MarkdownExtra::defaultTransform($this->_request->getParam('contentMarkdown'));
            $item->setContentHtml($context_html);
        }

        $categoryId = ($this->_request->getParam('category_id'))
            ?$this->_request->getParam('category_id')
            :$item->getCategoryId();

        $category = $this->_modelCategoriesMapper->find($categoryId, new Pipeline_Model_PipelineCategories());
        $fullPath = ($category)
            ?$category->getPath().'/'.$item->getPath()
            :$item->getPath();

        $item->setFullPath($fullPath);

        $this->setMetaData($item);

        $this->getModelMapper()->save($item);

        if($item->getId() && $item->getId() != ''){
            $id = $item->getId();
        }
        else{
            $id = $this->getModelMapper()->getDbTable()->getAdapter()->lastInsertId();

        }
        $item = $this->getModelMapper()->find($id, $this->getModel());

        foreach ($form->getElements() as $key => $element) {
            if($element instanceof Zend_Form_Element_File && $element->isUploaded()){
                $item = $this->saveUploadFile($element, $item);
            }
        }

        return $item;
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
}











