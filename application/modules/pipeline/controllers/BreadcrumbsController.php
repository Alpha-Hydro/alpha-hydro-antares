<?php

class Pipeline_BreadcrumbsController extends Zend_Controller_Action
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

        $pipelineCategory = $this->getPageCategory();
        $pipelineItem = $this->getPageItem();

        if(!is_null($pipelineCategory)){
            $breadcrumbs->addPage(array(
                'type' => 'uri',
                'label' => $pipelineCategory->getTitle(),
                'uri' => (!is_null($pipelineItem))
                    ? '/pipeline/'.$pipelineCategory->getPath().'/'
                    : null,
                'active' => (!is_null($pipelineItem))? false: true,
            ));
            $i--;
        }

        if(!is_null($pipelineItem)){
            $breadcrumbs->addPage(array(
                'type' => 'uri',
                'label' => $pipelineItem->getTitle(),
                'active' => true,
            ));
            $i--;
        }

        $breadcrumbs->addPage(
            new Zend_Navigation_Page_Uri(
                array (
                    'label' => 'Детали трубопроводов',
                    'uri' => '/pipeline/',
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
     * @return Pipeline_BreadcrumbsController
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
     * @return Pipeline_BreadcrumbsController
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

