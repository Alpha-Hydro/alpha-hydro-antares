<?php

class Utils_XmlCatalogGeneratorController extends Zend_Controller_Action
{

    protected $_contentsCategory = array();

    public function init()
    {

    }

    public function indexAction()
    {
        $this->forward('xml');

    }

    public function xmlAction()
    {
        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $treeCategories = $categoryMapper->fetchTreeSubCategories();

        // Disable Layout
        $this->view->layout()->disableLayout();
        $this->_helper->viewRenderer->setNoRender(true);

        // Output XML than HTML
        $this->getResponse()->setHeader('Content-Type', 'text/xml; charset=utf-8');

        $data = $treeCategories[1]->getSubCategories();
        $xml = $this->genArray2Xml($data, $level = 2);

//        set_time_limit(1800);
//        $xml = $this->genArray2Xml($treeCategories, $level = 1);

        echo $xml->asXml();

        /*foreach ($treeCategories as $category) {
            if($category->getId() == 3){
                $xmlSection = $this->genArray2Xml(array($category), $level = 1);
                //echo $xmlSection->asXml;
                $xmlSection->asXml('./tmp/'.$category->getPath().'.xml');
            }
        }*/
    }

    public function arrayAction()
    {
        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $this->view->array = $categoryMapper->fetchAllProductsCategory(92);
    }

    public function treeAction()
    {
        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $treeCategories = $categoryMapper->fetchTreeSubCategories();

        $expArray = $this->getSubGroups($treeCategories, $level = 1);
        $this->view->array = $expArray;
    }

    public function getSubGroups(&$groups, $level)
    {
        $result = array();
        if(!empty($groups)){
            foreach ($groups as $group) {
                $subGroups = $group->getSubCategories();
                if(!is_null($subGroups)){

                    if($level < 3) {
                        $result['group_'.$group->getId()] = array(
                            //'level' => $level,
                            'name' => $group->getName(),
                            'groups' => $this->getSubGroups($subGroups, $level+1),
                        );
                    }
                    else{
                        $result['group_'.$group->getId()] = array(
                            //'level' => $level,
                            'name' => $group->getName(),
                            'products' => 'get products subcategories',
                        );
                    }

                }
                else{
                    $result['group_'.$group->getId()] = array(
                        'name' => $group->getName(),
                        'products' => $group->getCountProducts(),
                    );
                }
            }
        }

        return $result;
    }


    /**
     * @param $data
     * @param $level
     * @param bool $xml
     * @return mixed
     */
    public function genArray2Xml($data, $level, $xml = false)
    {
        if($xml === false){
            $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><root/>');
        }
        foreach ($data as $item) {
            $subGroup = $item->getSubCategories();
            $group = $xml->addChild('group');
            $group->addAttribute('name', $item->getName());
            $group->addAttribute('id', $item->getId());
            $group->addAttribute('level', $level);
            if(is_array($subGroup) && $level < 3){
                $this->genArray2Xml($subGroup, $level+1, $group);
            }
            else{
                $this->addProducts($group, $item->getId());
            }
        }

        return $xml;
    }

    public function addProducts(SimpleXMLElement $group, $group_id)
    {
//        $cache = Zend_Registry::get('cache');
//
//        $cache->clean(
//            Zend_Cache::CLEANING_MODE_MATCHING_TAG,
//            array('productsCategoryXml')
//        );

//        if(!$groupXml = $cache->load('productsCategoryXml'.$group_id)){
            $products = $this->getAllProductsCategory($group_id);
            if($products){
                $countProduct = count($products);
                $group->addAttribute('products',$countProduct);
                foreach ($products as $product) {
                    $element = $group->addChild('product');
                    $this->addProductXml($element, $product);
                }
            }

//            $groupXml = $group->asXML();

//            $cache->save($groupXml, 'productsCategoryXml'.$group_id, array('productsCategoryXml'));
//        }
//        else{
//            $group = simplexml_load_string($groupXml);
//        }

        //Zend_Debug::dump($group);

        return $group;
    }

    public function addProductXml(SimpleXMLElement $element, Catalog_Model_Products $product)
    {
        $element->addAttribute('id', $product->getid());
        $element->addChild('title', $product->getName())
            ->addAttribute('sku', $product->getSku());
        $element->addChild('image', $product->getImage());

        $draftImages = unserialize($product->getAImages());
        $draft = (!empty($draftImages))?$draftImages[0]:null;
        $element->addChild('image', $draft);

        $element->addChild('description', $product->getDescription());
        $element->addChild('note', $product->getNote());

        $properties = $element->addChild('properties');
        $this->addPropertiesProductXml($properties, $product);

        $modifications = $element->addChild('modificationsTable');
        $this->addModificationTableXml($modifications, $product);

        return $element;
    }


    public function addPropertiesProductXml(SimpleXMLElement $element, Catalog_Model_Products $product)
    {
        $productMapper = new Catalog_Model_Mapper_Products();
        $productsParamsMapper = new Catalog_Model_Mapper_ProductParams();
        $selectParams = $productsParamsMapper->getDbTable()->select()->order('order ASC');
        $productParams = $productMapper->findProductParams($product->getId(), $selectParams);

        if($productParams && !empty($productParams)){
            foreach ($productParams as $productParam) {
                $element->addChild('property', $productParam->getValue())
                    ->addAttribute('name', $productParam->getName());
            }
        }

        return $element;
    }

