<?php

class Catalog_ProductsController extends Zend_Controller_Action
{

    protected $_fullPath = null;

    public function init()
    {
        $request = $this->getRequest();
        $this->_fullPath =  $request->getParam('fullPath');
    }

    /**
     * @throws Zend_Controller_Action_Exception
     */
    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categories = new Model_Mapper_Categories();
        $category = new Model_Categories();

        $category = $categories->findByFulPath($fullPath, $category);

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $current_category_id = $category->getId();

        $productsMapper = new Model_Mapper_Products();
        $select = $productsMapper->getDbTable()
            ->select()
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $entries = $categories->fetchProductsRel($current_category_id, $select);

        if(!empty($entries))
            $this->view->entries = $entries;

        $this->view->full_path_category = $this->getFullPath();
        $this->view->title = $category->getName();
        $this->view->current_category = $current_category_id;
    }

    /**
     * @throws Zend_Controller_Action_Exception
     */
    public function viewAction()
    {
        $fullPath =  $this->getFullPath();
        $products = new Model_Mapper_Products();
        $product = new Model_Products();

        $product = $products->findByFulPath($fullPath, $product);

        if(is_null($product))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->product = $product;
        $this->view->title = $product->getSku();
        $this->view->secondaryHeader = $product->getName();

        $categoryRel = $products->findCategoryRel($product->getId(), new Model_Categories());
        $this->view->current_category = $categoryRel->getId();

        if(!is_null($product->getAImages())){
            $draftImages = unserialize($product->getAImages());
            if(!empty($draftImages))
                $this->view->draftImage = $draftImages[0];
        }

        //$productProrerty = $this->view->getProductProperty($product->getId());
        $productsParams = new Model_Mapper_ProductParams();
        $select = $productsParams->getDbTable()->select()->order('order ASC');
        $productProrerty = $products->findProductParams($product->getId(), $select);

        if(!empty($productProrerty))
            $this->view->productProperty = $productProrerty;

        $subproducts = new Model_Mapper_Subproducts();
        $select = $subproducts->getDbTable()->select()->order('order ASC');
        $modifications = $products->findSubproductsRel($product->getId(), $select);

        if(!empty($modifications)){
            $modificationsTableValues = array();
            foreach ($modifications as $modification) {
                $modificationPropertyValues = $subproducts->findSubProductParamValue($modification->getId());
                $values = array();
                $values['name'] = $modification->getSku();
                foreach ($modificationPropertyValues as $modificationPropertyValue) {
                    $values[] = $modificationPropertyValue->getValue();
                }

                $modificationsTableValues[] = $values;
            }

            $this->view->modificationsTableValues = $modificationsTableValues;

            $this->view->modifications = $modifications;
        }


        $subproductParams = new Model_Mapper_SubproductParams();
        $select = $subproductParams->getDbTable()->select()->order('order ASC');
        $subproductProperty = $products->findSubproductParams($product->getId(), $select);
        if(!empty($subproductProperty))
            $this->view->subproductProperty = $subproductProperty;
    }

    /**
     * @return null
     *
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }


}



