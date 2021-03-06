<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Plugin_Redirect extends Zend_Controller_Plugin_Abstract
{

    public function preDispatch(Zend_Controller_Request_Abstract $request)
    {
        $layout = Zend_Layout::getMvcInstance();

        $aHostName = array(
            'hansa-flex.pro',
            'hansa-flex.su',
            'hansa-flex.org',
            'xn----7sbavhvfm6b0af.xn--p1ai',
        );

        $hostName = $request->getServer('HTTP_HOST');
        if(in_array($hostName, $aHostName)){
            $layout->setLayout('plug');
            $view = $layout->getView();

            $view->host = ($hostName != 'xn----7sbavhvfm6b0af.xn--p1ai')?$hostName:'ханза-флекс.рф';
        }

        if($request->getParam('fullPath'))
            $this->validatePath($request->getParam('fullPath'));


        if($request->getModuleName() === 'admin' || $request->getModuleName() === 'utils')
            $this->redirectAdmin();
    }

    public function validatePath($path)
    {
        $arrayPath = explode('/',$path);
        if(in_array('category', $arrayPath)){
            $item = array();
            foreach ($arrayPath as $key => $value) {
                if($value === 'category')
                    $item['category_id'] = $arrayPath[$key+1];
                if($value == 'id')
                    $item['product_id'] = $arrayPath[$key+1];
            }
            if(!empty($item))
                $this->redirectCatalogItem($item);
        }
    }

    public function redirectCatalogItem($item)
    {
        $category_id = $item['category_id'];
        $product_id = $item['product_id'];
        $fullPath = '';

        if(!is_null($category_id)){
            $categoryMapper = new Catalog_Model_Mapper_Categories();
            $category = $categoryMapper->find($category_id, new Catalog_Model_Categories());

            if(!is_null($category))
                $fullPath = $category->getFullPath().'/';
        }

        if(!is_null($product_id)){
            $productMapper = new Catalog_Model_Mapper_Products();
            $product = $productMapper->find($product_id, new Catalog_Model_Products());

            if(!is_null($product))
                $fullPath = $product->getFullPath().'/';
        }

        $url = '/catalog/'.$fullPath;

        Zend_Controller_Front::getInstance()->getResponse()->setRedirect($url, 301);
        return;
    }

    public function redirectAdmin()
    {
        $hostHttp = new Zend_Controller_Request_Http();
        $host = $hostHttp->getServer('HTTP_HOST');
        $requestUri = $hostHttp->getServer('REQUEST_URI');

        $url = 'http://admin.'.$host.$requestUri;
        Zend_Controller_Front::getInstance()->getResponse()->setRedirect($url, 301);
        return;
    }
}