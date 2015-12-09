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
        $this->addPagesSitemap($sitemap, $catalogCategoriesMapper, 'catalog', true);

        $catalogProductsMapper = new Catalog_Model_Mapper_Products();
        $this->addPagesSitemap($sitemap, $catalogProductsMapper, 'catalog', true);

        $manufactureCategoriesMapper = new Manufacture_Model_Mapper_ManufactureCategories();
        $this->addPagesSitemap($sitemap, $manufactureCategoriesMapper, 'manufacture', false);

        $manufactureMapper = new Manufacture_Model_Mapper_Manufacture();
        $this->addPagesSitemap($sitemap, $manufactureMapper, 'manufacture', true);

        $oilMapper = new Oil_Model_Mapper_Oil();
        $this->addPagesSitemap($sitemap, $oilMapper, 'oil', false);

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
        $this->addPagesSitemap($sitemap, $mediaCategoriesMapper, 'media', false);

        $mediaMapper = new Media_Model_Mapper_Media();
        $this->addPagesSitemap($sitemap, $mediaMapper, 'media', true);

        $this->view->navigation($sitemap);

        // Output the data.
        echo $this->view->navigation()->sitemap();
    }

    protected function addPagesSitemap(Zend_Navigation $sitemap, $itemsMapper, $baseUri = '', $fullPath = true)
    {
        $sectionUri = ($baseUri != '')?'/'.$baseUri.'/':'/';
        $select = $itemsMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');
        $items = $itemsMapper->fetchAll($select);
        if (!empty($items)) {
            foreach ($items as $item) {
                $uri = ($fullPath)? $item->getFullPath() : $item->getPath();
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
}
