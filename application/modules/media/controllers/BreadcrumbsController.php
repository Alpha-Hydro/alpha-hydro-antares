<?php

class Media_BreadcrumbsController extends Zend_Controller_Action
{
    protected $_media_category = null;
    protected $_media_item = null;

    public function init()
    {
        if($this->_getParam('media_category'))
            $this->setMediaCategory($this->_getParam('media_category'));

        if($this->_getParam('media_item'))
            $this->setMediaItem($this->_getParam('media_item'));
    }

    public function indexAction()
    {
        $breadcrumbs = new Zend_Navigation();

        $i = 0;

        $category = $this->getMediaCategory();
        if(!is_null($this->getMediaCategory())){
            $breadcrumbs->addPage(array(
                'type' => 'uri',
                'label' => $category->getName(),
                'uri' => (!$this->getMediaItem())
                    ?null
                    :'/media/'.$category->getPath().'/',
                'active' => (!$this->getMediaItem())
                    ?true
                    :false,
            ));
            $i--;
        }

        $mediaItem = $this->getMediaItem();
        if(!is_null($mediaItem)){
            $breadcrumbs->addPage(array(
                'type' => 'uri',
                'label' => $mediaItem->getName(),
                'active' => true,
            ));
            $i--;
        }


        $breadcrumbs->addPage(
            new Zend_Navigation_Page_Uri(
                array (
                    'label' => 'Пресса',
                    'uri' => '/media/',
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
     * @param Media_Model_MediaCategories|null $media_category
     * @return Media_BreadcrumbsController
     */
    public function setMediaCategory(Media_Model_MediaCategories $media_category)
    {
        $this->_media_category = $media_category;
        return $this;
    }

    /**
     * @return null
     */
    public function getMediaCategory()
    {
        return $this->_media_category;
    }

    /**
     * @param Media_Model_Media|null $media_item
     * @return Media_BreadcrumbsController
     */
    public function setMediaItem(Media_Model_Media $media_item)
    {
        $this->_media_item = $media_item;
        return $this;
    }

    /**
     * @return null
     */
    public function getMediaItem()
    {
        return $this->_media_item;
    }

}

