<?php

class Media_IndexController extends Zend_Controller_Action
{

    protected $_categories_default_id = null;

    protected $_count_item_on_page = null;

    protected $_categories = array();

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
        $this->setCategories($mediaCategories);

        $this->view->categories = $this->getCategories();
    }

    public function indexAction()
    {
        //var_dump($this->getAllParams());

        $this->view->title = 'Пресса';
        $mediaCategoryMapper = new Media_Model_Mapper_MediaCategories();

        $request = $this->getRequest();
        if($request->getParam('media_path_category')){
            $mediaCategory = $mediaCategoryMapper
                ->findByPath($request->getParam('media_path_category'), new Media_Model_MediaCategories());
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
                $this->view->currentCategory = $mediaCategory;

            $this->view->title = $mediaCategory->getName();
            $this->view->mediaItems = $mediaItems;
        }

        $categoryName = '';
        if(isset($mediaCategory))
            $categoryName = $mediaCategory->getName();
        $this->view->meta_description = 'Альфа-Гидро - Пресса. '.$categoryName;
        $this->view->meta_keywords = 'пресса, новости, акции, статьи';
    }

    public function viewAction()
    {
        $request = $this->getRequest();

        $mediaPathCategory = $request->getParam('media_path_category');
        $mediaCategoryMapper = new Media_Model_Mapper_MediaCategories();
        $currentCategory = $mediaCategoryMapper->findByPath($mediaPathCategory, new Media_Model_MediaCategories());

        if(is_null($currentCategory))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);


        $this->view->currentCategory = $currentCategory;

        $mediaPathItem = $request->getParam('media_path_item');
        $mediaMapper = new Media_Model_Mapper_Media();
        $fullPath = $mediaPathCategory.'/'.$mediaPathItem;
        $mediaItem = $mediaMapper->findByFullPath($fullPath, new Media_Model_Media());

        if(is_null($mediaItem))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->mediaItem = $mediaItem;

        $meta_description =($mediaItem->getMetaDescription() != '')
            ? $mediaItem->getMetaDescription()
            : $mediaItem->getName().'. '.$currentCategory->getName().'. Альфа-Гидро.';
        $this->view->meta_description = $meta_description;

        $meta_keywords = ($mediaItem->getMetaKeywords() != '')
            ? $mediaItem->getMetaKeywords()
            : $mediaItem->getName().', '.$currentCategory->getName().', пресса';
        $this->view->meta_keywords = $meta_keywords;
    }

    /**
     * @param mixed $categories_default_id
     * @return Media_IndexController
     *
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
     *
     */
    public function getCategoriesDefaultId()
    {
        return $this->_categories_default_id;
    }

    /**
     * @return mixed
     *
     *
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }

    /**
     * @param array $categories
     * @return Media_IndexController
     *
     */
    public function setCategories($categories)
    {
        $this->_categories = $categories;
        return $this;
    }

    /**
     * @return array
     *
     */
    public function getCategories()
    {
        return $this->_categories;
    }

}





