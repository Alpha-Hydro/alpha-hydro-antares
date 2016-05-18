<?php

class Admin_BaseController extends Zend_Controller_Action
{
    /**
     * @var array Form instances
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
    protected $_count_item_on_page = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     */
    protected $_redirector = null;

    public function init()
    {
    }

    public function indexAction()
    {
        /**
         * @var $select Zend_Db_Table_Select;
         */
        $select = $this->_modelMapper->getDbTable()->select();

        if($this->_request->getParam('category_id')){
            $select->where('category_id = ?', $this->request->getParam('category_id'));

            /*$this->view->categoryName = $this->_modelCategoriesMapper
                    ->find($this->_request->getParam('category_id'), new Manufacture_Model_ManufactureCategories())
                    ->getTitle() . ' - ';*/
        }

        $pageItems = $this->getModelMapper()->fetchAll($select);

        if(!empty($pageItems)){
            $pageItems = $this->setPaginationPage($pageItems);
        }

        $this->view->pages = $pageItems;

    }

    public function listAction()
    {
        $this->forward('index', strtolower($this->_getNameModule()), 'admin', array('category_id' => $this->_getParam('id')));
        return;
    }

    public function editAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId))
            $this->getRedirector()->gotoSimpleAndExit('index');

        $page = $this->getModelMapper()->find($itemId, $this->getModel());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->item = $page;

        $form = $this->getForm('edit');
        $dataPage = $page->getOptions();
        foreach ($dataPage as $key => $value) {
            $form->setDefault($key, $value);
        }

        if ($this->getRequest()->isPost()){
            if ($form->isValid($this->getRequest()->getPost())) {
                $this->_saveFormData($form);
            }
            $form->setDefaults($form->getValues());
        }

        $this->view->form = $form;
    }

    public function deleteAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $item = $this->_modelMapper->find($itemId, $this->getModel());
        if(is_null($item))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $deleted = ($item->getDeleted() != 0)?0:1;

        $item->setDeleted($deleted);
        $this->_modelMapper->save($item);

        $this->getRedirector()->gotoSimpleAndExit('index');
    }

    public function enableAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $item = $this->_modelMapper->find($itemId, $this->getModel());
        if(is_null($item))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $enabled = ($item->getActive() != 0)?0:1;

        $item->setActive($enabled);
        $this->_modelMapper->save($item);

        $this->getRedirector()->gotoSimpleAndExit('index');
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
            $this->view->countPage = count($pages);
            $this->view->currentPage = $currentPage+1;
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
     * @return null
     */
    public function getModelMapper()
    {
        if(is_null($this->_modelMapper)){
            $class = join('_', array(
                $this->_getNameModule(),
                'Model_Mapper',
                $this->_getNamespace()
            ));
            $this->_modelMapper = new $class();
        }
        return $this->_modelMapper;
    }

    /**
     * @return null
     */
    public function getModel()
    {
        if(is_null($this->_model)){
            $class = join('_', array(
                $this->_getNameModule(),
                'Model',
                $this->_getNamespace()
            ));
            $this->_model = new $class();
        }
        return $this->_model;
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
     * @return string
     */
    private function _getNameModule()
    {
        $nm = explode('-', $this->_request->getControllerName());
        return ucfirst($nm[0]);
    }

    /**
     * @return Zend_Controller_Action_Helper_Redirector
     */
    public function getRedirector()
    {
        $this->_redirector = $this->_helper->getHelper('Redirector');
        return $this->_redirector;
    }

    private function _saveFormData(Zend_Form $form)
    {
        $item = $this->getModel();
        $item->setOptions($form->getValues());

        foreach ($form->getElements() as $key => $element) {
            if($element instanceof Zend_Form_Element_File)
                Zend_Debug::dump($element);
        }

        /*$request = $this->getRequest();
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

        return $this->_helper->redirector('index');*/
    }


}

