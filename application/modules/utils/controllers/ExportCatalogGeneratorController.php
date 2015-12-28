<?php

class Utils_ExportCatalogGeneratorController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $productMapper = new Catalog_Model_Mapper_Products();
        $select = $productMapper->getDbTable()->select();

        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->limit(3)
            ->order('sorting ASC');

        $products = $productMapper->fetchAll($select);

        $expProducts = array();

        if(!empty($products)){
            $item = array();
            foreach ($products as $product) {
                $expProducts[] = array('item','name', 'image', 'uri');
                $item['sku'] = $product->getSku();
                $item['name'] = $product->getName();
                $item['image'] = $product->getImage();
                $item['uri'] = $product->getFullPath();
                $expProducts[] = $item;

                $property = $this->getProductParamsCsv($product);
                if(!empty($property)){
                    $expProducts[] = array('properties');
                    $expProducts[] = $property['name'];
                    $expProducts[] = $property['value'];
                }
                //$expProducts[] = array_merge($item, $property);
                //$this->fileToCsv($item);
            }

            //$expProducts = $this->arrayToCsv($expProducts);
        }


        $fp = fopen('./tmp/file.csv', 'w');
        foreach ($expProducts as $fields) {
            fputcsv($fp, $fields, ";");
        }
        fclose($fp);

        /*$out = fopen('php://output', 'w');
        fputcsv($out, $expProducts);
        fclose($out);*/

        $this->view->array = $expProducts;

    }

    public function fileToCsv($fields)
    {
        $fp = fopen('./tmp/file.csv', 'a');
        fputcsv($fp, $fields, ";");
        fclose($fp);
    }

    /**
     * @param Catalog_Model_Products $product
     * @return string
     */
    public function getProductParamsCsv(Catalog_Model_Products $product)
    {
        $productMapper = new Catalog_Model_Mapper_Products();
        $productsParamsMapper = new Catalog_Model_Mapper_ProductParams();
        $select = $productsParamsMapper->getDbTable()->select()->order('order ASC');
        $productParams = $productMapper->findProductParams($product->getId(), $select);

        $property = array();
        if(!empty($productParams)){
            foreach ($productParams as $key => $productParam) {
                $property['name']['property_'.$key.'_name'] = $this->toWindow($productParam->getName());
                $property['value']['property_'.$key.'_value'] = $this->toWindow($productParam->getValue());
            }
        }

        return $property;
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
     */
    public function arrayToCsv( array &$fields, $delimiter = ';', $enclosure = '"', $encloseAll = false, $nullToMysqlNull = false ) {
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

    public function toWindow($ii){
        return iconv( "utf-8", "windows-1251",$ii);
    }

}

