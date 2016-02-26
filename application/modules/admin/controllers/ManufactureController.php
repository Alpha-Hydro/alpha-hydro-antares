<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class ManufactureController extends Zend_Controller_Action
{
    /**
     * @var Manufacture_Model_Mapper_Manufacture
     */
    protected $_modelMapper = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_modelMapper = new Manufacture_Model_Mapper_Manufacture();

        $this->_count_item_on_page = 10;

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->initContext();
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
        $manufactureItems = $manufactureMapper->fetchAll();

        if(!empty($manufactureItems)){
            if(count($manufactureItems) > $this->getCountItemOnPage()){
                $manufacturePages = array_chunk($manufactureItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($manufacturePages))
                    $currentPage = count($manufacturePages)-1;

                $manufactureItems = $manufacturePages[$currentPage];
                $this->view->countPage = count($manufacturePages);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->pages = $manufactureItems;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить товар',
                'module' => 'admin',
                'controller' => 'manufacture',
                'action' => 'add',
                'resource' => 'manufacture',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Категории',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'resource' => 'manufacture-categories',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_ManufactureEdit();

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
                'controller' => 'manufacture',
                'action' => 'add',
                'resource' => 'manufacture',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Категории',
                'module' => 'admin',
                'controller' => 'manufacture-categories',
                'resource' => 'manufacture-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отмена',
                'module' => 'admin',
                'controller' => 'manufacture',
                'resource' => 'manufacture',
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

        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
        $manufacture = $manufactureMapper->find($itemId, new Manufacture_Model_Manufacture());

        if(is_null($manufacture))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $manufactureMapperCategory = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategory = $manufactureMapperCategory->find($manufacture->getCategoryId(), new Manufacture_Model_ManufactureCategories());

        $this->view->category = $manufactureCategory;
        $this->view->item = $manufacture;

        $form = new Admin_Form_ManufactureEdit();
        $dataPage = $manufacture->getOptions();
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
                'controller' => 'manufacture',
                'action' => 'add',
                'resource' => 'manufacture',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить',
                'module' => 'admin',
                'controller' => 'manufacture',
                'action' => 'delete',
                'resource' => 'manufacture',
                'params' => array(
                    'id' => $itemId,
                ),
            )),
            Zend_Navigation_Page_Uri::factory(array(
                'label' => 'Посмотреть на сайте',
                'uri' => '/manufacture/'.$manufacture->getFullPath().'/',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отмена',
                'module' => 'admin',
                'controller' => 'manufacture',
                'resource' => 'manufacture',
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

        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
        $manufacture = $manufactureMapper->find($itemId, new Manufacture_Model_Manufacture());

        if(is_null($manufacture))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $manufacture->setDeleted(1);
        $manufactureMapper->save($manufacture);

        return $this->_helper->redirector('index');
    }

    public function jsonAction()
    {
        $request = $this->getRequest();
        $id = $request->getParam('id');

        $jsonData = array($request->getControllerKey() => $request->getControllerName());

        if($id){
            $entry = $this->_modelMapper->find($id, new Manufacture_Model_Manufacture());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }

        return $this->_helper->json->sendJson($jsonData);
    }

    /**
     * @param null $count_item_on_page
     * @return Admin_ManufactureController
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

    /**
     * @param Admin_Form_ManufactureEdit $form
     * @return mixed
     */
    private function _saveFormData(Admin_Form_ManufactureEdit $form)
    {
        $request = $this->getRequest();
        $manufacture = new Manufacture_Model_Manufacture($form->getValues());
        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();

        $manufactureMapperCategory = new Manufacture_Model_Mapper_ManufactureCategories();
        $manufactureCategory = $manufactureMapperCategory->find($request->getParam('categoryId'),
            new Manufacture_Model_ManufactureCategories());

        $fullPath = (!is_null($manufactureCategory))
            ?$manufactureCategory->getPath().'/'.$this->getParam('path')
            :$this->getParam('path');
        $manufacture->setFullPath($fullPath);

        $file = $form->imageLoadFile->getFileInfo();
        if(!empty($file) && $file['imageLoadFile']['name'] != ''){
            $form->imageLoadFile->receive();
            $manufacture->setImage('/upload/manufacture/items/'.$file['imageLoadFile']['name']);
        }

        $markdown = $request->getParam('contentMarkdown');
        $context_html = Markdown::defaultTransform($markdown);
        $manufacture->setContentHtml($context_html);

        $metaTitle = $request->getParam('metaTitle');
        if(empty($metaTitle))
            $manufacture->setMetaTitle($request->getParam('title'));

        $description = $request->getParam('description');
        $metaDescription = $request->getParam('metaDescription');
        if(empty($metaDescription) && !empty($description))
            $manufacture->setMetaDescription($description);

        $manufactureMapper->save($manufacture);

        return $this->_helper->redirector('index');
    }

}







