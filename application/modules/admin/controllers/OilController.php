<?php

include_once 'BaseController.php';

class OilController extends BaseController
{

    /**
     * @var Oil_Model_Mapper_Oil
     *
     *
     *
     */
    protected $_modelMapper = null;

    /**
     * @var Oil_Model_Oil
     *
     */
    protected $_model = null;

    /**
     * @var Oil_Model_Mapper_OilCategories
     *
     */
    protected $_modelCategoriesMapper = null;

    /**
     * @var Zend_Form[];
     *
     */
    protected $_forms = array();

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     */
    protected $_redirector = null;

    /**
     * @var null
     *
     */
    protected $_upload_path = null;

    /**
     * @var null
     */
    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_modelMapper = new Oil_Model_Mapper_Oil();
        $this->_model = new Oil_Model_Oil();
        $this->_modelCategoriesMapper = new Oil_Model_Mapper_OilCategories();
        $this->_forms['edit'] = new Admin_Form_OilEdit();
        $this->_upload_path = '/upload/oil/items/';

        $this->_count_item_on_page = 10;
        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        $categoryId = $this->_request->getParam('category_id');
        if ($categoryId){
            $categoryMapper = new Oil_Model_Mapper_OilCategories();
            $category = $categoryMapper->find($categoryId, new Oil_Model_OilCategories());
            $category && $this->view->assign('categoryName', $category->getTitle(). ' - ');

            $this->view->assign('category_id', $this->_request->getParam('category_id'));
        }

        parent::indexAction();
    }

    public function editAction()
    {
        if($this->_request->getParam('dataPage')){

            $dataPage = $this->_request->getParam('dataPage');
            $id = $this->_request->getParam('id');

            $item = $this->_modelMapper->find($id, $this->_model);
            $item->setOptions($dataPage);

            $this->setUploadImage($item);

            if($markdown = $dataPage['contentMarkdown']){
                $context_html = Michelf\MarkdownExtra::defaultTransform($markdown);
                $item->setContentHtml($context_html);
            }

            $category = $this->_modelCategoriesMapper->find($item->getCategoryId(), new Oil_Model_OilCategories());
            $fullPath = ($category)
                ?$category->getPath().'/'.$item->getPath()
                :$item->getPath();

            $item->setFullPath($fullPath);

            $url = '/oil/'.$fullPath;

            $this->_modelMapper->save($item);

            $this->getRedirector()->gotoUrlAndExit($url);
        }
        parent::editAction();
    }

    public function addAction()
    {
        parent::addAction();

        $form = $form = $this->_forms['edit'];
        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'categoryId'    => (!$this->_request->getParam('id'))?0:$this->_request->getParam('id'),
            'imageLoad'         => '/files/images/product/2012-05-22_foto_nv.jpg',
        ));
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

        $category = $this->_modelCategoriesMapper->find($categoryId, new Oil_Model_OilCategories());
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

    public function seoAction()
    {
        // action body
    }


}













