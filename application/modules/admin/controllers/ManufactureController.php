<?php

include_once 'BaseController.php';

class ManufactureController extends BaseController
{
    /**
     * @var Manufacture_Model_Mapper_Manufacture
     */
    protected $_modelMapper = null;

    /**
     * @var Manufacture_Model_Manufacture
     */
    protected $_model = null;

    /**
     * @var Manufacture_Model_Mapper_ManufactureCategories
     */
    protected $_modelCategoriesMapper = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    protected $_count_item_on_page = null;

    protected $_upload_path = null;

    /**
     * @var Zend_Form[]
     *
     */
    protected $_forms = array();

    public function init()
    {
        $this->_modelMapper = new Manufacture_Model_Mapper_Manufacture();
        $this->_model = new Manufacture_Model_Manufacture();
        $this->_modelCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $this->_forms['edit'] = new Admin_Form_ManufactureEdit();
        $this->_upload_path = '/upload/manufacture/items/';

        $this->_redirector = $this->_helper->getHelper('Redirector');

        $this->_count_item_on_page = 10;

    }

    public function indexAction()
    {

        if($this->_request->getParam('category_id')){
            $category = $this->_modelCategoriesMapper
                ->find(
                    $this->_request->getParam('category_id'),
                    new Manufacture_Model_ManufactureCategories());
            
            $category && $this->view->assign('categoryName', $category->getTitle().' - ');

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
            'imageLoad'         => '/files/images/product/2012-05-22_foto_nv.jpg'
        ));
    }

    public function editAction()
    {
        if($this->_request->getParam('dataPage')){
            $dataPage = $this->_request->getParam('dataPage');
            $id = $this->_request->getParam('id');

            $item = $this->_modelMapper->find($id, $this->_model);
            $item->setOptions($dataPage);

            $categories = $this->_modelCategoriesMapper
                ->find($item->getCategoryId(), new Manufacture_Model_ManufactureCategories());

            $fullPath = $categories->getPath().'/'.$item->getPath();
            $item->setFullPath($fullPath);

            $this->setUploadImage($item);

            $markdown = $dataPage['contentMarkdown'];
            $context_html = Michelf\MarkdownExtra::defaultTransform($markdown);
            $item->setContentHtml($context_html);

            $this->_modelMapper->save($item);

            $this->_redirector->gotoUrlAndExit('/manufacture/'.$item->getFullPath());
        }

        parent::editAction();
    }
}







