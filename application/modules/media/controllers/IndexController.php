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
            ->order('sorting ASC');
        $mediaCategories = $mediaCategoryMapper->fetchAll($select);
        $this->setCategories($mediaCategories);

        $this->view->assign(array(
            'categories' => $this->getCategories(),
            'adminPath' => 'media-categories/',
            'title' => 'Пресса'
        ));
    }

    public function indexAction()
    {
        $request = $this->getRequest();
        $mediaCategoryMapper = new Media_Model_Mapper_MediaCategories();

        if($request->getParam('fullPath')){
            $mediaCategory = $mediaCategoryMapper
                ->findByPath($request->getParam('fullPath'), new Media_Model_MediaCategories());

            if(is_null($mediaCategory)){
                //throw new Zend_Controller_Action_Exception("Страница не найдена", 404);
                $this->forward('view');
                return;
            }

            $this->setCategoriesDefaultId($mediaCategory->getId());
        }

        $mediaCategoryId = $this->getCategoriesDefaultId();

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $this->forward('json', 'media-categories', 'admin', array('id' => $mediaCategoryId));
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $pageItem = $mediaCategoryMapper->find($mediaCategoryId, new Media_Model_MediaCategories());
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'media-categories',
                    'id' => $pageItem->getId(),
                    'active' => $pageItem->getActive(),
                    'deleted' => $pageItem->getDeleted()
                )
            ));
        }

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

                $this->view->assign(array(
                    'countPage' => count($mediaPages),
                    'currentPage' => $currentPage+1,
                ));
            }

            if(!isset($mediaCategory))
                $mediaCategory = $mediaCategoryMapper
                    ->find($this->getCategoriesDefaultId(),new Media_Model_MediaCategories());


            if (isset($mediaCategory))
                $this->view->assign('currentCategory', $mediaCategory);

            $this->view->assign(array(
                'title' => $mediaCategory->getName(),
                'mediaItems' => $mediaItems,
            ));
        }

        $categoryName = '';
        if(isset($mediaCategory))
            $categoryName = $mediaCategory->getName();

        $this->view->assign(array(
            'meta_description' => 'Альфа-Гидро - Пресса. '.$categoryName,
            'meta_keywords' => 'пресса, новости, акции, статьи',
            'adminPath' => 'media-categories/list/'.$mediaCategoryId,
        ));

    }

    public function viewAction()
    {
        $request = $this->getRequest();

        $mediaPathItem = $request->getParam('fullPath');
        $mediaMapper = new Media_Model_Mapper_Media();

        $mediaItem = $mediaMapper->findByFullPath($mediaPathItem, new Media_Model_Media());

        if(is_null($mediaItem))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $this->forward('json', 'media', 'admin', array('id' => $mediaItem->getId()));
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'media',
                    'id' => $mediaItem->getId(),
                    'active' => $mediaItem->getActive(),
                    'deleted' => $mediaItem->getDeleted()
                )
            ));
        }

        $mediaCategoryMapper = new Media_Model_Mapper_MediaCategories();
        $currentCategory = $mediaCategoryMapper->find($mediaItem->getCategoryId(), new Media_Model_MediaCategories());

        $meta_description =($mediaItem->getMetaDescription() != '')
            ? $mediaItem->getMetaDescription()
            : $mediaItem->getName().'. '.$currentCategory->getName().'. Альфа-Гидро.';


        $meta_keywords = ($mediaItem->getMetaKeywords() != '')
            ? $mediaItem->getMetaKeywords()
            : $mediaItem->getName().', '.$currentCategory->getName().', пресса';

        $this->view->assign(array(
            'mediaItem' => $mediaItem,
            'currentCategory' => $currentCategory,
            'meta_description' => $meta_description,
            'meta_keywords' => $meta_keywords,
            'adminPath' => 'media/edit/'.$mediaItem->getId(),
        ));

    }

    public function pageModule()
    {
        $pagesMapper = new Pages_Model_Mapper_Pages();
        $pageCatalogPath = $this->getRequest()->getModuleName();

        $page = $pagesMapper->findByPath($pageCatalogPath, new Pages_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Раздел '".$pageCatalogPath."' не добален в таблицу 'Pages'", 404);

        return $page;
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





