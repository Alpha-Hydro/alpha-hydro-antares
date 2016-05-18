<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class OilController extends Zend_Controller_Action
{
    /**
     * @var Oil_Model_Mapper_Oil
     */
    protected $_modelMapper = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 10;
        $this->_modelMapper = new Oil_Model_Mapper_Oil();
        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        $select = $this->_modelMapper->getDbTable()->select();

        $categoryId = $this->_request->getParam('id');
        if ($categoryId){
            $select->where('category_id = ?', $categoryId);

            $categoryMapper = new Oil_Model_Mapper_OilCategories();
            $category = $categoryMapper->find($categoryId, new Oil_Model_OilCategories());
            $this->view->categoryName = $category->getTitle(). ' - ';
        }

        $pagesItems = $this->_modelMapper->fetchAll($select);

        if(!empty($pagesItems)){
            if(count($pagesItems)> $this->getCountItemOnPage()){
                $pageItems = array_chunk($pagesItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($this->_request->getParam('page') && $this->_request->getParam('page')>0)
                    $currentPage = $this->_request->getParam('page')-1;

                if($this->_request->getParam('page') && $this->_request->getParam('page')>count($pageItems))
                    $currentPage = count($pageItems)-1;

                $pagesItems = $pageItems[$currentPage];
                $this->view->countPage = count($pageItems);
                $this->view->currentPage = $currentPage+1;
            }
        }

        $this->view->pages = $pagesItems;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Категории',
                'module' => 'admin',
                'controller' => 'oil-categories',
                'resource' => 'oil-categories',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить товар',
                'module' => 'admin',
                'controller' => 'oil',
                'action' => 'add',
                'resource' => 'oil',
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
            $this->_redirector->gotoSimpleAndExit('index');

        $page = $this->_modelMapper->find($itemId, new Oil_Model_Oil());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->item = $page;

        $form = new Admin_Form_OilEdit();
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
                $this->_saveFormData($form);
            }

            $form->setDefaults($form->getValues());
        }

        $this->view->form = $form;

        $config = array(
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Добавить товар',
                'module' => 'admin',
                'controller' => 'oil',
                'action' => 'add',
                'resource' => 'oil',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Удалить',
                'module' => 'admin',
                'controller' => 'oil',
                'action' => 'delete',
                'resource' => 'oil',
                'params' => array(
                    'id' => $itemId,
                ),
            )),
            Zend_Navigation_Page_Uri::factory(array(
                'label' => 'Посмотреть на сайте',
                'uri' => '/oil/'.$page->getFullPath(),
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'oil',
                'resource' => 'oil',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_OilEdit();

        $form->setDefaults(array(
            'categoryId'    => 0,
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
            'imageLoad'         => '/files/images/product/2012-05-22_foto_nv.jpg',
        ));

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())) {
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
                'controller' => 'oil',
                'action' => 'add',
                'resource' => 'oil',
            )),
            Zend_Navigation_Page_Mvc::factory(array(
                'label' => 'Отменить',
                'module' => 'admin',
                'controller' => 'oil',
                'resource' => 'oil',
            )),
        );

        $containerNav = new Zend_Navigation($config);

        $this->view->container_nav = $containerNav;
    }

    public function deleteAction()
    {
        $request = $this->getRequest();
        $oilId = $request->getParam('id');

        if(is_null($oilId))
            $this->_redirector->gotoSimpleAndExit('index');

        $oilItem = $this->_modelMapper->find($oilId, new Oil_Model_Oil());

        if(is_null($oilItem))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $deleted = ($oilItem->getDeleted() != 0)?0:1;

        $oilItem->setDeleted($deleted);
        $this->_modelMapper->save($oilItem);

        $this->_redirector->gotoRouteAndExit(array(
            'module' => 'admin',
            'controller' => 'oil-categories',
            'action' => 'list',
            'id'=>$oilItem->getCategoryId()
        ), 'adminEdit', true);
    }

    public function enableAction()
    {
        $itemId = $this->_request->getParam('id');

        if(is_null($itemId))
            $this->_redirector->gotoSimpleAndExit('index');

        $item = $this->_modelMapper->find($itemId, new Oil_Model_Oil());

        $active = ($item->getActive() != 0)?0:1;
        $item->setActive($active);

        $this->_modelMapper->save($item);

        $this->_redirector->gotoRouteAndExit(array(
            'module' => 'admin',
            'controller' => 'oil-categories',
            'action' => 'list',
            'id'=>$item->getCategoryId()
        ), 'adminEdit', true);
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
            $entry = $this->_modelMapper->find($id, new Oil_Model_Oil());
            if(!is_null($entry))
                $jsonData = array_merge($jsonData, $entry->getOptions());
        }


        return $this->_helper->json->sendJson($jsonData);
    }


    /**
     * @param Admin_Form_OilEdit $form
     * @return mixed
     */
    private function _saveFormData(Admin_Form_OilEdit $form)
    {
        $request = $this->getRequest();
        $oilItem = new Oil_Model_Oil($form->getValues());

        $markdown = $request->getParam('contentMarkdown');
        $context_html = Markdown::defaultTransform($markdown);
        $oilItem->setContentHtml($context_html);

        $metaTitle = $request->getParam('metaTitle');
        if(empty($metaTitle))
            $oilItem->setMetaTitle($request->getParam('title'));

        $description = $request->getParam('description');
        $metaDescription = $request->getParam('metaDescription');
        if(empty($metaDescription) && !empty($description))
            $oilItem->setMetaDescription($description);

        $this->_modelMapper->save($oilItem);

        return $this->_helper->redirector('index');
    }

    /**
     * @param null $count_item_on_page
     * @return OilController
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

}







