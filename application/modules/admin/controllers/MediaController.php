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

    public function init()
    {
        $this->_count_item_on_page = 10;

        $this->_modelMapper = new Media_Model_Mapper_Media();
        $this->_model = new Media_Model_Media();
        $this->_modelCategoriesMapper = new Media_Model_Mapper_MediaCategories();
        $this->_forms['edit'] = new Admin_Form_MediaEdit();

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
        $form = $this->getForm('edit');

        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'author'        => $this->getUserAuth()->name,
        ));

        foreach ($form->getElements() as $key => $element) {
            if($element instanceof Zend_Form_Element_Image){
                $form->setDefault($element->getName(), '/files/images/product/2012-05-22_foto_nv.jpg');
            }
        }

        if ($this->getRequest()->isPost()){
            if ($form->isValid($this->_request->getPost())){

                $itemSaveForm = $this->saveFormData($form);

                $item = $this->_modelMapper->find($itemSaveForm->getId(), $this->_model);

                $item->setContent('');

                $categoryId = ($this->_request->getParam('category_id'))
                    ?$this->_request->getParam('category_id')
                    :$item->getCategoryId();

                $category = $this->_modelCategoriesMapper->find($categoryId, new Media_Model_MediaCategories());
                $fullPath = ($category)
                    ?$category->getPath().'/'.$item->getPath()
                    :$item->getPath();

                $item->setFullPath($fullPath);

                $this->_modelMapper->save($item);

                if($this->_request->getControllerName() != strtolower($this->getNameModule())){
                    $this->getRedirector()->gotoSimpleAndExit('index');
                }
                else{
                    $this->getRedirector()->gotoUrlAndExit('/admin/'.strtolower($this->getNameModule()).'-categories/list/'.$item->getCategoryId().'/');
                }
            }

            $form->setDefaults($this->_request->getPost());
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить товар',
                'module' => 'admin',
                'controller' => 'media',
                'action' => 'add',
                'resource' => 'media',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Категории',
                'module' => 'admin',
                'controller' => 'media-categories',
                'resource' => 'media-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отмена',
                'module' => 'admin',
                'controller' => 'media',
                'resource' => 'media',
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function editAction()
    {
        parent::editAction();

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить товар',
                'module' => 'admin',
                'controller' => 'media',
                'action' => 'add',
                'resource' => 'media',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить',
                'module' => 'admin',
                'controller' => 'media',
                'action' => 'delete',
                'resource' => 'media',
                'params' => array(
                    'id' => $this->_request->getParam('id'),
                ),
            )),
            Zend_Navigation_Page_Uri::factory(array(
                'label' => 'Посмотреть на сайте',
                'uri' => '/media/'.$this->_modelMapper
                        ->find(
                            $this->_request->getParam('id'),
                            $this->_model)
                        ->getFullPath().'/',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отмена',
                'module' => 'admin',
                'controller' => 'media',
                'resource' => 'media',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
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
        }
        
        if($this->_request->getParam('id')){
            $this->forward('index', null, null, array(
                'filter' => 'section_site_id',
                'val' => $this->_request->getParam('id')
            ));
        }

    }

}











