<?php

class Search_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('autocomplete', 'html')
            ->initContext('html');
    }

    public function indexAction()
    {
        $this->view->title = 'Поиск';
    }

    public function autocompleteAction()
    {
        $query = $this->getRequest()->getParam('query');

        if(!empty($query)){
            $query = str_replace(array('.',',',' ','-','_','/','\\','*','+','&','^','%','#','@','!','(',')','~','<','>',':',';','"',"'","|"), '', $query);
            $nameQuery = $this->getRequest ()->getParam('query');

            $productsMapper = new Catalog_Model_Mapper_Products();
            $select = $productsMapper->getDbTable()->select();

            $select->where("(`s_name` LIKE '%$query%' OR `name` LIKE '%$nameQuery%')")
                ->limit(15)
                ->order("CHAR_LENGTH(sku) ASC");

            $products = $productsMapper->fetchAll($select);

            if(!empty($products))
                $this->view->products = $products;
        }

    }


}



