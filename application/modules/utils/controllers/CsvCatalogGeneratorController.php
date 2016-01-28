<?php

class Utils_CsvCatalogGeneratorController extends Zend_Controller_Action
{
    /**
     * @var Catalog_Model_Mapper_Categories
     */
    protected $_categoriesModelMapper;

    /**
     * @var Catalog_Model_Mapper_Products
     */
    protected $_productsModelMapper;

    /**
     * @var Catalog_Model_Mapper_Subproducts
     */
    protected $_subproductsModelMapper;

    /**
     * @var Catalog_Model_Mapper_ProductParams
     */
    protected $_productsParamsMapper;

    /**
     * @var Catalog_Model_Mapper_SubproductParams
     */
    protected $_subproductsParamsMapper;

    /**
     * @var Catalog_Model_Mapper_SubproductParamsValues
     */
    protected $_subproductParamsValuesMapper;

    /**
     * @var Catalog_Model_Categories[]
     */
    protected $_treeCategories;

    /**
     * @var array
     */
    protected $_treeCategoriesArray = array();

    /**
     * @var array
     */
    protected $_categoryWithProducts = array();

    public function init()
    {
        $this->_categoriesModelMapper = new Catalog_Model_Mapper_Categories();
        $this->_productsModelMapper = new Catalog_Model_Mapper_Products();
        $this->_productsParamsMapper = new Catalog_Model_Mapper_ProductParams();
        $this->_subproductsModelMapper = new Catalog_Model_Mapper_Subproducts();
        $this->_subproductsParamsMapper = new Catalog_Model_Mapper_SubproductParams();
        $this->_subproductParamsValuesMapper = new Catalog_Model_Mapper_SubproductParamsValues();

        $this->_treeCategories = $this->_categoriesModelMapper->fetchTreeSubCategories();
        $this->_treeCategoriesArray = $this->getSubGroups($this->_treeCategories, $level = 1);
    }

    public function indexAction()
    {
        /*$cache = Zend_Registry::get('cache');

        $cache->remove('fullCatalogProducts');

//        if(!$arrayGroupProducts = $cache->load('fullCatalogProducts')){

            //Основной массив
            $expArrayCsv = array();
            //Массив по группам
            $arrayGroupProducts = array();

            $categoryMapper = new Catalog_Model_Mapper_Categories();

            $treeCategories = $categoryMapper->fetchTreeSubCategoriesInArray();

            foreach ($treeCategories as $item) {
                $this->setCategoryWithProducts(array());
                $children = $item['subCategories'];
                $it = new RecursiveArrayIterator($children);
                iterator_apply($it, array('Utils_CsvCatalogGeneratorController','fetchCategoriesWithProducts'), array($it));

                $categoryProducts = $this->getCategoryWithProducts();
                if(!empty($categoryProducts)){
                    foreach ($categoryProducts as $key => $categoryProduct) {
                        $expArrayCsv[] = array('category name', 'uri');
                        $expArrayCsv[] = array(
                            'name' => $categoryProduct['name'],
                            'full_path' => $categoryProduct['full_path'],
                        );
                        $products = $this->getProductsCategory($key);
                        foreach ($products as $product) {
                            $expArrayCsv[] = $product;
                        }
                    }
                }

                //$arrayGroupProducts[] = $categoryProducts;

                //$arrayGroupProducts[$item['id']] = $categoryProducts;
            }

//            $cache->save($arrayGroupProducts, 'fullCatalogProducts');
//        }*/

        //$treeCategoriesArray = $this->getSubGroups($this->_treeCategories, $level = 1);
        $this->view->array = $this->_treeCategoriesArray;
        //$this->view->array = $this->getArrayGroupProducts();

        //$expArrayCsv = $this->getExpArrayCsv();
        //$this->fileToCsv('./tmp/catalog_pdf.csv', $expArrayCsv);
        //$this->view->array = $expArrayCsv;
    }


