<?php

class Catalog_CategoriesController extends Zend_Controller_Action
{
    protected $_fullPath = null;

    public function preDispatch()
    {
        $request = $this->getRequest();
        if($request->getParam('fullPath'))
            $this->validatePath($request->getParam('fullPath'));
    }

    public function init()
    {
        $request = $this->getRequest();
        $this->_fullPath =  $request->getParam('fullPath');
        //var_dump($this->getAllParams());
    }

    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categories = new Catalog_Model_Mapper_Categories();
        $category = new Catalog_Model_Categories();

        $category = $categories->findByFulPath($fullPath, $category);
        //var_dump($category);

        if(is_null($category)) {
            //throw new Zend_Controller_Action_Exception("Страница не найдена", 404);
            $this->forward('view', 'products');
            return;
        }

        $current_category_id = $category->getId();

        if($current_category_id !== 0){

            $select = $categories->getDbTable()->select();
            $select->where('parent_id = ?', $current_category_id)
                ->where('active != ?', 0)
                ->order('sorting ASC');

            $entries = $categories->fetchAll($select);

            if(empty($entries)){

                /*$productsMapper = new Catalog_Model_Mapper_Products();
                $select = $productsMapper->getDbTable()->select()->order('sorting ASC');
                $entries = $categories->fetchProductsRel($current_category_id, $select);*/

                $this->forward('index', 'products');
                return;
            }
            $this->view->entries = $entries;

        }
        else{
            $this->redirect('/catalog/', array('code'=>301));
            return;
        }

        $this->view->title = $category->getName();
        $this->view->current_category = $current_category_id;
    }

    /**
     * @return null
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }

    public function validatePath($path)
    {
        $arrayPath = explode('/',$path);
        if(in_array('category', $arrayPath)){
            $item = array();
            foreach ($arrayPath as $key => $value) {
                if($value === 'category')
                    $item['category_id'] = $arrayPath[$key+1];
                if($value == 'id')
                    $item['product_id'] = $arrayPath[$key+1];
            }
            if(!empty($item))
                $this->redirectItem($item);
        }
    }

    public function redirectItem($item)
    {
        $category_id = $item['category_id'];
        $product_id = $item['product_id'];
        $fullPath = '';

        if(!is_null($category_id)){
            $categoryMapper = new Catalog_Model_Mapper_Categories();
            $category = $categoryMapper->find($category_id, new Catalog_Model_Categories());
            $fullPath = $category->getFullPath();
        }

        if(!is_null($product_id)){
            $productMapper = new Catalog_Model_Mapper_Products();
            $product = $productMapper->find($product_id, new Catalog_Model_Products());
            $fullPath = $product->getFullPath();
        }

        $url = '/catalog/'.$fullPath.'/';
        //var_dump($item);

        $this->redirect($url, array('code'=>301));
        return;
    }
}

