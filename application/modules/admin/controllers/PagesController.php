<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class PagesController extends Zend_Controller_Action
{

    protected $_page_id = null;

    /**
     * @var Pages_Model_Mapper_Pages
     *
     *
     *
     */
    protected $_modelMapper = null;

    /**
     * @var Pages_Model_Pages
     *
     *
     *
     */
    protected $_page = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     *
     *
     */
    protected $_redirector = null;

    public function init()
    {
        $this->_modelMapper = new Pages_Model_Mapper_Pages();

        $this->_redirector = $this->_helper->getHelper('Redirector');

    }

    public function indexAction()
    {
        $pagesMapper = new Default_Model_Mapper_Pages();
        $this->view->pages = $pagesMapper->fetchAll();

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить раздел',
                'module' => 'admin',
                'controller' => 'pages',
                'action' => 'add',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function editAction()
    {
        $request = $this->getRequest();
        $pageId = $request->getParam('id');

        if(is_null($pageId))
            $this->_redirector->gotoSimpleAndExit('index');

        $page = $this->_modelMapper->find($pageId, new Pages_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->page = $page;

        $form = new Admin_Form_PageEdit();
        $dataPage = $page->getOptions();
        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }
        $imageValue = ($form->getValue('image') != '')
            ?$form->getValue('image')
            :'/files/images/product/2012-05-22_foto_nv.jpg';
        $form->setDefault('imageLoad', $imageValue);

        if ($request->isPost()){

            if($request->getParam('dataPage')){

                $dataPage = $request->getParam('dataPage');
                $page->setOptions($dataPage);

                $upload = new Zend_File_Transfer();
                if($upload->isUploaded()){
                    $destinationPath = UPLOAD_DIR.'/pages/'.$request->getParam('id');

                    if(!file_exists($destinationPath))
                        mkdir($destinationPath, 0755);

                    $upload->setDestination($destinationPath)
                        ->addValidator('Size', false, 1024000)
                        ->addValidator('Extension', false, 'jpg,png,gif,svg');
                    $upload->receive();

                    $imageFile = $upload->getFileInfo('fileLoad');
                    $page->setImage('/upload/pages/'.$request->getParam('id').'/'.$imageFile['fileLoad']['name']);
                }

                if($dataPage['contentHtml'] === '' && $dataPage['contentMarkdown'] != ''){
                    $markdown = $dataPage['contentMarkdown'];
                    $context_html = Markdown::defaultTransform($markdown);
                    $page->setContentHtml($context_html);
                }

                $this->_modelMapper->save($page);
            }

            if ($form->isValid($request->getPost())) {
                $newPage = new Pages_Model_Pages($form->getValues());

                $file = $form->imageLoadFile->getFileInfo();
                if(!empty($file) && $file['imageLoadFile']['name'] != ''){
                    $form->imageLoadFile->receive();
                    $newPage->setImage('/upload/pages/'.$file['imageLoadFile']['name']);
                }

                $markdown = $request->getParam('contentMarkdown');
                $context_html = Markdown::defaultTransform($markdown);
                $newPage->setContentHtml($context_html);

                $description = $request->getParam('description');
                $metaDescription = $request->getParam('metaDescription');
                if(empty($metaDescription) && !empty($description))
                    $newPage->setMetaDescription($description);

                $this->_modelMapper->save($newPage);
                $form->setDefaults($form->getValues());
            }

//            $this->_redirector->gotoSimpleAndExit('index');
            $url = ($page->getPath() != 'home')? '/'.$page->getPath():'/';
            $this->_redirector->gotoUrlAndExit($url);
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Новый раздел',
                'module' => 'admin',
                'controller' => 'pages',
                'action' => 'add',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить раздел',
                'module' => 'admin',
                'controller' => 'pages',
                'action' => 'delete',
                'params' => array(
                    'id' => $pageId,
                ),
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pages',
                'action' => 'index',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function seoAction()
    {
        $request = $this->getRequest();
        $pageId = $request->getParam('id');

        if(is_null($pageId))
            $this->_redirector->gotoSimpleAndExit('index');

        $page = $this->_modelMapper->find($pageId, new Pages_Model_Pages());

        if ($this->getRequest()->isPost()){
            if($this->getRequest()->getParam('dataFormSeo')){
                $dataFormSeo = $this->getRequest()->getParam('dataFormSeo');
                $page->setOptions($dataFormSeo);
                $this->_modelMapper->save($page);
            }
        }

        $url = ($page->getPath() != 'home')? '/'.$page->getPath():'/';
        $this->_redirector->gotoUrlAndExit($url);
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_PageEdit();

        $form->setDefaults(array(
            'sorting'   => 0,
            'active'    => 1,
            'deleted'   => 0,
            'imageLoad' => '/files/images/product/2012-05-22_foto_nv.jpg',
        ));

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())) {

                $page = new Default_Model_Pages($form->getValues());

                $file = $form->imageLoadFile->getFileInfo();
                if(!empty($file) && $file['imageLoadFile']['name'] != ''){
                    $form->imageLoadFile->receive();
                    $page->setImage('/upload/pages/'.$file['imageLoadFile']['name']);
                }

                $markdown = $request->getParam('contentMarkdown');
                $context_html = Markdown::defaultTransform($markdown);
                $page->setContentHtml($context_html);

                $metaTitle = $request->getParam('metaTitle');
                if(empty($metaTitle))
                    $page->setMetaTitle($request->getParam('title'));

                $description = $request->getParam('description');
                $metaDescription = $request->getParam('metaDescription');
                if(empty($metaDescription) && !empty($description))
                    $page->setMetaDescription($description);

                $pagesMapper = new Default_Model_Mapper_Pages();
                $pagesMapper->save($page);

                $this->_redirector->gotoSimpleAndExit('index', 'admin');
            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Новый раздел',
                'module' => 'admin',
                'controller' => 'pages',
                'action' => 'add',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'pages',
                'action' => 'index',
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

        $item = $this->_modelMapper->find($itemId, new Pages_Model_Pages());

        $deleted = ($item->getDeleted() != 0)?0:1;
        $item->setDeleted($deleted);

        $this->_modelMapper->save($item);

        $url = ($item->getPath() != 'home')? '/'.$item->getPath():'/';
        $this->_redirector->gotoUrlAndExit('/admin/pages/');
    }

    public function enableAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $item = $this->_modelMapper->find($itemId, new Pages_Model_Pages());

        $active = ($item->getActive() != 0)?0:1;
        $item->setActive($active);

        $this->_modelMapper->save($item);

        $url = ($item->getPath() != 'home')? '/'.$item->getPath():'/';
        $this->_redirector->gotoUrlAndExit('/admin/pages/');
    }

    public function disabledAction()
    {
        $this->forward('enable');
    }


    public function enabledAction()
    {
        $this->forward('enable');
    }

    public function jsonAction()
    {
        $request = $this->getRequest();
        $pageId = $request->getParam('id');

        $jsonData = array(
            $request->getControllerKey() => $request->getControllerName(),
            'role' => Zend_Auth::getInstance()->getIdentity()->role
        );

        if($pageId){
            $this->_page = $this->_modelMapper->find($pageId, new Pages_Model_Pages());

            if(!is_null($this->_page))
                $jsonData = array_merge($jsonData, $this->_page->getOptions());
        }


        return $this->_helper->json->sendJson($jsonData);
    }

    /**
     * @param null $page_id
     * @return PagesController
     *
     *
     *
     */
    public function setPageId($page_id)
    {
        $this->_page_id = $page_id;
        return $this;
    }

    /**
     * @return null
     *
     *
     *
     */
    public function getPageId()
    {
        return $this->_page_id;
    }
}













