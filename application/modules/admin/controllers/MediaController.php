<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class MediaController extends Zend_Controller_Action
{
    /**
     * @var Media_Model_Mapper_Media
     */
    protected $_modelMapper = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 10;

        $this->_modelMapper = new Media_Model_Mapper_Media();

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->initContext();
    }

    public function indexAction()
    {
        $request = $this->getRequest();
        $mediaMapper = new Media_Model_Mapper_Media();
        $mediaItems = $mediaMapper->fetchAll();

        if(!empty($mediaItems)){
            if(count($mediaItems) > $this->getCountItemOnPage()){
                $mediaPages = array_chunk($mediaItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page') > 0)
                    $currentPage = $request->getParam('page')-1;

                If($request->getParam('page') && $request->getParam('page') > count($mediaPages))
                    $currentPage = count($mediaPages)-1;

                $mediaItems = $mediaPages[$currentPage];
                $this->view->countPage = count($mediaPages);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->pages = $mediaItems;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить статью',
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
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_MediaEdit();

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
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId))
            return $this->_helper->redirector('index');

        $mediaMapper = new Media_Model_Mapper_Media();
        $media = $mediaMapper->find($itemId, new Media_Model_Media());

        if(is_null($media))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $mediaMapperCategory = new Media_Model_Mapper_MediaCategories();
        $mediaCategory = $mediaMapperCategory->find($media->getCategoryId(),
            new Media_Model_MediaCategories());

        $this->view->category = $mediaCategory;
        $this->view->item = $media;

        $form = new Admin_Form_MediaEdit();
        $dataPage = $media->getOptions();
        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }
        $imageValue = ($form->getValue('image') != '')
            ?$form->getValue('image')
            :'/files/images/product/2012-05-22_foto_nv.jpg';
        $form->setDefault('imageLoad', $imageValue);

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
                    'id' => $itemId,
                ),
            )),
            Zend_Navigation_Page_Uri::factory(array(
                'label' => 'Посмотреть на сайте',
                'uri' => '/media/'.$media->getFullPath().'/',
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

    public function deleteAction()
    {
        $request = $this->getRequest();
        $itemId = $request->getParam('id');

        if(is_null($itemId))
            return $this->_helper->redirector('index');

        $mediaMapper = new Media_Model_Mapper_Media();
        $media = $mediaMapper->find($itemId, new Media_Model_Media());

        if(is_null($media))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $media->setDeleted(1);
        $mediaMapper->save($media);

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
            $entry = $this->_modelMapper->find($id, new Media_Model_Media());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }

        return $this->_helper->json->sendJson($jsonData);
    }

    /**
     * @param null $count_item_on_page
     * @return MediaController
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

    private function _saveFormData(Admin_Form_MediaEdit $form)
    {
        //Zend_Debug::dump($form->getValues());
        $request = $this->getRequest();
        $media = new Media_Model_Media($form->getValues());

        $mediaCategoryMapper = new Media_Model_Mapper_MediaCategories();
        $mediaCategory = $mediaCategoryMapper->find($request->getParam('categoryId'),
            new Media_Model_MediaCategories());

        $fullPath = (!is_null($mediaCategory))
            ? $mediaCategory->getPath().'/'.$request->getParam('path')
            : $request->getParam('path');
        $media->setFullPath($fullPath);

        $file = $form->imageLoadFile->getFileInfo();
        if(!empty($file) && $file['imageLoadFile']['name'] != ''){
            $form->imageLoadFile->receive();
            $media->setImage('/upload/media/items/'.$file['imageLoadFile']['name']);
        }

        $markdown = $request->getParam('contentMarkdown');
        $context_html = Markdown::defaultTransform($markdown);
        $media->setContent($context_html);

        $metaTitle = $request->getParam('metaTitle');
        if(empty($metaTitle))
            $media->setMetaTitle($request->getParam('name'));

        $description = $request->getParam('sContent');
        $metaDescription = $request->getParam('metaDescription');
        if(empty($metaDescription) && !empty($description))
            $media->setMetaDescription($description);

        $mediaMapper = new Media_Model_Mapper_Media();
        $mediaMapper->save($media);

        return $this->_helper->redirector('index');
    }
}







