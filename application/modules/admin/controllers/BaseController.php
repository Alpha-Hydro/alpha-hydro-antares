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
            $select->where('category_id = ?', $this->_request->getParam('category_id'));
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

    public function addAction()
    {
        $form = $this->getForm('edit');

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
                Zend_Debug::dump($form->getValues());
                //$this->_saveFormData($form);
            }

            $form->setDefaults($this->_request->getPost());
        }

        $this->view->form = $form;
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

        if($this->_request->getParam('contentMarkdown')){
            $context_html = Michelf\Markdown::defaultTransform($this->_request->getParam('contentMarkdown'));
            $item->setContentHtml($context_html);
        }

        $metaTitle = $this->_request->getParam('metaTitle');
        if(empty($metaTitle))
            $item->setMetaTitle($this->_request->getParam('title'));

        $description = $this->_request->getParam('description');
        $metaDescription = $this->_request->getParam('metaDescription');
        if(empty($metaDescription) && !empty($description))
            $item->setMetaDescription($description);

        //$this->_modelMapper->save($item);
        $id = $form->getValue('id');

        
        foreach ($form->getElements() as $key => $element) {
            if($element instanceof Zend_Form_Element_File && $element->isUploaded()){

                /*$upload = new Zend_File_Transfer();
                $uploadFile = $this->_uploadFiles($id, $upload, $element);

                Zend_Debug::dump($uploadFile);*/
                
                $destination = UPLOAD_DIR. $element->getAttrib('data-upload').'/'.$id;
                if(!file_exists($destination))
                    mkdir($destination, 0755, true);

//                $element
//                    ->setDestination($destination);

                $fileInfo = $element->getFileInfo();
                $fileName = $element->getFileName();

                $upload = new Zend_File_Transfer_Adapter_Http();
                $upload->addFilter('Rename', array('target' => $element->getFileName(), 'overwrite' => true));

                //$element->addFilter('Rename', $destination);

                //Zend_Debug::dump($element->getFileInfo());
                $element->receive();

                $item->setOptions(array(
                    $element->getAttrib('data-input') => '/upload'. $element->getAttrib('data-upload').'/'.$fileInfo[$key]['name']
                ));
            }
        }

        //Zend_Debug::dump($item);

        $this->_modelMapper->save($item);
        //$this->getRedirector()->gotoSimpleAndExit('index');

        /*$file = $form->imageLoadFile->getFileInfo();
        if(!empty($file) && $file['imageLoadFile']['name'] !== ''){
            $form->imageLoadFile->receive();
            $manufactureCategory->setImage('/upload/manufacture/category/'.$file['imageLoadFile']['name']);
        }

        return $this->_helper->redirector('index');*/
    }

    protected function _uploadFiles($id, Zend_File_Transfer $upload, Zend_Form_Element $element)
    {
        $destinationPath = UPLOAD_DIR. $element->getAttrib('data-upload') . '/' . $id;
        if (!file_exists($destinationPath))
            mkdir($destinationPath, 0755, true);


        $upload->setDestination($destinationPath)
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,gif,svg');
        $upload->receive($element->getId());

        $uploadFile = $upload->getFileInfo($element->getId());

        return $uploadFile;
    }


}