    public function addModificationTableXml(SimpleXMLElement $element, Catalog_Model_Products $product)
    {
        $productsMapper = new Catalog_Model_Mapper_Products();
        $subproductsMapper = new Catalog_Model_Mapper_Subproducts();
        $selectModification = $subproductsMapper->getDbTable()->select()->order('order ASC');
        $modifications = $productsMapper->findSubproductsRel($product->getId(), $selectModification);

        if($modifications && !empty($modifications)){
            $subproductParams = new Catalog_Model_Mapper_SubproductParams();
            $selectSubproductParams = $subproductParams->getDbTable()->select()->order('order ASC');
            $subproductProperty = $productsMapper->findSubproductParams($product->getId(), $selectSubproductParams);
            foreach ($modifications as $modification) {
                $row = $element->addChild('tr');
                $row->addAttribute('id', $modification->getId());
                $row->addChild('td', $modification->getSku())
                    ->addAttribute('title', 'Наименование');
                foreach ($subproductProperty as $property) {
                    $row->addChild('td', $this->_getModificationParamValue($modification->getId(), $property->getId()))
                        ->addAttribute('title', $property->getName());
                }
            }
        }

    }

    protected function _getModificationParamValue($modification_id, $property_id)
    {
        $subproductParamsValuesMapper = new Catalog_Model_Mapper_SubproductParamsValues();
        $result = $subproductParamsValuesMapper->findBySubproductParam($modification_id, $property_id, new Catalog_Model_SubproductParamsValues());

        return $result->getValue();
    }

    public function getAllProductsCategory($id)
    {
        $cache = Zend_Registry::get('cache');

        $cache->remove('productsCategoryObj'.$id);

        if(!$products = $cache->load('productsCategoryObj'.$id)){
            $categoryMapper = new Catalog_Model_Mapper_Categories();
            $products = $categoryMapper->fetchAllProductsCategory($id);

            $cache->save($products, 'productsCategoryObj'.$id, array('productsCategoryObj'));
        }

        return $products;
    }

    public function array2xml($array, $xml = false){
        if($xml === false){
            $xml = new SimpleXMLElement('<root/>');
        }
        foreach($array as $key => $value){
            if(is_array($value)){
                $this->array2xml($value, $xml->addChild($key));
            }else{
                $xml->addChild($key, $value);
            }
        }
        return $xml->asXML();
    }

    public function genContentsCategory(RecursiveArrayIterator $iterator)
    {
        while ($iterator -> valid()){
            if ($iterator -> hasChildren()){
                $this->genContentsCategory($iterator->getChildren());
            }
            else {
                //$this->_contentsCategory[$iterator->offsetGet('name')] = $iterator->offsetGet('countProducts');
                /*foreach ($subCategory as $item) {
                    $this->_contentsCategory[$iterator->offsetGet('name')] = array(
                        $item['name'] => $item['id']
                    );
                }*/

                if($iterator->key() == 'countProducts' && $iterator->current() != '0')
                    $this->_contentsCategory[$iterator->offsetGet('name')] = $iterator->offsetGet('countProducts');
                    /*$this->_contentsCategory[$iterator->offsetGet('name')] = array(
                            'name' => $iterator->offsetGet('name'),
                            'full_path' => $iterator->offsetGet('full_path'),
                            'countProduct' => $iterator->offsetGet('countProducts'),
                        );*/
                //$this->_contentsCategory[$iterator->offsetGet('id')] =
                        //$iterator->offsetGet('countProducts');
            }
            $iterator -> next();
        }
    }

    public function fileToCsv($filename, array &$fields, $mode = 'w')
    {
        $fp = fopen($filename, $mode);
        //при записи CSV файла в его начало необходимо добавить BOM последовательность,
        //которая явно будет указывать на то, что файл в кодировке UTF8
        fwrite($fp,b"\xEF\xBB\xBF");
        foreach ($fields as $field) {
            fputcsv($fp, $field, ";");
        }
        fclose($fp);
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
        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $productMapper = new Catalog_Model_Mapper_Products();
        $selectProduct = $productMapper->getDbTable()
            ->select()
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        if(is_null($category_id))
            $category_id = 0;

        $tree = array();
        $categories = $this->getSubCategory($category_id);
        if(!empty($categories)){
            foreach ($categories as $category) {
                $aCategory = $this->getCategoryArray($category);
                $subCategory = $this->getSubCategory($category->getId());
                $categoryProducts = $categoryMapper->fetchProductsRel($category->getId(),$selectProduct);
                $aCategory['products'] = count($categoryProducts);
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
     * @param array $contentsCategory
     * @return Utils_XmlCatalogGeneratorController
     */
    public function setContentsCategory($contentsCategory)
    {
        $this->_contentsCategory = $contentsCategory;
        return $this;
    }

    /**
     * @return array
     */
    public function getContentsCategory()
    {
        return $this->_contentsCategory;
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

