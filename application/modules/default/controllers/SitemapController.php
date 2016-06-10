<?php

class SitemapController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // Disable Layout
        $this->view->layout()->disableLayout();
        $this->_helper->viewRenderer->setNoRender(true);

        // Output XML than HTML
        $this->getResponse()->setHeader('Content-Type', 'text/xml; charset=utf-8');

        $cache = Zend_Registry::get('cache');
        $hostHttp = new Zend_Controller_Request_Http();
        $host = $hostHttp->getServer('HTTP_HOST');

        $cacheName = 'sitemap_'.str_replace(array('.','-'),'_',$host);
        //Zend_Debug::dump($cacheName);

        if(!$sitemap = $cache->load($cacheName)){
            $sitemap = new Zend_Navigation();

            $pageMapper = new Default_Model_Mapper_Pages();
            $select = $pageMapper->getDbTable()->select();
            $pages = $pageMapper->fetchAll($select);

            if (!empty($pages)) {
                foreach ($pages as $page) {
                    if($page->getPath() != ''){
                        $url = ($page->getPath() != 'home')? $page->getPath().'/' : '';
                        $sitemap->addPage(array(
                            'type' => 'uri',
                            'uri' => '/'.$url,
                        ));
                    }
                }
            }

            $sitemap->addPages(array(
                array(
                    'type' => 'uri',
                    'uri' => '/catalog/',
                ),
                array(
                    'type' => 'uri',
                    'uri' => '/pipeline/',
                ),
                array(
                    'type' => 'uri',
                    'uri' => '/oil/',
                ),
                array(
                    'type' => 'uri',
                    'uri' => '/forum/',
                ),
                array(
                    'type' => 'uri',
                    'uri' => '/search/',
                ),
            ));

            $catalogCategoriesMapper = new Catalog_Model_Mapper_Categories();
            $this->_addPagesSitemap($sitemap, $catalogCategoriesMapper);

            $catalogProductsMapper = new Catalog_Model_Mapper_Products();
            $this->_addPagesSitemap($sitemap, $catalogProductsMapper);

            $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
            $this->_addPagesSitemap($sitemap, $manufactureCategoriesMapper);

            $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
            $this->_addPagesSitemap($sitemap, $manufactureMapper);

            $oilMapper = new Oil_Model_Mapper_Oil();
            $this->_addPagesSitemap($sitemap, $oilMapper);

            $sitemap->addPages(array(
                array(
                    'type' => 'uri',
                    'uri' => '/forum/question/',
                ),
                array(
                    'type' => 'uri',
                    'uri' => '/forum/review/',
                ),
                array(
                    'type' => 'uri',
                    'uri' => '/forum/gravamen/',
                ),
            ));

            $mediaCategoriesMapper = new Media_Model_Mapper_MediaCategories();
            $this->_addPagesSitemap($sitemap, $mediaCategoriesMapper);

            $mediaMapper = new Media_Model_Mapper_Media();
            $this->_addPagesSitemap($sitemap, $mediaMapper);

            $cache->save($sitemap, $cacheName, array('sitemap'));
        }

        $this->view->navigation($sitemap);

        // Output the data.
        echo $this->view->navigation()->sitemap();
    }

    /**
     * @param Zend_Navigation $sitemap
     * @param $itemsMapper Catalog_Model_Mapper_Categories | Catalog_Model_Mapper_Products | Manufacture_Model_Mapper_ManufactureCategories | Manufacture_Model_Mapper_Manufacture | Pages_Model_Mapper_Pages | Pipeline_Model_Mapper_PipelineCategories | Pipeline_Model_Mapper_Pipeline | Oil_Model_Mapper_OilCategories | Oil_Model_Mapper_Oil | Media_Model_Mapper_MediaCategories | Media_Model_Mapper_Media
     * @return Zend_Navigation
     * @throws Zend_Navigation_Exception
     */
    protected function _addPagesSitemap(Zend_Navigation $sitemap, $itemsMapper)
    {
        $colsTable = $itemsMapper->getDbTable()->info('cols');
        //Zend_Debug::dump($colsTable);

        $baseUri = strtolower($this->_getNameModule($itemsMapper));
        $sectionUri = ($baseUri != 'page')?'/'.$baseUri.'/':'/';

        $cache = Zend_Registry::get('cache');
        $cacheName = $this->_getNameSpace($itemsMapper).'_All_Filter_deleted_active';

        if(!$items = $cache->load($cacheName)){
            $select = $itemsMapper->getDbTable()->select();
            $select->where('deleted != ?', 1)
                ->where('active != ?', 0)
                ->order('sorting ASC');
            $items = $itemsMapper->fetchAll($select);

            $cache->save($items, $cacheName, array($this->_getNameModule($itemsMapper), $this->_getNameSpace($itemsMapper)));
        }

        if (!empty($items)) {
            foreach ($items as $item) {
                $uri = (in_array('full_path', $colsTable))? $item->getFullPath() : $item->getPath();
                if($uri != ''){
                    $sitemap->addPage(array(
                        'type' => 'uri',
                        'uri' => $sectionUri.$uri.'/',
                    ));
                }
            }
        }

        return $sitemap;
    }

    /**
     * @param $itemsMapper Catalog_Model_Mapper_Categories | Catalog_Model_Mapper_Products | Manufacture_Model_Mapper_ManufactureCategories | Manufacture_Model_Mapper_Manufacture | Pages_Model_Mapper_Pages | Pipeline_Model_Mapper_PipelineCategories | Pipeline_Model_Mapper_Pipeline | Oil_Model_Mapper_OilCategories | Oil_Model_Mapper_Oil | Media_Model_Mapper_MediaCategories | Media_Model_Mapper_Media
     * @return string
     */
    protected function _getNameSpace($itemsMapper)
    {
        $ns = explode('_', get_class($itemsMapper));
        return array_pop($ns);
    }


    /**
     * @param $itemsMapper Catalog_Model_Mapper_Categories | Catalog_Model_Mapper_Products | Manufacture_Model_Mapper_ManufactureCategories | Manufacture_Model_Mapper_Manufacture | Pages_Model_Mapper_Pages | Pipeline_Model_Mapper_PipelineCategories | Pipeline_Model_Mapper_Pipeline | Oil_Model_Mapper_OilCategories | Oil_Model_Mapper_Oil | Media_Model_Mapper_MediaCategories | Media_Model_Mapper_Media
     * @return string
     */
    protected function _getNameModule($itemsMapper)
    {
        $nm = explode('_', get_class($itemsMapper));
        return array_shift($nm);
    }
}
