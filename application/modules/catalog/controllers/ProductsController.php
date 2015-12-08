<?php

class Catalog_ProductsController extends Zend_Controller_Action
{

    protected $_fullPath = null;
    protected $_currentCategory = null;

    public function init()
    {
        $request = $this->getRequest();
        $this->_fullPath =  $request->getParam('fullPath');
    }

    /**
     * @throws Zend_Controller_Action_Exception
     *
     */
    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categories = new Catalog_Model_Mapper_Categories();
        $category = new Catalog_Model_Categories();

        $category = $categories->findByFulPath($fullPath, $category);

        if(is_null($category))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->setCurrentCategory($category);

        $current_category_id = $category->getId();

        $productsMapper = new Catalog_Model_Mapper_Products();
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

        if($category->getMetaDescription() != ''){
            $meta_description = $category->getMetaDescription();
        }
        else{
            $categoryMapper = new Catalog_Model_Mapper_Categories();
            $parentCategories = $categoryMapper->fetchTreeParentCategories($category->getId());
            $aDescription = array();
            if(!empty($parentCategories)){
                foreach ($parentCategories as $parentCategory) {
                    $aDescription[] = $parentCategory->name;
                }
            }
            $aDescription[] = 'Альфа-Гидро - Каталог продукции';

            $meta_description = implode(", ", array_reverse($aDescription));
        }
        $this->view->meta_description = $meta_description;

