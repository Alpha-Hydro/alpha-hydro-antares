<?php

use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class PipelineCategoriesController extends Zend_Controller_Action
{
    /**
     * @var Pipeline_Model_Mapper_PipelineCategories
     */
    protected $_modelMapper = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 10;

        $this->_modelMapper = new Pipeline_Model_Mapper_PipelineCategories();

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->initContext();
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $pageMapper = new Pipeline_Model_Mapper_PipelineCategories();

        $select = $pageMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->order('sorting ASC');

        $pageItems = $pageMapper->fetchAll($select);

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
                'controller' => 'pipeline-categories',
                'action' => 'add',
                'resource' => 'pipeline-categories',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function listAction()
    {
        $this->forward('index', 'pipeline', 'admin', array('category_id' => $this->_getParam('id')));
        return;
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_PipelineCategoriesEdit();

        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'imageLoad'     => '/files/images/product/2012-05-22_foto_nv.jpg',
        ));

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
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'action' => 'add',
                'resource' => 'pipeline-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'resource' => 'pipeline-categories',
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

        $pipelineCategoryMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $page = $pipelineCategoryMapper->find($itemId, new Pipeline_Model_PipelineCategories());

        $this->view->item = $page;

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $form = new Admin_Form_PipelineCategoriesEdit();
        $form->setDefaults($page->getOptions());

        $imageValue = ($form->getValue('image') != '')
            ?$form->getValue('image')
            :'/files/images/product/2012-05-22_foto_nv.jpg';
        $form->setDefault('imageLoad', $imageValue);

        if($this->getRequest()->isPost()){
            if($form->isValid($request->getPost())){
                $this->_saveFormData($form);
            }
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить категорию',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'action' => 'add',
                'resource' => 'pipeline-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'action' => 'delete',
                'resource' => 'pipeline-categories',
                'params' => array(
                    'id' => $itemId,
                ),
            )),
            Zend_Navigation_Page_Uri::factory(array(
                'label' => 'Посмотреть на сайте',
                'uri' => '/pipeline/'.$page->getFullPath().'/',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pipeline-categories',
                'resource' => 'pipeline-categories',
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

        $pipelineCategoryMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $pipelineCategory = $pipelineCategoryMapper->find($categoryId, new Pipeline_Model_PipelineCategories());

        if(is_null($pipelineCategory))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $pipelineCategory->setDeleted(1);
        $pipelineCategoryMapper->save($pipelineCategory);

        return $this->_helper->redirector('index');
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
            $entry = $this->_modelMapper->find($id, new Pipeline_Model_PipelineCategories());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }


        return $this->_helper->json->sendJson($jsonData);
    }


    /**
     * @param null $count_item_on_page
     * @return PipelineCategoriesController
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

    private function _saveFormData(Admin_Form_PipelineCategoriesEdit $form)
    {
        $request = $this->getRequest();

        $item = new Pipeline_Model_PipelineCategories($form->getValues());
        $pipelineCategoryMapper = new Pipeline_Model_Mapper_PipelineCategories();

        $item->setFullPath($request->getParam('path'));

        if($request->getParam('parentId') !== 0){
            $parentCategory = $pipelineCategoryMapper
                ->find($request->getParam('parentId'), new Pipeline_Model_PipelineCategories());

            if(!is_null($parentCategory))
                $item->setFullPath($parentCategory->getFullPath().'/'.$request->getParam('path'));
        }

        $file = $form->imageLoadFile->getFileInfo();
        if(!empty($file) && $file['imageLoadFile']['name'] !== ''){
            $form->imageLoadFile->receive();
            $item->setImage('/upload/pipeline/category/'.$file['imageLoadFile']['name']);
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

        $pipelineCategoryMapper->save($item);

        return $this->_helper->redirector('index');
    }

}







