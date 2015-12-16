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
        $categories = new Catalog_Model_Mapper_Categories();

        $select = $categories->getDbTable()->select();
        $select->where('parent_id = ?', 0)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $entries = $categories->fetchAll($select);

        $this->view->entries = $entries;
    }


}