        if($category->getMetaKeywords() != ''){
            $meta_keywords = $category->getMetaKeywords();
        }
        else{
            $aKeywords = array();
            if(!empty($entries)){
                foreach ($entries as $propduct) {
                    $sku = $propduct->getSku();
                    $aKeywords[] = str_replace('A', '', $sku);
                    $aKeywords[] = str_replace(' ', '', $sku);
                    $aKeywords[] = str_replace(array(' ','A'), '', $sku);
                }
            }
            $aKeywords[] = $category->getName();
            $meta_keywords = implode(", ", array_reverse($aKeywords));
        }
        $this->view->meta_keywords = $meta_keywords;
    }

    /**
     * @throws Zend_Controller_Action_Exception
     *
     */
    public function viewAction()
    {
        $fullPath =  $this->getFullPath();
        $products = new Catalog_Model_Mapper_Products();
        $product = new Catalog_Model_Products();

        $product = $products->findByFulPath($fullPath, $product);

        if(is_null($product))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $this->view->product = $product;
        $this->view->title = $product->getSku();
        $this->view->secondaryHeader = $product->getName();

        $categoryRel = $products->findCategoryRel($product->getId(), new Catalog_Model_Categories());
        $this->setCurrentCategory($categoryRel);
        $this->view->current_category = $categoryRel->getId();

        if(!is_null($product->getAImages())){
            $draftImages = unserialize($product->getAImages());
            if(!empty($draftImages))
                $this->view->draftImage = $draftImages[0];
        }

        $productsParams = new Catalog_Model_Mapper_ProductParams();
        $select = $productsParams->getDbTable()->select()->order('order ASC');
        $productProrerty = $products->findProductParams($product->getId(), $select);

        if(!empty($productProrerty))
            $this->view->productProperty = $productProrerty;

        $subproducts = new Catalog_Model_Mapper_Subproducts();
        $select = $subproducts->getDbTable()->select()->order('order ASC');
        $modifications = $products->findSubproductsRel($product->getId(), $select);

        if(!empty($modifications)){
            $this->view->modificationsTableValues = $this->modificationsTableValues($modifications);
            $this->view->modifications = $modifications;
        }

        $subproductParams = new Catalog_Model_Mapper_SubproductParams();
        $select = $subproductParams->getDbTable()->select()->order('order ASC');
        $subproductProperty = $products->findSubproductParams($product->getId(), $select);
        if(!empty($subproductProperty)){
            $this->view->subproductProperty = $subproductProperty;

        }

        if($product->getMetaDescription() != ''){
            $meta_description = $product->getMetaDescription();
        }
        else{
            $categoryMapper = new Catalog_Model_Mapper_Categories();
            $parentCategories = $categoryMapper->fetchTreeParentCategories($categoryRel->getId());
            $aDescription = array();
            $aDescription[] = $product->getName();
            if(!empty($parentCategories)){
                foreach ($parentCategories as $parentCategory) {
                    $aDescription[] = $parentCategory->name;
                }
            }
            $aDescription[] = 'Альфа-Гидро - Каталог продукции';

            $meta_description = implode(", ", array_reverse($aDescription));
        }
        $this->view->meta_description = $meta_description;

        if($product->getMetaKeywords() != ''){
            $meta_keywords = $product->getMetaKeywords();
        }
        else{
            $aKeywords = array();
            if(!empty($modifications)){
                foreach ($modifications as $modification) {
                    $sku = $modification->getSku();
                    $aKeywords[] = str_replace('A', '', $sku);
                    $aKeywords[] = str_replace(' ', '', $sku);
                    $aKeywords[] = str_replace(array(' ','A'), '', $sku);
                }
            }
            $aKeywords[] = $product->getSku();
            $aKeywords[] = $product->getName();
            $meta_keywords = implode(", ", array_reverse($aKeywords));
        }
        $this->view->meta_keywords = $meta_keywords;
    }

    public function printAction()
    {
        $fullPath =  $this->getFullPath();
        $products = new Catalog_Model_Mapper_Products();
        $product = new Catalog_Model_Products();

        $product = $products->findByFulPath($fullPath, $product);

        $subproducts = new Catalog_Model_Mapper_Subproducts();
        $select = $subproducts->getDbTable()->select()->order('order ASC');
        $modifications = $products->findSubproductsRel($product->getId(), $select);

        $tableModifications = array();
        $headTable = array();

        if(!empty($modifications)){
            $subproductParams = new Catalog_Model_Mapper_SubproductParams();
            $select = $subproductParams->getDbTable()->select()->order('order ASC');
            $subproductProperty = $products->findSubproductParams($product->getId(), $select);

            $headTable[] = 'Название';
            foreach ($subproductProperty as $property) {
                $headTable[] = $property->name;
            }

            $tableModifications = $this->modificationsTableValues($modifications);
            array_unshift($tableModifications, $headTable);
        }
        //print_r($tableModifications);

        $pdf = new Catalog_Model_PrintPdf();

        // set document information
        $pdf->SetAuthor('Альфа Гидро');
        $pdf->SetTitle($product->getSku().'. '.$product->getName());
        $pdf->SetSubject($product->getSku().'. '.$product->getName());
        $pdf->SetKeywords($product->getSku().', '.$product->getName());

        $pdf->SetFont('', '', 12, '', true);

        $pdf->setProduct($product);

        // Add a page
        $pdf->AddPage();

        $pdf->showImages()
            ->showProperty()
            ->showModificatonTable($tableModifications)
        ;

        $pdf->Output();

        $this->getResponse()
            ->setHeader('Content-Type', 'application/pdf');
        $this->_helper->layout()->disableLayout();
    }

    /**
     * @param array $modifications
     * @return array
     */
    public function modificationsTableValues($modifications)
    {
        $subproducts = new Catalog_Model_Mapper_Subproducts();
        $modificationsTableValues = array();
        if(!empty($modifications)){
            foreach ($modifications as $modification) {
                $modificationPropertyValues = $subproducts->findSubProductParamValue($modification->getId());
                $values = array();
                $values[] = $modification->getSku();
                foreach ($modificationPropertyValues as $modificationPropertyValue) {
                    $values[] = $modificationPropertyValue->getValue();
                }

                $modificationsTableValues[] = $values;
            }
        }

        return $modificationsTableValues;
    }

    /**
     * @return null
     *
     *
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }

    /**
     * @param null $currentCategory
     * @return Catalog_ProductsController
     */
    public function setCurrentCategory($currentCategory)
    {
        $this->_currentCategory = $currentCategory;
        return $this;
    }

    /**
     * @return null
     */
    public function getCurrentCategory()
    {
        return $this->_currentCategory;
    }

}





