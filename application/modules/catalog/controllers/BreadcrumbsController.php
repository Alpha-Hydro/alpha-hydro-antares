<?php

class Catalog_BreadcrumbsController extends Zend_Controller_Action
{
    protected $_category_id = null;
    protected $_product_id = null;

    public function init()
    {
        if($this->_getParam('category'))
            $this->setCategoryId($this->_getParam('category'));

        if($this->_getParam('product'))
            $this->setProductId($this->_getParam('product'));
    }

    public function indexAction()
    {
        $breadcrumbs = new Zend_Navigation();

        $categoriesMapper = new Catalog_Model_Mapper_Categories();

        $category = ($this->getCategoryId())
            ? $categoriesMapper->find($this->getCategoryId(), new Catalog_Model_Categories())
            : null;

        $i = 0;

        if(isset($category) && is_null($this->getProductId())){
            $breadcrumbs->addPage(array(
                'type' => 'uri',
                'label' => $category->getName(),
                'active' => true
            ));
        }

        $parentCategories = $categoriesMapper->fetchTreeParentCategories($category->getParentId());

        if(!is_null($this->getProductId()))
            $parentCategories = $categoriesMapper->fetchTreeParentCategories($this->getCategoryId());

        if (!empty($parentCategories)) {
            foreach ($parentCategories as $parentCategory) {
                $breadcrumbs->addPage (
                    array (
                        "action" => "index",
                        "controller" => "categories",
                        "module" => "catalog",
                        'order'	 => $i,
                        'route'  => 'catalog',
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

    /**
     * @return null
     */
    public function getProductId()
    {
        return $this->_product_id;
    }

    /**
     * @param null $product_id
     * @return $this
     */
    public function setProductId($product_id)
    {
        $this->_product_id = $product_id;
        return $this;
    }


}

