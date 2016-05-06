<?php

class Oil_BreadcrumbsController extends Zend_Controller_Action
{
    /**
     * @var Oil_Model_OilCategories
     */
    protected $_page_category = null;
    /**
     * @var Oil_Model_Oil
     */
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

        $pageCategory = $this->getPageCategory();
        $pageItem = $this->getPageItem();

        if(!is_null($pageCategory)){
            $breadcrumbs->addPage(array(
                'type' => 'uri',
                'label' => $pageCategory->getTitle(),
                'uri' => (!is_null($pageItem))
                    ? '/oil/'.$pageCategory->getPath().'/'
                    : null,
                'active' => (!is_null($pageItem))?false:true,
            ));
            $i--;
        }

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
                    'label' => 'Масла и очистители',
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
     * @param Oil_Model_OilCategories $page_category
     * @return Oil_BreadcrumbsController
     */
    public function setPageCategory($page_category)
    {
        $this->_page_category = $page_category;
        return $this;
    }

    /**
     * @return Oil_Model_OilCategories
     */
    public function getPageCategory()
    {
        return $this->_page_category;
    }

    /**
     * @param Oil_Model_Oil $page_item
     * @return Oil_BreadcrumbsController
     */
    public function setPageItem($page_item)
    {
        $this->_page_item = $page_item;
        return $this;
    }

    /**
     * @return Oil_Model_Oil
     */
    public function getPageItem()
    {
        return $this->_page_item;
    }


}

