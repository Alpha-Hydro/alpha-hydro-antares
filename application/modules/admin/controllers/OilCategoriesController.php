<?php

use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class OilCategoriesController extends Zend_Controller_Action
{

    /**
     * @var Oil_Model_Mapper_OilCategories
     */
    protected $_modelMapper = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    /**
     * @var Admin_Form_OilCategoriesEdit;
     */
    protected $_form = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->setCountItemOnPage(10);
        $this->_modelMapper = new Oil_Model_Mapper_OilCategories();
        $this->_form = new Admin_Form_OilCategoriesEdit();
        $this->_redirector = $this->_helper->getHelper('Redirector');

    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $select = $this->_modelMapper->getDbTable()->select();
        $select->order('sorting ASC');

        $pageItems = $this->_modelMapper->fetchAll($select);

        if(!empty($pageItems)){
            if(count($pageItems)> $this->getCountItemOnPage()){

                $pages = array_chunk($pageItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($pages))
                    $currentPage = count($pages)-1;

                $pageItems = $pages[$currentPage];
                $this->view->countPage = count($pages);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->pages = $pageItems;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'oil-categories',
                'action' => 'add',
                'resource' => 'oil-categories',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;

    }

    public function addAction()
    {
        $request = $this->getRequest();

        $this->_form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'imageLoad'     => '/files/images/product/2012-05-22_foto_nv.jpg',
        ));

        if ($this->getRequest()->isPost()){
            if ($this->_form->isValid($request->getPost())){
                $this->_saveFormData($this->_form);
            }

            $this->_form->setDefaults($request->getPost());
            $this->view->formData = $this->_form->getValues();
        }

        $this->view->form = $this->_form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'oil-categories',
                'action' => 'add',
                'resource' => 'oil-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'oil-categories',
                'resource' => 'oil-categories',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function editAction()
    {
        //Zend_Debug::dump($this->_request->getParams());

        $itemId = $this->_request->getParam('id');
        if(is_null($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $page = $this->_modelMapper->find($itemId, new Oil_Model_OilCategories());

        $this->view->item = $page;

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->_form->setDefaults($page->getOptions());

        $imageValue = ($this->_form->getValue('image') != '')
            ?$this->_form->getValue('image')
            :'/files/images/product/2012-05-22_foto_nv.jpg';

        $this->_form->setDefault('imageLoad', $imageValue);

        if($this->getRequest()->isPost()){
            if($this->_form->isValid($this->getRequest()->getPost())){
                $this->_saveFormData($this->_form);
            }
        }

        $this->view->form = $this->_form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'oil-categories',
                'action' => 'add',
                'resource' => 'oil-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить',
                'module' => 'admin',
                'controller' => 'oil-categories',
                'action' => 'delete',
                'resource' => 'oil-categories',
                'params' => array(
                    'id' => $itemId,
                ),
            )),
            Zend_Navigation_Page_Uri::factory(array(
                'label' => 'Посмотреть на сайте',
                'uri' => '/oil/'.$page->getFullPath().'/',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'oil-categories',
                'resource' => 'oil-categories',
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

        $category = $this->_modelMapper->find($itemId, new Oil_Model_OilCategories());
        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $deleted = ($category->getDeleted() != 0)?0:1;

        $category->setDeleted($deleted);
        $this->_modelMapper->save($category);

        $this->_redirector->gotoSimpleAndExit('index');
    }

    public function enableAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $item = $this->_modelMapper->find($itemId, new Oil_Model_OilCategories());

        $active = ($item->getActive() != 0)?0:1;
        $item->setActive($active);

        $this->_modelMapper->save($item);

        $this->_redirector->gotoSimpleAndExit('index');
    }

    public function listAction()
    {
        $this->forward('index', 'oil', 'admin', array('category_id' => $this->_getParam('id')));
        return;
    }

    public function jsonAction()
    {
        $id = $this->_request->getParam('id');

        $jsonData = array(
            $this->_request->getControllerKey() => $this->_request->getControllerName(),
            'role' => Zend_Auth::getInstance()->getIdentity()->role
        );

        if($id){
            $entry = $this->_modelMapper->find($id, new Oil_Model_OilCategories());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }


        return $this->_helper->json->sendJson($jsonData);
    }

    /**
     * @param null $count_item_on_page
     * @return OilCategoriesController
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

    private function _saveFormData(Admin_Form_OilCategoriesEdit $form)
    {
        $request = $this->getRequest();

        $item = new Oil_Model_OilCategories($form->getValues());

        $item->setFullPath($request->getParam('path'));

        if($request->getParam('parentId') !== 0){
            $parentCategory = $this->_modelMapper
                ->find($request->getParam('parentId'), new Oil_Model_OilCategories());

            if(!is_null($parentCategory))
                $item->setFullPath($parentCategory->getFullPath().'/'.$request->getParam('path'));
        }


        if($form->imageLoadFile->isUploaded()){
            //Zend_Debug::dump($form->imageLoadFile->getFileInfo());
            $form->imageLoadFile->receive();
            $file = $form->imageLoadFile->getFileInfo();
            $item->setImage('/upload/oil/categories/'.$file['imageLoadFile']['name']);
        }

        $markdown = $request->getParam('contentMarkdown');
        $context_html = Markdown::defaultTransform($markdown);
        $item->setContentHtml($context_html);

        $metaTitle = $request->getParam('metaTitle');
        if(empty($metaTitle))
            $item->setMetaTitle($request->getParam('title'));

        $description = $request->getParam('description');
        $metaDescription = $request->getParam('metaDescription');
        if(empty($metaDescription) && !empty($description))
            $item->setMetaDescription($description);

        $keywords = $request->getParam('metaKeywords');
        if(empty($keywords))
            $item->setMetaKeywords($request->getParam('title'));

        $item->setCreateDate(date("Y-m-d H:i:s"));

        //Zend_Debug::dump($item);

        $this->_modelMapper->save($item);

        $this->_redirector->gotoSimpleAndExit('index');
    }
}











