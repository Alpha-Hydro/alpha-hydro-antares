<?php

class Utils_ExportCatalogGeneratorController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {

        //Основной массив
        $expProducts = array();

        /*$category_id = 0;

        //категории 1 уровня
        $categories = $this->getSubCategory($category_id);

        //Ищем подкатегорию в которой есть товары
        $treeCategories = array();
        foreach ($categories as $category) {
            $treeCategories[] = $this->getCategoryArray($category);

            $category_id = $category->getId();
            $subCategories = $this->getSubCategory($category_id);
        }*/


        $treeCategories = $this->fetchTreeSubCategory();


        $productMapper = new Catalog_Model_Mapper_Products();
        $select = $productMapper->getDbTable()->select();

        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->limit(3)
            ->order('sorting ASC');

        $products = $productMapper->fetchAll($select);

        if(!empty($products)){
            foreach ($products as $product) {
                $expProducts[] = array('item','name', 'image', 'uri', 'description', 'note');

                $item = $this->getItemArray($product, false);

                /*$item['properties'] = $this->getProductParams($product);
                $item['modifications'] = $this->getModificationTableValues($product);*/
                $expProducts[] = $item;

                $property = $this->getProductParamsCsv($product, false);
                if(!empty($property)){
                    $expProducts[] = array('propertiesTable');
                    $expProducts[] = $property['name'];
                    $expProducts[] = $property['value'];
                }

                $modifications = $this->getModificationTableValues($product, false);
                if(!empty($modifications)){
                    $expProducts[] = array('modificationsTable');
                    foreach ($modifications as $modification) {
                        $expProducts[] = $modification;
                    }
                }
            }
        }

        $this->fileToCsv('./tmp/file.csv', $expProducts);

