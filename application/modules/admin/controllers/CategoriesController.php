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
                    ->setMetaTitle($dataCategory['name'])
                    ->setMetaDescription($dataCategory['description'])
                    ->setMetaKeywords($dataCategory['name'])
                    ->setAddDate(date("Y-m-d H:i:s"))
                    ->setModDate(date("Y-m-d H:i:s"))
                    ->setOrder($dataCategory['sorting'])
                    ->setGenerate(1)
                    ->setActive(1)
                    ->setDeleted(0);

                $parentFullPath = $this->_modelMapper->generateFullPath($dataCategory['parentId']);
                $fullPath = (!is_null($parentFullPath))
                    ? $parentFullPath.'/'.$dataCategory['path']
                    : $dataCategory['path'];
                $category->setFullPath($fullPath);


                $this->_modelMapper->save($category);
                $id = $this->_modelMapper->getDbTable()->getAdapter()->lastInsertId();


                $upload = new Zend_File_Transfer();
                if ($upload->isUploaded()) {
                    $imageFile = $this->_uploadFiles($id, $upload);

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

        $parentCategoryId = $category->getParentId();

        if($this->_request->isPost()){
            $url = $this->_request->getParam('currentUrl');

            if ($this->_request->getParam('dataFormCategory')) {
                $dataCategory = $this->_request->getParam('dataFormCategory');
                $category->setOptions($dataCategory);
                $category->setModDate(date("Y-m-d H:i:s"));

                if($dataCategory['parentId'] != $parentCategoryId){
                    $parentFullPath = $this->_modelMapper->generateFullPath($dataCategory['parentId']);
                    $fullPath = (!is_null($parentFullPath))
                        ? $parentFullPath.'/'.$category->getPath()
                        : $category->getPath();
                    $category->setFullPath($fullPath);
                    $url = '/catalog/'.$parentFullPath;
                }

                $upload = new Zend_File_Transfer();
                if ($upload->isUploaded()) {
                    $imageFile = $this->_uploadFiles($categoryId, $upload);

                    $category->setUploadPath('/upload/categories/' . $categoryId . '/');
                    $category->setImage($imageFile['fileLoad']['name']);
                }

                $this->_modelMapper->save($category);
            }

            $this->_redirector->gotoUrlAndExit($url);
        }
    }

    public function seoAction()
    {
        $categoryId = $this->_request->getParam('id');
        if(is_null($categoryId))
            $this->_redirector->gotoSimpleAndExit('index');

        $category = $this->_modelMapper->find($categoryId, new Catalog_Model_Categories());

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        if($this->_request->isPost()) {
            $url = $this->_request->getParam('currentUrl');

            if($this->_request->getParam('dataFormSeo')){
                $dataFormSeo = $this->_request->getParam('dataFormSeo');
                $category->setOptions($dataFormSeo);
                $this->_modelMapper->save($category);
            }

            $this->_redirector->gotoUrlAndExit($url);
        }
    }

    public function deleteAction()
    {
        $categoryId = $this->_request->getParam('id');

        if(is_null($categoryId))
            $this->_redirector->gotoSimpleAndExit('index');

        $category = $this->_modelMapper->find($categoryId, new Catalog_Model_Categories());

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        if($this->_request->isPost()) {
            $url = $this->_request->getParam('currentUrl');

            if ($this->_request->getParam('action') === 'delete') {
                $category
                    ->setDeleted(1)
                    ->setModDate(date("Y-m-d H:i:s"));
                $this->_modelMapper->save($category);
            }

            $this->_redirector->gotoUrlAndExit($url);
        }
    }

    public function disabledAction()
    {
        $categoryId = $this->_request->getParam('id');

        if(is_null($categoryId))
            $this->_redirector->gotoSimpleAndExit('index');

        $category = $this->_modelMapper->find($categoryId, new Catalog_Model_Categories());

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        if($this->_request->isPost()) {
            $url = $this->_request->getParam('currentUrl');

            if ($this->_request->getParam('action') === 'disabled') {
                $category
                    ->setModDate(date("Y-m-d H:i:s"))
                    ->setActive(0);
                $this->_modelMapper->save($category);
            }
            $this->_redirector->gotoUrlAndExit($url);
        }
    }

    public function enabledAction()
    {
        $categoryId = $this->_request->getParam('id');

        if(is_null($categoryId))
            $this->_redirector->gotoSimpleAndExit('index');

        $category = $this->_modelMapper->find($categoryId, new Catalog_Model_Categories());

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        if($this->_request->isPost()) {
            $url = $this->_request->getParam('currentUrl');

            if ($this->_request->getParam('action') === 'enabled') {
                $category
                    ->setActive(1)
                    ->setModDate(date("Y-m-d H:i:s"));
                $this->_modelMapper->save($category);
            }
            $this->_redirector->gotoUrlAndExit($url);
        }
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

    protected function _uploadFiles($id, Zend_File_Transfer $upload)
    {
        $moduleFolder = UPLOAD_DIR . '/categories';
        if (!file_exists($moduleFolder))
            mkdir($moduleFolder, 0755);

        $destinationPath = $moduleFolder . '/' . $id;
        if (!file_exists($destinationPath))
            mkdir($destinationPath, 0755);


        $upload->setDestination($destinationPath)
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,gif,svg');
        $upload->receive();

        $uploadFile = $upload->getFileInfo('fileLoad');

        return $uploadFile;
    }
}













