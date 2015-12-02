<?php

class Oil_IndexController extends Zend_Controller_Action
{

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 10;
    }

    public function indexAction()
    {
        $this->view->title = 'Масла';
        $request = $this->getRequest();

        $oilMapper = new Oil_Model_Mapper_Oil();
        $select = $oilMapper->getDbTable()->select();
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $oilItems = $oilMapper->fetchAll($select);

        if(!empty($oilItems)){
            if(count($oilItems) > $this->getCountItemOnPage()){
                $oilItemPages = array_chunk($oilItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($oilItemPages))
                    $currentPage = count($oilItemPages)-1;

                $oilItems = $oilItemPages[$currentPage];

                $this->view->countPage = count($oilItemPages);
                $this->view->currentPage = $currentPage+1;
            }

            $this->view->pageItems = $oilItems;
        }

    }

    public function viewAction()
    {
        $request = $this->getRequest();

        $oilPathItem = $request->getParam('oil_path_item');
        $oilMapper = new Oil_Model_Mapper_Oil();

        $oilItem = $oilMapper->findByPath($oilPathItem, new Oil_Model_Oil());

        if(is_null($oilItem))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->pageItem = $oilItem;
    }

    /**
     * @param null $count_item_on_page
     * @return Oil_IndexController
     *
     */
    public function setCountItemOnPage($count_item_on_page)
    {
        $this->_count_item_on_page = $count_item_on_page;
        return $this;
    }

    /**
     * @return null
     *
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }
}



