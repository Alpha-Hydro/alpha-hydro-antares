<?php

include_once 'BaseController.php';

class CategoriesController extends BaseController
{

    /**
     * @var Catalog_Model_Mapper_Categories
     *
     */
    protected $_modelMapper = null;

    /**
     * @var Catalog_Model_Categories
     */
    protected $_model = null;

    /**
     * @var Zend_Form[]
     *
     */
    protected $_forms = array();

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
        $this->_model = new Catalog_Model_Categories();
        $this->_forms['edit'] = new Admin_Form_CategoriesEdit();
        $this->_request = $this->getRequest();
        $this->_redirector = $this->_helper->getHelper('Redirector');

    }

    public function indexAction()
    {
        $parent_id = ($this->_request->getParam('parent_id'))
            ?$this->_request->getParam('parent_id')
            :0;

        if($parent_id != 0){
            $this->view->assign(array(
                'breadcrumbs' => $this->containerNavigation($parent_id),
                'current_category' =>$this->_request->getParam('parent_id')
            ));
        }

        $cache = Zend_Registry::get('cache');
        $cacheName = 'Admin_CatalogCategories_'.$parent_id;

        if(!$pageItems = $cache->load($cacheName)){
            $select = $this->_modelMapper->getDbTable()->select();
            $select
                ->where('parent_id = ?', $parent_id)
                ->order('sorting ASC');

            $pageItems = $this->_modelMapper->fetchAll($select);

            $cache->save($pageItems, $cacheName, array('admin','Catalog', 'CatalogCategories'));
        }

        if(0 == count($pageItems))
            $this->_redirector->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'categories',
                'action' => 'list',
                'id'=>$parent_id
            ), 'adminEdit', true);

        $pageItems = $this->setPaginationPage($pageItems);

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'На сайт',
                'uri' => '/catalog/'.$this->_modelMapper->getFullPathById($parent_id)
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $editUrlOptions = array(
            'module' => 'admin',
            'controller' => 'pages',
            'action' => 'edit',
            'id' => $this->getPageModule('catalog')->getId(),
        );
        
        $this->view->assign(array(
            'pages' => $pageItems,
            'auth' => Zend_Auth::getInstance()->hasIdentity(),
            'editUrlOptions' => $editUrlOptions,
            'container_nav' => $containerNav
        ));
    }

    public function listAction()
    {
        $editUrlOptions = array(
            'module' => 'admin',
            'controller' => 'pages',
            'action' => 'edit',
            'id' => $this->getPageModule('catalog')->getId(),
        );
        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'На сайт',
                'uri' => '/catalog/'.$this->_modelMapper->getFullPathById($this->_request->getParam('id'))
            )),
        );
        $containerNav = new Zend_Navigation($config);

        $this->view->assign(array(
            'editUrlOptions' => $editUrlOptions,
            'container_nav' => $containerNav
        ));

        $this->forward('index', 'products', 'admin', array('category_id' => $this->_getParam('id')));
        return;
    }

    public function addAction()
    {
        $category = $this->_model;

        if($this->_request->isPost()){
            if ($this->_request->getParam('dataFormCategory')) {
                $dataCategory = $this->_request->getParam('dataFormCategory');
                $category->setOptions($dataCategory);
                $category
                    ->setMetaTitle($dataCategory['name'])
                    ->setMetaDescription($dataCategory['description'])
                    ->setContentHtml(Michelf\MarkdownExtra::defaultTransform($dataCategory['contentMarkdown']))
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

            $this->clearCache('CatalogCategories');
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
            //Zend_Debug::dump($this->_request->getParams());
            $url = $this->_request->getParam('currentUrl');

            if ($this->_request->getParam('dataFormCategory')) {
                $dataCategory = $this->_request->getParam('dataFormCategory');
                $category->setOptions($dataCategory);
                $category->setModDate(date("Y-m-d H:i:s"));

                $context_html = Michelf\MarkdownExtra::defaultTransform($dataCategory['contentMarkdown']);
                $category->setContentHtml($context_html);

                if($dataCategory['parentId'] != $parentCategoryId){
                    $parentFullPath = $this->_modelMapper->generateFullPath($dataCategory['parentId']);
                    $fullPath = (!is_null($parentFullPath))
                        ? $parentFullPath.'/'.$category->getPath()
                        : $category->getPath();
                    $category->setFullPath($fullPath);
                    $url = '/catalog/'.$parentFullPath;
                    $productsRel = $this->_modelMapper->fetchProductsRel($categoryId);
                    if($productsRel){
                        $productsMapper = new Catalog_Model_Mapper_Products();
                        /** @var Catalog_Model_Products $product */
                        foreach ($productsRel as $product) {
                            $product->setFullPath($fullPath.'/'.$product->getPath());
                            $productsMapper->save($product);
                        }
                    }
                }

                $upload = new Zend_File_Transfer();
                if ($upload->isUploaded()) {
                    $imageFile = $this->_uploadFiles($categoryId, $upload);

                    $category->setUploadPath('/upload/categories/' . $categoryId . '/');
                    $category->setImage($imageFile['fileLoad']['name']);
                }

                $this->_modelMapper->save($category);
            }
            $this->clearCache('CatalogCategories');
            //$this->_redirector->gotoUrlAndExit($url);
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

    public function jsonAction()
    {
        $request = $this->getRequest();
        $id = $request->getParam('id');

        $jsonData = array(
            $request->getControllerKey() => $request->getControllerName(),
            'role' => Zend_Auth::getInstance()->getIdentity()->role,
            'name' => 'Каталог',
            'id' => '0',
        );

        if($id){
            $entry = $this->_modelMapper->find($id, new Catalog_Model_Categories());
            if(!is_null($entry)){
                $jsonData = array_merge($jsonData, $entry->getOptions());
                $jsonData = array_merge($jsonData, $this->breadcrumbs($id));
            }
        }

        return $this->_helper->json->sendJson($jsonData);
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

    /**
     * @param $id
     * @return array
     */
    public function breadcrumbs($id){
        $entries = $this->_modelMapper->fetchTreeParentCategories($id);
        $breadcrumbs = array();
        foreach ($entries as $entry) {
            $breadcrumbs[] = $entry->name;
        }

        if(!empty($breadcrumbs))
            array_shift($breadcrumbs);

        $treeCategories = array(
            'breadcrumbs' =>  (!empty($breadcrumbs))
                ?implode(" > ", array_reverse($breadcrumbs))
                :'Каталог'
        );

        return $treeCategories;
    }

    /**
     * @param $category_id
     * @return Zend_Navigation
     * @throws Zend_Navigation_Exception
     */
    public function containerNavigation($category_id)
    {
        $container = new Zend_Navigation();

        $categoriesMapper = new Catalog_Model_Mapper_Categories();

        $category = $categoriesMapper->find($category_id, new Catalog_Model_Categories());

        $i = 0;

        if($category)
            $container->addPage(array(
                'type' => 'uri',
                'label' => $category->getName(),
                'active' => true
            ));


        $parentCategories = $categoriesMapper->fetchTreeParentCategories($category->getParentId());

        if (!empty($parentCategories)) {
            foreach ($parentCategories as $parentCategory) {
                $container->addPage (
                    array (
                        "action" => "index",
                        "controller" => "categories",
                        "module" => "admin",
                        'order'	 => $i,
                        'route'  => 'adminCategoriesEdit',
                        "params" => array(
                            'parent_id'=>($parentCategory->id != 0) ? $parentCategory->id : null,
                        ),
                        'reset_params' => true,
                        'encode_url' => false,
                        'label' => $parentCategory->name,
                    )
                );
                $i--;
            }
        }


        $container->addPage(
            new Zend_Navigation_Page_Uri(
                array (
                    'label' => 'Каталог',
                    'uri' => '/admin/categories/',
                    'order' => $i
                )
            )
        );

        return $container;
    }

    /**
     * @param $id
     * @return int
     */
    protected function _countSubCategories($id)
    {
        $select = $this->_modelMapper->getDbTable()->select();
        $select->where('parent_id = ?', $id)
            ->order('sorting ASC');

        $entries = $this->_modelMapper->fetchAll($select);

        return count($entries);
    }

    /**
     * @param $id
     * @param Zend_File_Transfer $upload
     * @param string $inputName
     * @return mixed
     */
    protected function _uploadFiles($id, Zend_File_Transfer $upload, $inputName = 'fileLoad')
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

        $uploadFile = $upload->getFileInfo($inputName);

        return $uploadFile;
    }
}













