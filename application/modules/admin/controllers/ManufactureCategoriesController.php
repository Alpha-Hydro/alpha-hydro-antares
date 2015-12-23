<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class Admin_ManufactureCategoriesController extends Zend_Controller_Action
{
    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 10;
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategories = $manufactureCategoriesMapper->fetchAll();

        if(!empty($manufactureCategories)){
            if(count($manufactureCategories) > $this->getCountItemOnPage()){
                $manufactureCategoriesPages = array_chunk($manufactureCategories, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($manufactureCategoriesPages))
                    $currentPage = count($manufactureCategoriesPages)-1;

                $manufactureCategories = $manufactureCategoriesPages[$currentPage];
                $this->view->countPage = count($manufactureCategoriesPages);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->pages = $manufactureCategories;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'action' => 'add',
                'resource' => 'manufacture-categories',
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_ManufactureCategoriesEdit();

        $form->setDefaults(array(
            'parentId'    => 0,
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'imageLoad'     => '/files/images/product/2012-05-22_foto_nv.jpg',
        ));

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())) {

                $this->_saveFormData($form);
            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'action' => 'add',
                'resource' => 'manufacture-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'resource' => 'manufacture-categories',
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
            return $this->_helper->redirector('index');

        $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $page = $manufactureCategoriesMapper->find($itemId, new Manufacture_Model_ManufactureCategories());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->item = $page;

        $form = new Admin_Form_ManufactureCategoriesEdit();
        $dataPage = $page->getOptions();
        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }

        $imageValue = ($form->getValue('image') != '')
            ?$form->getValue('image')
            :'/files/images/product/2012-05-22_foto_nv.jpg';
        $form->setDefault('imageLoad', $imageValue);

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())) {
                $this->_saveFormData($form);
            }
            $form->setDefaults($form->getValues());
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'action' => 'add',
                'resource' => 'manufacture-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'action' => 'delete',
                'resource' => 'manufacture-categories',
                'params' => array(
                    'id' => $itemId,
                ),
            )),
            Zend_Navigation_Page_Uri::factory(array(
                'label' => 'Посмотреть на сайте',
                'uri' => '/manufacture/'.$page->getPath().'/',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'resource' => 'manufacture-categories',
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function deleteAction()
    {
        $request = $this->getRequest();
        $categoryId = $request->getParam('id');

        if(is_null($categoryId))
            return $this->_helper->redirector('index');

        $manufactureCategoryMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategory = $manufactureCategoryMapper->find($categoryId, new Manufacture_Model_ManufactureCategories());

        if(is_null($manufactureCategory))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $manufactureCategory->setDeleted(1);
        $manufactureCategoryMapper->save($manufactureCategory);

        return $this->_helper->redirector('index');
    }

    /**
     * @param null $count_item_on_page
     * @return Admin_ManufactureCategoriesController
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

    private function _saveFormData(Admin_Form_ManufactureCategoriesEdit $form)
    {
        $request = $this->getRequest();
        $manufactureCategory = new Manufacture_Model_ManufactureCategories($form->getValues());

        $file = $form->imageLoadFile->getFileInfo();
        if(!empty($file) && $file['imageLoadFile']['name'] !== ''){
            $form->imageLoadFile->receive();
            $manufactureCategory->setImage('/upload/manufacture/category/'.$file['imageLoadFile']['name']);
        }

        $markdown = $request->getParam('contentMarkdown');
        $context_html = Markdown::defaultTransform($markdown);
        $manufactureCategory->setContentHtml($context_html);

        $metaTitle = $request->getParam('metaTitle');
        if(empty($metaTitle))
            $manufactureCategory->setMetaTitle($request->getParam('title'));

        $description = $request->getParam('description');
        $metaDescription = $request->getParam('metaDescription');
        if(empty($metaDescription) && !empty($description))
            $manufactureCategory->setMetaDescription($description);

        $manufactureCategoryMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategoryMapper->save($manufactureCategory);

        return $this->_helper->redirector('index');
    }
}







