<?php

class BaseController extends Zend_Controller_Action
{
    /**
     * @var Zend_Form[]
     */
    protected $_forms = array();

    /**
     * @var null
     */
    protected $_modelMapper = null;

    /**
     * @var null
     */
    protected $_model = null;

    /**
     * @var null
     */
    protected $_modelCategoriesMapper = null;

    /**
     * @var null
     */
    protected $_count_item_on_page = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     */
    protected $_redirector = null;

    /**
     * @var Zend_Auth
     */
    protected $_userAuth;

    /**
     * @var null
     */
    protected $_nameModule = null;

    /**
     * @var null
     */
    protected $_upload_path = null;

    /*public function init()
    {
    }*/

    public function indexAction()
    {
        $cache = Zend_Registry::get('cache');
        $cacheName = 'Admin_'.$this->_getNamespace();

        /**
         * @var $select Zend_Db_Table_Select;
         */
        $select = $this->getModelMapper()->getDbTable()->select();

        if($this->_request->getParam('filter') && $this->_request->getParam('val')){
            $colsTable = $this->getModelMapper()->getDbTable()->info('cols');
            if(in_array($this->_request->getParam('filter'), $colsTable)){
                $select->where(
                    $this->_request->getParam('filter').'= ?',
                    $this->_request->getParam('val')
                );
                $cacheName .= '_'.$this->_request->getParam('filter').'_'.$this->_request->getParam('val');
            }
        }

        if($this->_request->getParam('category_id')){
            $select->where('category_id = ?', $this->_request->getParam('category_id'));
            $cacheName .= '_'.$this->_request->getParam('category_id');
        }

        if(!$pageItems = $cache->load($cacheName)){
            $pageItems = $this->getModelMapper()->fetchAll($select);

            $cache->save($pageItems, $cacheName, array('admin', $this->getNameModule(), $this->_getNamespace()));
        }

        if(!empty($pageItems)){
            $pageItems = $this->setPaginationPage($pageItems);
        }

        $this->view->assign('pages', $pageItems);
    }

