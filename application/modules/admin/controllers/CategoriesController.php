<?php

class CategoriesController extends Zend_Controller_Action
{

    /**
     * @var Catalog_Model_Mapper_Categories
     *
     */
    protected $_modelMapper = null;

    /**
     * @var Zend_Controller_Request_Abstract
     *
     */
    protected $_request = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     */
    protected $_redirector = null;

    public function init()
    {
        $this->_modelMapper = new Catalog_Model_Mapper_Categories();
        $this->_request = $this->getRequest();
        $this->_redirector = $this->_helper->getHelper('Redirector');

        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch
            ->addActionContext('json', array('json'))
            ->addActionContext('list', array('json'))
            ->initContext();
    }

    public function indexAction()
    {
        $this->view->auth = Zend_Auth::getInstance()->hasIdentity();
    }

    public function addAction()
    {
        $category = new Catalog_Model_Categories();

        if($this->_request->isPost()){
            if ($this->_request->getParam('dataFormCategory')) {
                $dataCategory = $this->_request->getParam('dataFormCategory');
                $category->setOptions($dataCategory);
                $category
                    ->setActive(1)
                    ->setDeleted(0);

                $this->_modelMapper->save($category);
                $id = $this->_modelMapper->getDbTable()->getAdapter()->lastInsertId();

                $upload = new Zend_File_Transfer();
                if ($upload->isUploaded()) {
                    $destinationPath = UPLOAD_DIR . '/categories/' . $id;

                    if (!file_exists($destinationPath))
                        mkdir($destinationPath, 0755);

                    $upload->setDestination($destinationPath)
                        ->addValidator('Size', false, 1024000)
                        ->addValidator('Extension', false, 'jpg,png,gif,svg');
                    $upload->receive();

                    $imageFile = $upload->getFileInfo('fileLoad');

                    $category = $this->_modelMapper->find($id, new Catalog_Model_Categories());
                    $category->setUploadPath('/upload/categories/' . $id . '/');
                    $category->setImage($imageFile['fileLoad']['name']);
                    $this->_modelMapper->save($category);
                }
            }

            $url = $this->_request->getParam('currentUrl');
            $this->_redirector->gotoUrlAndExit($url);
        }

    }

    public function editAction()
    {
        $categoryId = $this->_request->getParam('id');

        if(is_null($categoryId))
            $this->_redirector->gotoSimpleAndExit('index');

        $category = $this->_modelMapper->find($categoryId, new Catalog_Model_Categories());

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        if($this->_request->isPost()){
            if ($this->_request->getParam('dataFormCategory')) {
                $dataCategory = $this->_request->getParam('dataFormCategory');
                $category->setOptions($dataCategory);

                $upload = new Zend_File_Transfer();
                if ($upload->isUploaded()) {
                    $destinationPath = UPLOAD_DIR . '/categories/' . $this->_request->getParam('id');

                    if (!file_exists($destinationPath))
                        mkdir($destinationPath, 0755);

                    $upload->setDestination($destinationPath)
                        ->addValidator('Size', false, 1024000)
                        ->addValidator('Extension', false, 'jpg,png,gif,svg');
                    $upload->receive();

                    $imageFile = $upload->getFileInfo('fileLoad');

                    $category->setUploadPath('/upload/categories/' . $this->_request->getParam('id') . '/');
                    $category->setImage($imageFile['fileLoad']['name']);
                }

                $this->_modelMapper->save($category);
            }

            $url = $this->_request->getParam('currentUrl');
            $this->_redirector->gotoUrlAndExit($url);
        }

        Zend_Debug::dump($this->_request->getParams());
    }

    public function seoAction()
    {
        Zend_Debug::dump($this->_request->getParams());
    }

    public function deleteAction()
    {
        Zend_Debug::dump($this->_request->getParams());
    }

    public function disabledAction()
    {
        Zend_Debug::dump($this->_request->getParams());
    }

    public function enabledAction()
    {
        Zend_Debug::dump($this->_request->getParams());
    }

    public function jsonAction()
    {
        $request = $this->getRequest();
        $id = $request->getParam('id');

        $jsonData = array(
            $request->getControllerKey() => $request->getControllerName(),
            'role' => Zend_Auth::getInstance()->getIdentity()->role,
            'name' => 'Каталог',
            'id' => '0'
        );

        if($id){
            $entry = $this->_modelMapper->find($id, new Catalog_Model_Categories());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }


        return $this->_helper->json->sendJson($jsonData);
    }

    public function listAction()
    {
        $request = $this->getRequest();
        $parent_id = $request->getParam('id');

        $jsonData = array();

        if(isset($parent_id)){
            $select = $this->_modelMapper->getDbTable()->select();
            $select->where('parent_id = ?', $parent_id)
                ->order('sorting ASC');

            $entries = $this->_modelMapper->fetchAll($select);
            if(!is_null($entries)){
                /** @var Catalog_Model_Categories $entry */
                foreach ($entries as $entry) {
                    $categoryInfo = array(
                        'id' => $entry->getId(),
                        'name' => $entry->getName(),
                        'active' => $entry->getActive(),
                        'deleted' => $entry->getDeleted(),
                        'countSubCategories' => $this->_countSubCategories($entry->getId())
                    );
                    $jsonData[] = $categoryInfo;
                }
            }
        }

        // Zend_Debug::dump($jsonData);
        return $this->_helper->json->sendJson($jsonData);
    }

    protected function _countSubCategories($id)
    {
        $select = $this->_modelMapper->getDbTable()->select();
        $select->where('parent_id = ?', $id)
            ->order('sorting ASC');

        $entries = $this->_modelMapper->fetchAll($select);

        return count($entries);
    }


}













