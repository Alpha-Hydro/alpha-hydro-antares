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
                $item['sku'] = $product->getSku();
                $item['name'] = $product->getName();
                $item['image'] = $product->getImage();
                $item['uri'] = $product->getFullPath();
                $expProducts[] = $item;
            }
            //$expProducts = $this->arrayToCsv($expProducts);
        }

        $fp = fopen('./tmp/file.csv', 'w');
        foreach ($expProducts as $fields) {
            fputcsv($fp, $fields, ";");
        }
        fclose($fp);

        $this->view->array = $expProducts;

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


}