    /**
     * @param $groups Catalog_Model_Categories[]
     * @param $level
     * @return array
     */
    public function getSubGroups(&$groups, $level)
    {
        $result = array();
        if(!empty($groups)){
            foreach ($groups as $group) {
                $subGroups = $group->getSubCategories();
                if(is_array($subGroups) && $level < 3){
                    $result[$group->getId()] = array(
                        'name' => $group->getName(),
                        'groups' => $this->getSubGroups($subGroups, $level+1),
                    );
                }
                else{
                    $products = $this->getAllProductsCategory($group->getId());
                    $result[$group->getId()] = array(
                        'name' => $group->getName(),
                        'countProduct' => count($products),
                        'products' => $this->productsCategoryToArray($products),
                    );
                }
            }
        }

        return $result;
    }

    /**
     * @param $id
     * @return Catalog_Model_Products[]
     * @throws Zend_Exception
     */
    public function getAllProductsCategory($id)
    {
        $cache = Zend_Registry::get('cache');

        if(!$products = $cache->load('productsCategoryObj'.$id)){

            $products = $this->_categoriesModelMapper->fetchAllProductsCategory($id);

            $cache->save(
                $products,
                'productsCategoryObj'.$id,
                array(
                    'productsCategoryObj'
                )
            );
        }

        return $products;
    }

    /**
     * @param $products Catalog_Model_Products[]
     * @return array
     */
    public function productsCategoryToArray(&$products)
    {
        $result = array();

        if(!empty($products)){
            foreach ($products as $product) {
                $result[$product->getId()] = $this->productToArray($product);
            }
        }

        return $result;
    }

    /**
     * @param Catalog_Model_Products $product
     * @return array
     */
    public function productToArray(Catalog_Model_Products $product)
    {
        $item = array();

        $item['sku'] = $product->getSku();
        $item['name'] = $product->getName();
        $item['image'] = $product->getImage();
        $item['uri'] = $product->getFullPath();
        $item['description'] = $product->getDescription();
        $item['note'] = $product->getNote();

        return $item;
    }


    /**
     * @return array
     * @throws Zend_Exception
     */
    public function getExpArrayCsv()
    {
        /*$cache = Zend_Registry::get('cache');

        $cache->remove('expArrayCsv');*/


        //Основной массив
        $expArrayCsv = array();

        $categoryMapper = new Catalog_Model_Mapper_Categories();

        $treeCategories = $categoryMapper->fetchTreeSubCategoriesInArray();

        foreach ($treeCategories as $item) {
            $this->setCategoryWithProducts(array());
            $children = $item['subCategories'];
            $it = new RecursiveArrayIterator($children);
            iterator_apply($it, array('Utils_CsvCatalogGeneratorController','fetchCategoriesWithProducts'), array($it));

            $categoryProducts = $this->getCategoryWithProducts();
            if(!empty($categoryProducts)){
                foreach ($categoryProducts as $key => $categoryProduct) {
                    $expArrayCsv[] = array('category name', 'uri');
                    $expArrayCsv[] = array(
                        'name' => $categoryProduct['name'],
                        'full_path' => $categoryProduct['full_path'],
                    );
                    $products = $this->getProductsCategory($key);
                    foreach ($products as $product) {
                        $expArrayCsv[] = $product;
                    }
                }
            }
        }

        return $expArrayCsv;
    }

    /**
     * @return array
     * @throws Zend_Exception
     */
    public function getArrayGroupProducts()
    {
//        $cache = Zend_Registry::get('cache');
//
//        $cache->remove('fullCatalogProducts');


        //Массив по группам
        $arrayGroupProducts = array();

        $categoryMapper = new Catalog_Model_Mapper_Categories();

        $treeCategories = $categoryMapper->fetchTreeSubCategoriesInArray();

        foreach ($treeCategories as $item) {
            $this->setCategoryWithProducts(array());
            $children = $item['subCategories'];
            $it = new RecursiveArrayIterator($children);
            iterator_apply($it, array('Utils_CsvCatalogGeneratorController','fetchCategoriesWithProducts'), array($it));

            $categoryProducts = $this->getCategoryWithProducts();
            if(!empty($categoryProducts)){
                foreach ($categoryProducts as $key => $categoryProduct) {
                    $products = $this->getProductsCategory($key);
                    $categoryProducts[$key]['products'] = $products;
                }
            }

            $arrayGroupProducts[$item['id']] = $categoryProducts;
        }


        return $arrayGroupProducts;
    }

