<?php

class Catalog_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        $this->view->meta_description = 'Альфа-Гидро - Каталог продукции: Гидравлическое оборудование, гидрокомпоненты, рукава высокого давления, шланги, втулки и фитинги, защита для шлангов, БРС, скобы, трубы, соединительная арматура, краны, манометры, уплотнительная техника.';
        $this->view->meta_keywords = 'каталог, оборудование, гидрокомпоненты, РВД, шланги, втулки, фитинги, защита для шлангов, БРС, скобы, трубы, арматура, краны, манометры, уплотнители.';
        $this->view->adminPath = '';
    }

    public function indexAction()
    {
        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){
            $pageCatalog = $this->pageModule();

            $id = ($this->getRequest()->getParam('json') != '')
                ?$this->getRequest()->getParam('json')
                :$pageCatalog->getId();

            $this->forward('json', 'pages', 'admin', array('id' => $id));
            return;
        }

        $categories = new Catalog_Model_Mapper_Categories();

        $select = $categories->getDbTable()->select();
        $select->where('parent_id = ?', 0)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $entries = $categories->fetchAll($select);

        $this->view->entries = $entries;
    }

    /**
     * @return null|Pages_Model_Pages
     * @throws Zend_Controller_Action_Exception
     */
    public function pageModule()
    {
        $pagesMapper = new Pages_Model_Mapper_Pages();
        $pageCatalogPath = $this->getRequest()->getModuleName();

        $page = $pagesMapper->findByPath($pageCatalogPath, new Pages_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Раздел '".$pageCatalogPath."' не добален в таблицу 'Pages'", 404);

        return $page;
    }


}

