<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class Admin_OilController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $oilMapper = new Oil_Model_Mapper_Oil();
        $this->view->pages = $oilMapper->fetchAll();

        $config = array(
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
            return $this->_helper->redirector('index');

        $oilMapper = new Oil_Model_Mapper_Oil();
        $page = $oilMapper->find($itemId, new Oil_Model_Oil());

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
                'uri' => '/oil/'.$page->getPath(),
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
            return $this->_helper->redirector('index');

        $oilMapper = new Oil_Model_Mapper_Oil();
        $oilItem = $oilMapper->find($oilId, new Oil_Model_Oil());

        if(is_null($oilItem))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $oilItem->setDeleted(1);
        $oilMapper->save($oilItem);

        return $this->_helper->redirector('index');
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

        $oilMapper = new Oil_Model_Mapper_Oil();
        $oilMapper->save($oilItem);

        return $this->_helper->redirector('index');
    }


}







