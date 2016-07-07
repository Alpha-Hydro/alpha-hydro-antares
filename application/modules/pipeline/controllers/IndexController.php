<?php

class Pipeline_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        $pageTitle = 'Детали трубопроводов';

        $pageMapper = new Default_Model_Mapper_Pages();
        $page = $pageMapper->findByPath('pipeline', new Default_Model_Pages());

        if($page){
            $pageTitle = $page->getTitle();

            $this->view->meta_title = $page->getMetaTitle();
            $this->view->meta_description = $page->getMetaDescription();
            $this->view->meta_keywords = $page->getMetaKeywords();

            $this->view->page = $page;
        }

        $this->view->title = $pageTitle;

        $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $select =  $categoriesMapper->getDbTable()->select();
        $select->where('parent_id = ?', 0)
            ->where('active != ?', 0)
            ->where('deleted != ?', 1)
            ->order('sorting ASC');

        $categories = $categoriesMapper->fetchAll($select);

        $this->view->categories = $categories;

        /*//Заглушка
        if(!Zend_Auth::getInstance()->hasIdentity()){
            $this->_helper->layout->setLayout('_cap');
            $this->render('cap');
        }*/

        $this->view->adminPath = 'pipeline-categories/';
    }

    public function indexAction()
    {
        $page = $this->pageModule();

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            if ($page){
                $id = ($this->getRequest()->getParam('json') != '')
                    ?$this->getRequest()->getParam('json')
                    :$page->getId();

                $this->forward('json', 'pages', 'admin', array('id' => $id));
                return;
            }
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'pages',
                    'id' => $page->getId(),
                    'active' => $page->getActive(),
                    'deleted' => $page->getDeleted()
                )
            ));
        }
    }

    public function capAction()
    {
        //Показывается заглушка - не удалять
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

    public function articlesAction()
    {
        $this->view->title = 'Справочный материал';
        $this->view->renderPage = '/components/_articles.phtml';
        $this->view->meta_title = $this->view->title.'. '. $this->pageModule()->getTitle().'.';

        if($this->_request->getParam('path')){

            $this->view->renderPage = '/components/_view_module_article.phtml';

            $mediaModelMapper = new Media_Model_Mapper_Media();
            $mediaItem = $mediaModelMapper->findBy('path', $this->_request->getParam('path'));

            if(is_null($mediaItem))
                throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

            $this->view->title = $mediaItem->getName();
            $this->view->mediaItem = $mediaItem;
            $this->view->meta_title = $this->view->title.'. Справочный материал. '.$this->pageModule()->getTitle().'.';
        }

        $this->view->headTitle($this->view->meta_title);
    }


}





