<?php

class Utils_XmlCatalogGeneratorController extends Zend_Controller_Action
{

    protected $_contentsCategory = array();

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $categoryMapper = new Catalog_Model_Mapper_Categories();
        //$this->view->array = $categoryMapper->fetchAllProductsCategory(80);

        $treeCategories = $categoryMapper->fetchTreeSubCategories();

        $expArray = $this->getSubGroups($treeCategories, $level = 1);
        //$this->view->array = $expArray;

        // Disable Layout
        $this->view->layout()->disableLayout();
        $this->_helper->viewRenderer->setNoRender(true);

        // Output XML than HTML
        $this->getResponse()->setHeader('Content-Type', 'text/xml; charset=utf-8');

        //echo $this->array2xml($expArray);
        echo $this->genArray2Xml($treeCategories, $level = 1);

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


    public function genArray2Xml($data, $level, $xml = false)
    {
        if($xml === false){
            $xml = new SimpleXMLElement('<root/>');
        }
        foreach ($data as $item) {
            $subGroup = $item->getSubCategories();
            $group = $xml->addChild('group');
            $group->addAttribute('name', $item->getName());
            $group->addAttribute('id', $item->getId());
            $group->addAttribute('level', $level);
            if(is_array($subGroup)){
                if($level < 3){
                    $this->genArray2Xml($subGroup, $level+1, $group);
                }
                else{
                    $products = $this->getAllProductsCategory($item->getId());
                    $countProduct = count($products);
                    $group->addAttribute('products',$countProduct);
                    if(!empty($products)){
                        foreach ($products as $product) {
                            $element = $group->addChild('product');
                            $this->genProductXml($element, $product);
                        }
                    }
                }
            }
            else{
                $group->addAttribute('products', $item->getCountProducts());
            }
        }

        return $xml->asXML();
    }

    public function genProductXml(SimpleXMLElement $element, Catalog_Model_Products $product)
    {
        $element->addAttribute('name', $product->getName());

        return $element;
    }

    public function getAllProductsCategory($id)
    {
        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $products = $categoryMapper->fetchAllProductsCategory($id);

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