        $this->view->array = $treeCategories;

    }

    public function fileToCsv($filename, array &$fields, $mode = 'w')
    {
        $fp = fopen($filename, $mode);
        foreach ($fields as $field) {
            fputcsv($fp, $field, ";");
        }
        fclose($fp);

        /*$out = fopen('php://output', 'w');
        fputcsv($out, $expProducts);
        fclose($out);*/
    }


    public function getSubCategory($category_id)
    {
        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $select = $categoryMapper->getDbTable()->select();
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('parent_id = ?', $category_id)
            ->limit(1)
            ->order('sorting ASC');

        $categories = $categoryMapper->fetchAll($select);

        return $categories;
    }


    public function fetchTreeSubCategory($category_id = null)
    {
        if(is_null($category_id))
            $category_id = 0;

        $tree = array();
        $categories = $this->getSubCategory($category_id);
        if(!empty($categories)){
            foreach ($categories as $category) {
                $aCategory = $this->getCategoryArray($category);
                $subCategory = $this->getSubCategory($category->getId());
                if(!empty($subCategory)){
                    $aCategory['subCategory'] = $this->fetchTreeSubCategory($category->getId());
                }
                $tree[] = $aCategory;
            }
        }
        return $tree;
    }

    /**
     * @param Catalog_Model_Categories $category
     * @return array
     */
    public function getCategoryArray(Catalog_Model_Categories $category)
    {
        $item = array();

        $item['name'] = $category->getName();
        $item['path'] = $category->getPath();

        return $item;
    }

    /**
     * @param Catalog_Model_Products $product
     * @param bool $toWin
     * @return array
     */
    public function getItemArray(Catalog_Model_Products $product, $toWin = false)
    {
        $item = array();

        $item['sku'] = $product->getSku();
        $item['name'] = (!$toWin)
            ?$product->getName()
            :$this->_toWindow($product->getName());
        $item['image'] = $product->getImage();
        $item['uri'] = $product->getFullPath();
        $item['description'] = (!$toWin)
            ?$product->getDescription()
            :$this->_toWindow($product->getDescription());
        $item['note'] = (!$toWin)
            ?$product->getNote()
            :$this->_toWindow($product->getNote());

        return $item;
    }

    /**
     * @param Catalog_Model_Products $product
     * @param bool $toWin
     * @return string
     */
    public function getProductParamsCsv(Catalog_Model_Products $product, $toWin = false)
    {
        $productMapper = new Catalog_Model_Mapper_Products();
        $productsParamsMapper = new Catalog_Model_Mapper_ProductParams();
        $select = $productsParamsMapper->getDbTable()->select()->order('order ASC');
        $productParams = $productMapper->findProductParams($product->getId(), $select);

        $property = array();
        if(!empty($productParams)){
            foreach ($productParams as $key => $productParam) {
                $property['name']['property_'.$key.'_name'] = (!$toWin)
                    ? $productParam->getName()
                    : $this->_toWindow($productParam->getName());
                $property['value']['property_'.$key.'_value'] = (!$toWin)
                    ? $productParam->getValue()
                    : $this->_toWindow($productParam->getValue());
            }
        }

        return $property;
    }

    /**
     * @param Catalog_Model_Products $product
     * @param bool $toWin
     * @return array
     */
    public function getModificationTableValues(Catalog_Model_Products $product, $toWin = false)
    {
        $productMapper = new Catalog_Model_Mapper_Products();
        $subproducts = new Catalog_Model_Mapper_Subproducts();
        $select = $subproducts->getDbTable()->select()->order('order ASC');
        $modifications = $productMapper->findSubproductsRel($product->getId(), $select);
        $modificationsTableValues = array();
        if(!empty($modifications)){
            $modificationsTableValues['headTable'] = $this->getModificationTableTitle($product, $toWin);
            foreach ($modifications as $modification) {
                $modificationPropertyValues = $subproducts->findSubProductParamValue($modification->getId());
                $values = array();
                $values[] = $modification->getSku();
                foreach ($modificationPropertyValues as $modificationPropertyValue) {
                    $values[] = (!$toWin)
                        ? $modificationPropertyValue->getValue()
                        : $this->_toWindow($modificationPropertyValue->getValue());
                }

                $modificationsTableValues[] = $values;
            }
        }

        return $modificationsTableValues;
    }

    /**
     * @param Catalog_Model_Products $product
     * @return array
     */
    public function getModificationTableTitle(Catalog_Model_Products $product, $toWin = false)
    {
        $productMapper = new Catalog_Model_Mapper_Products();
        $subproductParams = new Catalog_Model_Mapper_SubproductParams();
        $select = $subproductParams->getDbTable()->select()->order('order ASC');
        $subproductProperty = $productMapper->findSubproductParams($product->getId(), $select);
        $modificationTableTitle = array();
        if(!empty($subproductProperty)){
            $modificationTableTitle[] = (!$toWin)
                ? 'Название'
                : $this->_toWindow('Название');
            foreach ($subproductProperty as $name) {
                $modificationTableTitle[] = (!$toWin)
                    ? $name->getName()
                    :$this->_toWindow($name->getName());
            }
        }

        return $modificationTableTitle;
    }

    /**
     * @param Catalog_Model_Products $product
     * @return array
     */
    public function getProductParams(Catalog_Model_Products $product)
    {
        $productMapper = new Catalog_Model_Mapper_Products();
        $productsParamsMapper = new Catalog_Model_Mapper_ProductParams();
        $select = $productsParamsMapper->getDbTable()->select()->order('order ASC');
        $productParams = $productMapper->findProductParams($product->getId(), $select);

        $property = array();
        if(!empty($productParams)){
            foreach ($productParams as $productParam) {
                $value['name'] = $productParam->getName();
                $value['value'] = $productParam->getValue();
                $property[] = $value;
            }
        }

        return $property;
    }

    /**
     * Formats a line (passed as a fields  array) as CSV and returns the CSV as a string.
     * Adapted from http://us3.php.net/manual/en/function.fputcsv.php#87120
     * @param array $fields
     * @param string $delimiter
     * @param string $enclosure
     * @param bool $encloseAll
     * @param bool $nullToMysqlNull
     * @return string
     */
    private function _arrayToCsv( array &$fields, $delimiter = ';', $enclosure = '"', $encloseAll = false, $nullToMysqlNull = false ) {
        $delimiter_esc = preg_quote($delimiter, '/');
        $enclosure_esc = preg_quote($enclosure, '/');

        $output = array();
        foreach ( $fields as $field ) {
            if ($field === null && $nullToMysqlNull) {
                $output[] = 'NULL';
                continue;
            }

            // Enclose fields containing $delimiter, $enclosure or whitespace
            if ( $encloseAll || preg_match( "/(?:${delimiter_esc}|${enclosure_esc}|\s)/", $field ) ) {
                $output[] = $enclosure . str_replace($enclosure, $enclosure . $enclosure, $field) . $enclosure;
            }
            else {
                $output[] = $field;
            }
        }

        return implode( $delimiter, $output );
    }

    private function _toWindow($ii){
        return iconv( "utf-8", "windows-1251",$ii);
    }

}

