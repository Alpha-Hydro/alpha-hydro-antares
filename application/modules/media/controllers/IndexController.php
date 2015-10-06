<?php

class Media_IndexController extends Zend_Controller_Action
{

    protected $_categories_default_id = null;

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_categories_default_id = 2;
        $this->_count_item_on_page = 10;

        $mediaCategoryMapper = new Media_Model_Mapper_MediaCategories();
        $select = $mediaCategoryMapper->getDbTable()->select();
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            //После создания модулей Производство, Масла, ТП - удалить
            ->where('id IN(?)', array(2, 3, 4))
            ->order('sorting ASC');
        $mediaCategories = $mediaCategoryMapper->fetchAll($select);
        $this->view->categories = $mediaCategories;
    }

    public function indexAction()
    {
        $this->view->title = 'Пресса';
        $mediaCategoryMapper = new Media_Model_Mapper_MediaCategories();

        $request = $this->getRequest();
        if($request->getParam('media_path')){
            $mediaCategory = $mediaCategoryMapper
                ->findByPath($request->getParam('media_path'), new Media_Model_MediaCategories());
            $this->setCategoriesDefaultId($mediaCategory->getId());
        }

        $mediaCategoryId = $this->getCategoriesDefaultId();

        $mediaMapper = new Media_Model_Mapper_Media();
        $select = $mediaMapper->getDbTable()->select();
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id = ?', $mediaCategoryId)
            ->order('timestamp DESC');

        $mediaItems = $mediaMapper->fetchAll($select);

        if(!empty($mediaItems)){
            if(count($mediaItems) > $this->getCountItemOnPage()){
                $mediaPages = array_chunk($mediaItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($mediaPages))
                    $currentPage = count($mediaPages)-1;

                $mediaItems = $mediaPages[$currentPage];

                $this->view->countPage = count($mediaPages);
                $this->view->currentPage = $currentPage+1;
            }

            if(!isset($mediaCategory))
                $mediaCategory = $mediaCategoryMapper
                    ->find($this->getCategoriesDefaultId(),new Media_Model_MediaCategories());


            if (isset($mediaCategory))
                $this->view->currentCategory = $mediaCategory->getId();

            $this->view->title = $mediaCategory->getName();
            $this->view->mediaItems = $mediaItems;
        }

    }

    /**
     * @param mixed $categories_default_id
     * @return Media_IndexController
     *
     */
    public function setCategoriesDefaultId($categories_default_id)
    {
        $this->_categories_default_id = $categories_default_id;
        return $this;
    }

    /**
     * @return mixed
     *
     */
    public function getCategoriesDefaultId()
    {
        return $this->_categories_default_id;
    }

    /**
     * @return mixed
     *
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }

    public function viewAction()
    {
        // action body
    }


}