    /**
     * @param $filename
     * @param array $fields
     * @param string $mode
     *
     * - при записи CSV файла в его начало необходимо добавить BOM последовательность,
     * - которая явно будет указывать на то, что файл в кодировке UTF8
     * - fwrite($fp,b"\xEF\xBB\xBF");
     */
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

    /**
     * @param RecursiveArrayIterator $iterator
     */
    public function fetchCategoriesWithProducts(RecursiveArrayIterator $iterator) {
        while ($iterator -> valid()){
            if ($iterator -> hasChildren()){
                $this->fetchCategoriesWithProducts($iterator->getChildren());
            }
            else {
                if($iterator->key() == 'countProducts' && $iterator->current() != '0')
                    $this->_categoryWithProducts[$iterator->offsetGet('id')] = array(
                            'name' => $iterator->offsetGet('name'),
                            'full_path' => $iterator->offsetGet('full_path'),
                            'countProduct' => $iterator->offsetGet('countProducts'),
                    );
                    /*$this->_categoryWithProducts[$iterator->offsetGet('id')] =
                            $iterator->offsetGet('countProducts');*/
            }
            $iterator -> next();
        }
    }

    /**
     * @param $category_id
     * @return array
     */
    public function getProductsCategory($category_id)
    {
        $cache = Zend_Registry::get('cache');

        if(!$expProducts = $cache->load('productsCategory'.$category_id)) {
            $expProducts = array();
            $categoryMapper = new Catalog_Model_Mapper_Categories();
            $productMapper = new Catalog_Model_Mapper_Products();
            $selectProduct = $productMapper->getDbTable()->select()
                ->where('deleted != ?', 1)
                ->where('active != ?', 0)
                ->order('sorting ASC');
            $products = $categoryMapper->fetchProductsRel($category_id, $selectProduct);

            if (!empty($products)) {
                foreach ($products as $product) {
                    $expProducts[] = array('item', 'name', 'image', 'uri', 'description', 'note');

                    $item = $this->productToArray($product);

                    $expProducts[] = $item;

                    $property = $this->productProperty_Csv($product, false);
                    if (!empty($property)) {
                        $expProducts[] = array('propertiesTable');
                        $expProducts[] = $property['name'];
                        $expProducts[] = $property['value'];
                    }

                    $modifications = $this->productModificationTableValues($product, false);
                    if (!empty($modifications)) {
                        $expProducts[] = array('modificationsTable');
                        foreach ($modifications as $modification) {
                            $expProducts[] = $modification;
                        }
                    }
                }
            }
            $cache->save($expProducts, 'productsCategory'.$category_id);
        }

        return $expProducts;
    }

    /**
     * @param Catalog_Model_Products $product
     * @param bool $toWin
     * @return array
     */
    public function productProperty_Csv(Catalog_Model_Products $product, $toWin = false)
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
    public function productModificationTableValues(Catalog_Model_Products $product, $toWin = false)
    {
        $productMapper = new Catalog_Model_Mapper_Products();
        $subproducts = new Catalog_Model_Mapper_Subproducts();
        $select = $subproducts->getDbTable()->select()->order('order ASC');
        $modifications = $productMapper->findSubproductsRel($product->getId(), $select);
        $modificationsTableValues = array();
        if(!empty($modifications)){
            $modificationsTableValues['headTable'] = $this->productModificationTableTitle($product, $toWin);
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

    public function productModificationTableTitle(Catalog_Model_Products $product, $toWin = false)
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
     * @param $categoryWithProducts
     * @return $this
     */
    public function setCategoryWithProducts($categoryWithProducts)
    {
        $this->_categoryWithProducts = $categoryWithProducts;
        return $this;
    }

    /**
     * @return array
     */
    public function getCategoryWithProducts()
    {
        return $this->_categoryWithProducts;
    }

    /**
     * @param $ii
     * @return string
     */
    private function _toWindow($ii){
        return iconv( "utf-8", "windows-1251",$ii);
    }

}
