<?php

class Search_IndexController extends Zend_Controller_Action
{
    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 16;

        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('autocomplete', 'html')
            ->initContext('html');

        $this->view->assign(array(
            'adminPath' => 'search/'
        ));
    }

    public function indexAction()
    {
        $this->view->title = 'Результаты поиска';
        $request = $this->getRequest();
        $query = $request->getParam('query');


        if(!empty($query)){
            $query = str_replace(array('.',',',' ','-','_','/','\\','*','+','&','^','%','#','@','!','(',')','~','<','>',':',';','"',"'","|"), '', $query);
            $nameQuery = $request->getParam('query');

            $productsMapper = new Catalog_Model_Mapper_Products();
            $select = $productsMapper->getDbTable()->select();

            $select->where("(`s_name` LIKE '%$query%' OR `name` LIKE '%$nameQuery%')")
                ->order("CHAR_LENGTH(sku) ASC");

            $products = $productsMapper->fetchAll($select);

            if(!empty($products)){
                if(count($products) > $this->getCountItemOnPage()){
                    $productsPages = array_chunk($products, $this->getCountItemOnPage());

                    $currentPage = 0;

                    if($request->getParam('page') && $request->getParam('page')>0)
                        $currentPage = $request->getParam('page')-1;

                    if($request->getParam('page') && $request->getParam('page')>count($productsPages))
                        $currentPage = count($productsPages)-1;

                    $products = $productsPages[$currentPage];
                    
                    $this->view->assign(array(
                        'countPage' => count($productsPages),
                        'currentPage' => $currentPage+1,
                        'query' => $request->getParam('query'),
                    ));
                }

                $this->view->assign('products', $products);
            }
        }
    }

    public function autocompleteAction()
    {
        $this->_helper->layout()->disableLayout();
        $query = $this->getRequest()->getParam('query');
        
        $productsMapper = new Catalog_Model_Mapper_Products();

        if($this->_request->getParam('query')){
            $query = str_replace(array('.',',',' ','-','_','/','\\','*','+','&','^','%','#','@','!','(',')','~','<','>',':',';','"',"'","|"), '', $query);
            //$nameQuery = $this->_request->getParam('query');
            //$sQuery = "(`s_name` LIKE '%$query%' OR `name` LIKE '%$nameQuery%')";
            $sQuery = "MATCH(s_name, sku, name, meta_keywords) AGAINST ('+$query*' IN BOOLEAN MODE)";

            $select = $productsMapper->getDbTable()->select();

            $select
                ->where('active != ?', 0)
                ->where('deleted != ?', 1)
                ->where($sQuery)
                ->limit(15)
                ->order("CHAR_LENGTH(sku) ASC");

            $products = $productsMapper->fetchAll($select);

            if(!empty($products)){
                $this->view->assign('products', $products);
            }
        }
    }

    /**
     * @param null $count_item_on_page
     * @return Search_IndexController
     */
    public function setCountItemOnPage($count_item_on_page)
    {
        $this->_count_item_on_page = $count_item_on_page;
        return $this;
    }

    /**
     * @return null
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }


}



