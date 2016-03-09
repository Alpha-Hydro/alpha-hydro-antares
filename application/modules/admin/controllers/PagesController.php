<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class PagesController extends Zend_Controller_Action
{

    protected $_page_id = null;

    /**
     * @var Pages_Model_Mapper_Pages
     *
     */
    protected $_pagesMapper = null;

    /**
     * @var Pages_Model_Pages
     *
     */
    protected $_page = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     */
    protected $_redirector = null;

    public function init()
    {
        $this->_pagesMapper = new Pages_Model_Mapper_Pages();

        $this->_redirector = $this->_helper->getHelper('Redirector');

        /*$ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('json', 'json');*/

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->initContext();
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

        $page = $this->_pagesMapper->find($pageId, new Pages_Model_Pages());

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

            $upload = new Zend_File_Transfer();
            $upload->setDestination(APPLICATION_ROOT.'/upload/pages')
                ->addValidator('Size', false, 1024000)
                ->addValidator('Extension', false, 'jpg,png,gif,svg');
            $upload->receive();

            Zend_Debug::dump($upload->getFileInfo('fileLoad'));

            /*if($request->getParam('dataPage')){
                $page->setOptions($request->getParam('dataPage'));
                $this->_pagesMapper->save($page);
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

                $this->_pagesMapper->save($newPage);
                $form->setDefaults($form->getValues());
            }*/
//            $this->_redirector->gotoSimpleAndExit('index');
//            $url = ($page->getPath() != 'home')? '/'.$page->getPath():'/';
//            $this->_redirector->gotoUrlAndExit($url);
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

        $page = $this->_pagesMapper->find($pageId, new Pages_Model_Pages());

        if ($this->getRequest()->isPost()){
            if($request->getParam('metaTitle'))
                $page->setMetaTitle($request->getParam('metaTitle'));

            if($request->getParam('metaDescription'))
                $page->setMetaDescription($request->getParam('metaDescription'));

            if($request->getParam('metaKeywords'))
                $page->setMetaKeywords($request->getParam('metaKeywords'));

            $this->_pagesMapper->save($page);
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

                return $this->_helper->redirector('index');
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
        $request = $this->getRequest();
        $pageId = $request->getParam('id');

        if(is_null($pageId))
            $this->_redirector->gotoSimpleAndExit('index');

        $page = $this->_pagesMapper->find($pageId, new Pages_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $page->setDeleted(1);
        $page->setActive(0);
        $this->_pagesMapper->save($page);

        $this->_redirector->gotoSimpleAndExit('index');
    }

    public function disabledAction()
    {
        $request = $this->getRequest();
        $pageId = $request->getParam('id');

        if(is_null($pageId))
            $this->_redirector->gotoSimpleAndExit('index');

        $page = $this->_pagesMapper->find($pageId, new Pages_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $page->setActive(0);
        $this->_pagesMapper->save($page);

        $url = ($page->getPath() != 'home')? '/'.$page->getPath():'/';
        $this->_redirector->gotoUrlAndExit($url);
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
            $this->_page = $this->_pagesMapper->find($pageId, new Pages_Model_Pages());

            if(!is_null($this->_page))
                $jsonData = array_merge($jsonData, $this->_page->getOptions());
        }


        return $this->_helper->json->sendJson($jsonData);
    }

    /**
     * @param null $page_id
     * @return PagesController
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
     */
    public function getPageId()
    {
        return $this->_page_id;
    }

}









