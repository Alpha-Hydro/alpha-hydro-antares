<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class PagesController extends Zend_Controller_Action
{
    protected $_page_id = null;

    /**
     * @var Pages_Model_Mapper_Pages
     */
    protected $_pagesMapper = null;

    /**
     * @var Pages_Model_Pages
     */
    protected $_page = null;


    public function init()
    {
        $this->_pagesMapper = new Pages_Model_Mapper_Pages();

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
            return $this->_helper->redirector('index');

        $pagesMapper = new Default_Model_Mapper_Pages();
        $page = $pagesMapper->find($pageId, new Default_Model_Pages());

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

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())) {
                $newPage = new Default_Model_Pages($form->getValues());

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

                $pagesMapper->save($newPage);

                return $this->_helper->redirector('index');

            }

            $form->setDefaults($form->getValues());
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
            return $this->_helper->redirector('index');

        $pagesMapper = new Default_Model_Mapper_Pages();
        $page = $pagesMapper->find($pageId, new Default_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $page->setDeleted(1);
        $pagesMapper->save($page);

        return $this->_helper->redirector('index');
    }

    public function jsonAction()
    {
        $request = $this->getRequest();
        $pageId = $request->getParam('id');

        $jsonData = array();

        if($pageId){
            $this->_page = $this->_pagesMapper->find($pageId, new Pages_Model_Pages());
            $jsonData = $this->_page->getOptions();
        }


        return $this->_helper->json->sendJson($jsonData);
    }

    /**
     * @param null $page_id
     * @return PagesController
     */
    public function setPageId($page_id)
    {
        $this->_page_id = $page_id;
        return $this;
    }

    /**
     * @return null
     */
    public function getPageId()
    {
        return $this->_page_id;
    }

}







