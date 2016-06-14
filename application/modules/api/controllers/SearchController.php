<?php

class Api_SearchController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $productsMapper = new Catalog_Model_Mapper_Products();

        $jsonData = array();

        if($this->_request->getParam('query')){
            $query = $this->_request->getParam('query');
            $query = str_replace(array('.',',',' ','-','_','/','\\','*','+','&','^','%','#','@','!','(',')','~','<','>',':',';','"',"'","|"), '', $query);
            $nameQuery = $this->_request->getParam('query');

            $select = $productsMapper->getDbTable()->select();
            //$sQuery = "(`s_name` LIKE '%$query%' OR `name` LIKE '%$nameQuery%')";
            $sQuery = "MATCH(s_name, sku, name) AGAINST ('+$query*' IN BOOLEAN MODE)";

            $select->where($sQuery)
                ->limit(15)
                ->order("CHAR_LENGTH(sku) ASC");

            $products = $productsMapper->fetchAll($select, true);

            $products && $jsonData = $products;

        }

        $this->_helper->json->sendJson($jsonData);
    }


}

