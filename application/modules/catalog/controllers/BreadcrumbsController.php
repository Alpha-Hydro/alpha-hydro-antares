<?php

class Catalog_BreadcrumbsController extends Zend_Controller_Action
{
    protected $_category_id = null;

    public function init()
    {
        if($this->_getParam('category'))
            $this->setCategoryId($this->_getParam('category'));
    }

    public function indexAction()
    {
        $breadcrumbs = new Zend_Navigation();

        //$breadcrumbs->

        $categoriesMapper = new Application_Model_Mapper_Categories();


        $category = ($this->getCategoryId())
            ? $categoriesMapper->find($this->getCategoryId(), new Application_Model_Categories())
            : null;

        $i = 0;

        if(isset($category)){
            $breadcrumbs->addPage(array(
                'type' => 'uri',
                'label' => $category->getName(),
                'active' => true
            ));
        }

        foreach ($categoriesMapper->fetchTreeParentCategories($category->getParentId()) as $parentCategory) {
            $breadcrumbs->addPage (
                array (
                    "action" => "index",
                    "controller" => "categories",
                    "module" => "catalog",
                    'order'	 => $i,
                    'route'  => 'categories',
                    "params" => array(
                        'fullPath'=>($parentCategory->id != 0) ? $parentCategory->full_path : null,
                    ),
                    'reset_params' => true,
                    'encode_url' => false,
                    'label' => $parentCategory->name,
                )
            );
            $i--;
        }


        $breadcrumbs->addPage(
            new Zend_Navigation_Page_Uri(
                array (
                    'label' => 'Каталог продукции',
                    'uri' => '/catalog/',
                    'order' => $i
                )
            )
        );

        $breadcrumbs->addPage(
            new Zend_Navigation_Page_Uri(
                array (
                    'label' => 'Главная',
                    'uri' => '/',
                    'order' => $i-1
                )
            )
        );

        $this->view->breadcrumbs = $breadcrumbs;
    }

    /**
     * @param null $category_id
     * @return Catalog_BreadcrumbsController
     */
    public function setCategoryId($category_id)
    {
        $this->_category_id = $category_id;
        return $this;
    }

    /**
     * @return null
     */
    public function getCategoryId()
    {
        return $this->_category_id;
    }


}

