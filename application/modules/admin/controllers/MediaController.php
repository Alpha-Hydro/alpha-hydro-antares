<?php

include_once 'BaseController.php';

class MediaController extends BaseController
{

    /**
     * @var Media_Model_Mapper_Media
     *
     *
     */
    protected $_modelMapper = null;

    /**
     * @var Media_Model_Mapper_MediaCategories
     *
     *
     */
    protected $_modelCategoriesMapper = null;

    /**
     * @var Media_Model_Media
     *
     *
     */
    protected $_model = null;

    /**
     * @var Zend_Form[]
     *
     *
     */
    protected $_forms = array();

    /**
     * @var null
     *
     */
    protected $_upload_path = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    public function init()
    {
        $this->_count_item_on_page = 10;

        $this->_modelMapper = new Media_Model_Mapper_Media();
        $this->_model = new Media_Model_Media();
        $this->_modelCategoriesMapper = new Media_Model_Mapper_MediaCategories();
        $this->_forms['edit'] = new Admin_Form_MediaEdit();
        $this->_upload_path = '/upload/media/items/';

        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        if($this->_request->getParam('category_id')){
            $category = $this->_modelCategoriesMapper
                ->find(
                    $this->_request->getParam('category_id'),
                    new Media_Model_MediaCategories());

            $category && $this->view->categoryName = $category->getName().' - ';

            $this->view->assign('category_id', $this->_request->getParam('category_id'));
        }

        parent::indexAction();
    }

    public function addAction()
    {
        parent::addAction();

        $form = $this->_forms['edit'];
        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'categoryId'    => (!$this->_request->getParam('id'))?0:$this->_request->getParam('id'),
            'author'        => $this->getUserAuth()->name,
        ));

        foreach ($form->getElements() as $key => $element) {
            if($element instanceof Zend_Form_Element_Image){
                $form->setDefault($element->getName(), '/files/images/product/2012-05-22_foto_nv.jpg');
            }
        }
    }

    public function editAction()
    {
        if($this->_request->getParam('dataPage')){
            $dataPage = $this->_request->getParam('dataPage');
            $id = $this->_request->getParam('id');

            $item = $this->_modelMapper->find($id, $this->_model);
            $item->setOptions($dataPage);

            $categories = $this->_modelCategoriesMapper
                ->find($item->getCategoryId(), new Media_Model_MediaCategories());

            $fullPath = $categories->getPath().'/'.$item->getPath();
            $item->setFullPath($fullPath);

            $this->setUploadImage($item);

            $markdown = $dataPage['contentMarkdown'];
            $context_html = Michelf\MarkdownExtra::defaultTransform($markdown);
            $item->setContentHtml($context_html);

            Zend_Debug::dump($item);

            $this->_modelMapper->save($item);

            $this->_redirector->gotoUrlAndExit('/media/'.$item->getFullPath());
        }

        parent::editAction();
    }

    public function sectionAction()
    {
        $jsonData = $this->_request->getParams();

        if($this->_request->getParam('itemId')){

            $item = $this->_modelMapper->find($this->_request->getParam('itemId'), $this->_model);
            if($item){
                $pagesMapper = new Pages_Model_Mapper_Pages();
                $page = $pagesMapper->find($this->_request->getParam('sectionId'), new Pages_Model_Pages());
                $sectionId = ($page)?$page->getId():0;

                $item->setSectionSiteId($sectionId);

                $this->_modelMapper->save($item);

                $jsonData['message'] = 'Ok';
            }
            $this->_helper->json->sendJson($jsonData);
            return;
        }
        
        if($this->_request->getParam('id')){
            $this->forward('index', null, null, array(
                'filter' => 'section_site_id',
                'val' => $this->_request->getParam('id')
            ));
        }

    }

    public function saveFormData(Zend_Form $form)
    {

        $item = $this->getModel();
        $item->setOptions($form->getValues());

        if($this->_request->getParam('contentMarkdown')){
            $context_html = Michelf\MarkdownExtra::defaultTransform($this->_request->getParam('contentMarkdown'));
            $item->setContentHtml($context_html);
        }

        $categoryId = ($this->_request->getParam('category_id'))
            ?$this->_request->getParam('category_id')
            :$item->getCategoryId();

        $category = $this->_modelCategoriesMapper->find($categoryId, new Media_Model_MediaCategories());
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

}











