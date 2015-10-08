<?php

class Oil_BreadcrumbsController extends Zend_Controller_Action
{
    protected $_page_category = null;
    protected $_page_item = null;

    public function init()
    {
        if($this->_getParam('page_category'))
            $this->setPageCategory($this->_getParam('page_category'));

        if($this->_getParam('page_item'))
            $this->setPageItem($this->_getParam('page_item'));
    }

    public function indexAction()
    {
        $breadcrumbs = new Zend_Navigation();

        $i = 0;

        $pageItem = $this->getPageItem();
        if(!is_null($pageItem)){
            $breadcrumbs->addPage(array(
                'type' => 'uri',
                'label' => $pageItem->getTitle(),
                'active' => true,
            ));
            $i--;
        }

        $breadcrumbs->addPage(
            new Zend_Navigation_Page_Uri(
                array (
                    'label' => 'Масла',
                    'uri' => '/oil/',
                    'order' => $i
                )
            )
        );

        $breadcrumbs->addPage(
            new Zend_Navigation_Page_Uri(
                array (
                    'label' => 'Главная',
                    'uri' => '/',
                    'order' => $i-1
                )
            )
        );

        $this->view->breadcrumbs = $breadcrumbs;
    }

    /**
     * @param null $page_category
     * @return Oil_BreadcrumbsController
     */
    public function setPageCategory($page_category)
    {
        $this->_page_category = $page_category;
        return $this;
    }

    /**
     * @return null
     */
    public function getPageCategory()
    {
        return $this->_page_category;
    }

    /**
     * @param null $page_item
     * @return Oil_BreadcrumbsController
     */
    public function setPageItem($page_item)
    {
        $this->_page_item = $page_item;
        return $this;
    }

    /**
     * @return null
     */
    public function getPageItem()
    {
        return $this->_page_item;
    }


}