    public function listAction()
    {
        $editUrlOptions = array(
            'module' => 'admin',
            'controller' => $this->_request->getControllerName(),
            'action' => 'edit',
            'id' => $this->_request->getParam('id'),
        );

        $colsTable = $this->getModelMapper()->getDbTable()->info('cols');
        $item = $this->getModelMapper()->find($this->_request->getParam('id'), $this->getModel());

        $uri = (in_array('full_path', $colsTable))?$item->getFullPath():$item->getPath();

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'На сайт',
                'uri' => '/'.strtolower($this->getNameModule()).'/'.$uri.'/'
            )),
        );
        $containerNav = new Zend_Navigation($config);
        $this->view->assign(array(
            'editUrlOptions' => $editUrlOptions,
            'container_nav' => $containerNav
        ));

        $this->forward('index', strtolower($this->getNameModule()), 'admin', array('category_id' => $this->_getParam('id')));
        return;
    }

    public function addAction()
    {
        $form = $this->getForm('edit');

        $url = $this->_request->getServer('HTTP_REFERER');
        $form->addElement('hidden','currentUrl');
        $element = $form->getElement('currentUrl');
        $element->setValue($url);
        $form->getDisplayGroup('basic')->addElement($element);

        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
        ));

        foreach ($form->getElements() as $key => $element) {
            if($element instanceof Zend_Form_Element_Image){
                $form->setDefault($element->getName(), '/files/images/product/2012-05-22_foto_nv.jpg');
            }
        }

        if ($this->getRequest()->isPost()){
            if ($form->isValid($this->_request->getPost())){
                $item = $this->saveFormData($form);

                $this->clearCache($this->_getNamespace());
                $this->getRedirector()->gotoUrlAndExit($this->_request->getParam('currentUrl'));
            }

            $form->setDefaults($this->_request->getPost());
        }

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'uri' => $url
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $this->view->assign(array(
            'form' => $form,
            'container_nav' => $containerNav
        ));
    }

    public function editAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId))
            $this->getRedirector()->gotoSimpleAndExit('index');

        $page = $this->getModelMapper()->find($itemId, $this->getModel());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        //$this->view->item = $page;

        $form = $this->getForm('edit');

        $url = $this->_request->getServer('HTTP_REFERER');
        $form->addElement('hidden','currentUrl');
        $element = $form->getElement('currentUrl');
        $element->setValue($url);
        $form->getDisplayGroup('basic')->addElement($element);

        $dataPage = $page->getOptions();
        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }

        foreach ($form->getElements() as $key => $element) {
            if($element instanceof Zend_Form_Element_Image){
                $imageValue = ($form->getValue($element->getAttrib('data-input')) != '')
                    ?$form->getValue($element->getAttrib('data-input'))
                    :'/files/images/product/2012-05-22_foto_nv.jpg';

                $form->setDefault($element->getName(), $imageValue);
            }
        }

        if ($this->getRequest()->isPost()){

            if ($form->isValid($this->getRequest()->getPost())) {
                $item = $this->saveFormData($form);

                $this->clearCache($this->_getNamespace());
                $this->getRedirector()->gotoUrlAndExit($this->_request->getParam('currentUrl'));
            }

            $form->setDefaults($form->getValues());
        }

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'uri' => $url
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $this->view->assign(array(
            'item' => $page,
            'form' => $form,
            'container_nav' => $containerNav
        ));
    }

    public function deleteAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $item = $this->getModelMapper()->find($itemId, $this->getModel());
        if(is_null($item))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $deleted = ($item->getDeleted() != 0)?0:1;

        $item->setDeleted($deleted);
        $this->getModelMapper()->save($item);
        
        $this->clearCache($this->_getNamespace());

        $url = $this->_request->getServer('HTTP_REFERER');
        $this->getRedirector()->gotoUrlAndExit($url);
    }

    public function enableAction()
    {
        $itemId = $this->_request->getParam('id');

        if(empty($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $item = $this->getModelMapper()->find($itemId, $this->getModel());
        if(is_null($item))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $enabled = ($item->getActive() != 0)?0:1;

        $item->setActive($enabled);
        $this->getModelMapper()->save($item);

        $this->clearCache($this->_getNamespace());

        $url = $this->_request->getServer('HTTP_REFERER');
        $this->getRedirector()->gotoUrlAndExit($url);

    }

    public function jsonAction()
    {
        $id = $this->_request->getParam('id');

        $jsonData = array(
            $this->_request->getControllerKey() => $this->_request->getControllerName(),
            'role' => Zend_Auth::getInstance()->getIdentity()->role
        );

        if($id){
            $entry = $this->getModelMapper()->find($id, $this->getModel());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }

        return $this->_helper->json->sendJson($jsonData);
    }

    /**
     * @param $pagesItems
     * @return mixed
     */
    public function setPaginationPage(&$pagesItems)
    {


        if(count($pagesItems) > $this->getCountItemOnPage()){

            $pages = array_chunk($pagesItems, $this->getCountItemOnPage());

            $currentPage = 0;

            if($this->_request->getParam('page') && $this->_request->getParam('page')>0)
                $currentPage = $this->_request->getParam('page')-1;

            if($this->_request->getParam('page') && $this->_request->getParam('page')>count($pages))
                $currentPage = count($pages)-1;

            $pagesItems = $pages[$currentPage];

            $this->view->assign(array(
                'countPage' => count($pages),
                'currentPage' => $currentPage+1
            ));
        }
        
        return $pagesItems;
    }

    /**
     * Get a Form
     *
     * @param string $name
     * @return Zend_Form
     */
    public function getForm($name)
    {
        if (!isset($this->_forms[$name])) {
            $class = join('_', array(
                ucfirst($this->_request->getModuleName()),
                'Form',
                $this->_getNamespace().ucfirst($name)
            ));
            $this->_forms[$name] = new $class();
        }
        return $this->_forms[$name];
    }

    /**
     * @return Catalog_Model_Mapper_Categories | Catalog_Model_Mapper_Products | Manufacture_Model_Mapper_ManufactureCategories | Manufacture_Model_Mapper_Manufacture | Pages_Model_Mapper_Pages | Pipeline_Model_Mapper_PipelineCategories | Pipeline_Model_Mapper_Pipeline | Oil_Model_Mapper_OilCategories | Oil_Model_Mapper_Oil | Media_Model_Mapper_MediaCategories | Media_Model_Mapper_Media
     */
    public function getModelMapper()
    {
        if(is_null($this->_modelMapper)){
            $class = join('_', array(
                $this->getNameModule(),
                'Model_Mapper',
                $this->_getNamespace()
            ));

            if(!class_exists($class, false))
                return null;

            $this->_modelMapper = new $class();
        }
        return $this->_modelMapper;
    }


    /**
     * @return Catalog_Model_Categories | Catalog_Model_Products | Manufacture_Model_ManufactureCategories | Manufacture_Model_Manufacture | Pages_Model_Pages | Pipeline_Model_PipelineCategories | Pipeline_Model_Pipeline | Oil_Model_OilCategories | Oil_Model_Oil | Media_Model_MediaCategories | Media_Model_Media
     */
    public function getModel()
    {
        if(is_null($this->_model)){
            $class = join('_', array(
                $this->getNameModule(),
                'Model',
                $this->_getNamespace()
            ));

            if(!class_exists($class, false))
                return null;

            $this->_model = new $class();
        }
        return $this->_model;
    }

    /**
     * @return Manufacture_Model_Mapper_ManufactureCategories | Pipeline_Model_Mapper_PipelineCategories | Oil_Model_Mapper_OilCategories | Media_Model_Mapper_MediaCategories
     */
    public function getModelCategoriesMapper()
    {
        if(is_null($this->_modelCategoriesMapper)){
            $class = join('_', array(
                $this->getNameModule(),
                'Model_Mapper',
                $this->_getNamespace().'Categories'
            ));

            if(!class_exists($class, false))
                return null;

            $this->_modelCategoriesMapper = new $class();
        }
        return $this->_modelCategoriesMapper;
    }


    /**
     * @return null
     */
    public function getCountItemOnPage()
    {
        if(is_null($this->_count_item_on_page))
            $this->_count_item_on_page = 10;
        return $this->_count_item_on_page;
    }

    /**
     * Classes are named spaced using their module name
     * this returns that module name or the first class name segment.
     *
     * @return string This class namespace
     */
    private function _getNamespace()
    {
        $ns = explode('Controller', get_class($this));
        return $ns[0];
    }

    /**
     * @return null|string
     */
    public function getNameModule()
    {
        if(is_null($this->_nameModule)){
            $nm = explode('-', $this->_request->getControllerName());
            $this->_nameModule = ucfirst($nm[0]);
        }

        return $this->_nameModule;
    }

    /**
     * @return Zend_Controller_Action_Helper_Redirector
     */
    public function getRedirector()
    {
        $this->_redirector = $this->_helper->getHelper('Redirector');
        return $this->_redirector;
    }

    /**
     * Сохраняются только основные поля присланные с формы
     * Для сохранения специфических полей таблиц нужно
     * 1. Все поля таблицы добавить в форму со значениями по умолчанию
     * 2. переопределить методы addAction или saveFormData в дочернем классе
     * 
     * @param Zend_Form $form
     * @return null
     * @throws Exception
     */
    public function saveFormData(Zend_Form $form)
    {

        $item = $this->getModel();
        $item->setOptions($form->getValues());

        if($this->_request->getParam('contentMarkdown')){
            $context_html = Michelf\MarkdownExtra::defaultTransform($this->_request->getParam('contentMarkdown'));
            $item->setContentHtml($context_html);
        }

        $this->setMetaData($item);

        $this->getModelMapper()->save($item);


        if($item->getId() && $item->getId() != ''){
            $id = $item->getId();
        }
        else{
            $id = $this->getModelMapper()->getDbTable()->getAdapter()->lastInsertId();

        }
        $item = $this->getModelMapper()->find($id, $this->getModel());

        foreach ($form->getElements() as $key => $element) {
            if($element instanceof Zend_Form_Element_File && $element->isUploaded()){
                $item = $this->saveUploadFile($element, $item);
            }
        }

        return $item;
    }

    /**
     * @param Zend_Form_Element_File $element
     * @param $item Catalog_Model_Categories | Catalog_Model_Products | Manufacture_Model_ManufactureCategories | Manufacture_Model_Manufacture | Pages_Model_Pages | Pipeline_Model_PipelineCategories | Pipeline_Model_Pipeline | Oil_Model_OilCategories | Oil_Model_Oil | Media_Model_MediaCategories | Media_Model_Media
     * @return Catalog_Model_Categories | Catalog_Model_Products | Manufacture_Model_ManufactureCategories | Manufacture_Model_Manufacture | Pages_Model_Pages | Pipeline_Model_PipelineCategories | Pipeline_Model_Pipeline | Oil_Model_OilCategories | Oil_Model_Oil | Media_Model_MediaCategories | Media_Model_Media
     * @throws Exception
     */
    public function saveUploadFile(Zend_Form_Element_File $element, $item)
    {
        $uploadPath = $element->getAttrib('data-upload') . '/' . $item->getId();

        if(!file_exists(APPLICATION_ROOT.$uploadPath))
            mkdir(APPLICATION_ROOT.$uploadPath, 0755, true);

        //$element->setDestination(APPLICATION_ROOT.$uploadPath);
        
        $fileName = $element->getFileName(null, false);

        $path = APPLICATION_ROOT.$uploadPath.'/'.$fileName;
        $path = iconv('utf-8', 'cp1251', $path);

        try {
            $element->addFilter('Rename', array('target' => $path,
                'overwrite' => true));
            $element->receive();
            $item->setOptions(array(
                $element->getAttrib('data-input') => $uploadPath. '/' .$fileName
            ));
            $this->getModelMapper()->save($item);
        }
        catch (Zend_File_Transfer_Exception $e)
        {
            throw new Exception('Bad image data: '.$e->getMessage());
        }

        return $item;
    }


    /**
     * @param $item Catalog_Model_Categories | Catalog_Model_Products | Manufacture_Model_ManufactureCategories | Manufacture_Model_Manufacture | Pages_Model_Pages | Pipeline_Model_PipelineCategories | Pipeline_Model_Pipeline | Oil_Model_OilCategories | Oil_Model_Oil | Media_Model_MediaCategories | Media_Model_Media
     * @return Catalog_Model_Categories | Catalog_Model_Products | Manufacture_Model_ManufactureCategories | Manufacture_Model_Manufacture | Pages_Model_Pages | Pipeline_Model_PipelineCategories | Pipeline_Model_Pipeline | Oil_Model_OilCategories | Oil_Model_Oil | Media_Model_MediaCategories | Media_Model_Media
     * @throws Exception
     */
    public function setUploadImage($item)
    {
        $upload = new Zend_File_Transfer_Adapter_Http();
        if($upload->isUploaded() && !is_null($this->_upload_path)){
            $uploadPath = $this->_upload_path.$item->getId();
            $destinationPath = APPLICATION_ROOT.$uploadPath;

            if(!file_exists($destinationPath))
                mkdir($destinationPath, 0755, true);

            $imageFile = $upload->getFileInfo('fileLoad');
            $imagePath = $destinationPath.'/'.$imageFile['fileLoad']['name'];
            $imagePath = iconv('utf-8', 'cp1251', $imagePath);

            $upload->addValidator('Size', false, 1024000)
                ->addValidator('Extension', false, 'jpg,png,gif,svg');

            try {
                $upload->addFilter('Rename', array('target' => $imagePath,
                    'overwrite' => true));
                $upload->receive();
                $item->setImage($uploadPath.'/'.$imageFile['fileLoad']['name']);
            }
            catch (Zend_File_Transfer_Exception $e)
            {
                throw new Exception('Bad image data: '.$e->getMessage());
            }
        }

        return $item;
    }

    /**
     * @param $item Catalog_Model_Categories | Catalog_Model_Products | Manufacture_Model_ManufactureCategories | Manufacture_Model_Manufacture | Pages_Model_Pages | Pipeline_Model_PipelineCategories | Pipeline_Model_Pipeline | Oil_Model_OilCategories | Oil_Model_Oil | Media_Model_MediaCategories | Media_Model_Media
     * @return Catalog_Model_Categories | Catalog_Model_Products | Manufacture_Model_ManufactureCategories | Manufacture_Model_Manufacture | Pages_Model_Pages | Pipeline_Model_PipelineCategories | Pipeline_Model_Pipeline | Oil_Model_OilCategories | Oil_Model_Oil | Media_Model_MediaCategories | Media_Model_Media
     */
    public function setMetaData($item)
    {
        $metaTitle = $this->_request->getParam('metaTitle');
        if(empty($metaTitle))
            $item->setMetaTitle($this->_request->getParam('title'));

        $description = $this->_request->getParam('description');
        $metaDescription = $this->_request->getParam('metaDescription');
        if(empty($metaDescription) && !empty($description))
            $item->setMetaDescription($description);
        
        return $item;
    }

    /**
     * @return Zend_Auth
     */
    public function getUserAuth()
    {
        $this->_userAuth = Zend_Auth::getInstance()->getIdentity();
        return $this->_userAuth;
    }

    /**
     * @param $tag
     * @throws Zend_Exception
     */
    public function clearCache($tag)
    {
        $cache = Zend_Registry::get('cache');
        $cache->clean(
            Zend_Cache::CLEANING_MODE_MATCHING_TAG,
            array($tag)
        );
    }

    public function getPageModule($pageModulePath = null)
    {
        if(is_null($pageModulePath))        
            $pageModulePath = strtolower($this->getNameModule());
        
        $pagesMapper = new Pages_Model_Mapper_Pages();

        $page = $pagesMapper->findByPath($pageModulePath, new Pages_Model_Pages());

        return $page;
    }

}

