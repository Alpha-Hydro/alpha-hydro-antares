<?php

class Oil_IndexController extends Zend_Controller_Action
{
    protected $_page_id = null;

    /**
     * @var Pages_Model_Mapper_Pages
     *
     */
    protected $_pagesMapper = null;

    /**
     * @var Pages_Model_Pages
     *
     */
    protected $_page = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     */
    protected $_redirector = null;

    /**
     * @var Oil_Model_Mapper_OilCategories
     *
     */
    protected $_oilCategoriesMapper = null;

    /**
     * @var Oil_Model_Mapper_Oil
     *
     */
    protected $_oilMapper = null;

    protected $_count_item_on_page = null;
    protected $_categories = array();
    protected $_authUser = null;

    public function init()
    {
        $this->_count_item_on_page = 5;
        $this->view->adminPath = 'oil';

        $this->_pagesMapper = new Pages_Model_Mapper_Pages();
        $this->_redirector = $this->_helper->getHelper('Redirector');

        $this->_oilCategoriesMapper = new Oil_Model_Mapper_OilCategories();
        $select = $this->_oilCategoriesMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $oilCategories = $this->_oilCategoriesMapper->fetchAll($select);
        $this->setCategories($oilCategories);

        $this->view->categories = $this->getCategories();

        $this->_authUser = Zend_Auth::getInstance()->getIdentity();
        if(!is_null($this->_authUser))
            $this->view->authUser = $this->_authUser;
    }

    public function indexAction()
    {
        $page = $this->pageModule();

        $this->view->title = 'Масла гидравлические';
        $request = $this->getRequest();

        if(!is_null($request->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){
            $page = $this->pageModule();

            $id = ($request->getParam('json') != '')
                ?$this->getRequest()->getParam('json')
                :$page->getId();

            $this->forward('json', 'pages', 'admin', array('id' => $id));
            return;
        }

        $this->view->page = $page;

        $meta_title = (!$page->getMetaTitle())
            ? $page->getTitle()
            : $page->getMetaTitle();
        $this->view->meta_title = $meta_title;

        $meta_description = (!$page->getMetaDescription())
            ? 'Альфа-Гидро - Масла и очистители.'
            : $page->getMetaDescription();
        $this->view->meta_description = $meta_description;

        $meta_keywords = (!$page->getMetaKeywords())
            ? ''
            : $page->getMetaKeywords();
        $this->view->meta_keywords = $meta_keywords;

        /*$oilMapper = new Oil_Model_Mapper_Oil();
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
            $this->view->meta_description = 'Альфа-Гидро - Масла гидравлические. Высокоэффективные гидравлические масла стандартов HLP / HVLP глубокой селективной очистки с многофункциональным пакетом присадок для систем гидроприводов и гидроуправления строительной, дорожной, лесозаготовительной, подъемно-транспортной техники и других машин и агрегатов.';
            $this->view->meta_keywords = 'масло гидравлическое, HLP, HVLP, Зима 22, ZF 48 68, МГЕ-46В, присадки, глубокой очистки';
        }*/

    }

    public function viewAction()
    {
        $request = $this->getRequest();

        $oilPathItem = $request->getParam('fullPath');
        $oilMapper = new Oil_Model_Mapper_Oil();

        $oilItem = $oilMapper->findByPath($oilPathItem, new Oil_Model_Oil());

        if(is_null($oilItem))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $this->forward('json', 'oil', 'admin', array('id' => $oilItem->getId()));
            return;
        }

        $this->view->pageItem = $oilItem;
        $this->view->meta_description = $oilItem->getMetaDescription();
        $this->view->meta_keywords = $oilItem->getMetaKeywords();
        $this->view->adminPath = 'oil/edit/'.$oilItem->getId();
    }


    public function pageModule()
    {
        $pageModulePath = $this->getRequest()->getModuleName();

        $page = $this->_pagesMapper->findByPath($pageModulePath, new Pages_Model_Pages());

        if(is_null($page))
            throw new Zend_Controller_Action_Exception("Раздел '".$pageModulePath."' не добален в таблицу 'Pages'", 404);

        return $page;
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

    /**
     * @param array $categories
     * @return Oil_IndexController
     */
    public function setCategories($categories)
    {
        $this->_categories = $categories;
        return $this;
    }

    /**
     * @return array
     */
    public function getCategories()
    {
        return $this->_categories;
    }
}



