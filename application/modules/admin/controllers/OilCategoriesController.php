<?php

use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class OilCategoriesController extends Zend_Controller_Action
{

    /**
     * @var Oil_Model_Mapper_OilCategories
     */
    protected $_modelMapper = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->setCountItemOnPage(10);
        $this->_modelMapper = new Oil_Model_Mapper_OilCategories();

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->initContext();
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $select = $this->_modelMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->order('sorting ASC');

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
        $form = new Admin_Form_OilCategoriesEdit();

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
        // action body
    }

    public function deleteAction()
    {
        // action body
    }

    public function listAction()
    {
        // action body
    }

    public function jsonAction()
    {
        // action body
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

        $keywords = $request->getParam('metaKeywords');
        if(empty($keywords))
            $item->setMetaKeywords($request->getParam('title'));

        $item->setCreateDate(date("Y-m-d H:i:s"));

        //Zend_Debug::dump($item);

        $this->_modelMapper->save($item);

        return $this->_helper->redirector('index');
    }
}











