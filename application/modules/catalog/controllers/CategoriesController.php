<?php

class Catalog_CategoriesController extends Zend_Controller_Action
{
    protected $_fullPath = null;

    public function init()
    {
        $request = $this->getRequest();
        $this->_fullPath =  $request->getParam('fullPath');
        $this->view->adminPath = '';
    }

    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categories = new Catalog_Model_Mapper_Categories();
        $category = new Catalog_Model_Categories();

        $category = $categories->findByFulPath($fullPath, $category);

        if(is_null($category)) {
            //throw new Zend_Controller_Action_Exception("Страница не найдена", 404);
            $this->forward(
                'view',
                'products'
            );
            return;
        }


        $current_category_id = $category->getId();

        if($current_category_id !== 0){

            if(!is_null($this->getRequest()->getParam('json'))
                && Zend_Auth::getInstance()->hasIdentity()){

                $this->forward('json', 'categories', 'admin', array('id' => $current_category_id));
                return;
            }

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

        $this->view->meta_description = $this->setMetaDescription($category);

        if($category->getMetaKeywords() != ''){
            $meta_keywords = $category->getMetaKeywords();
        }
        else{
            $aKeywords = array();
            if(!empty($entries)){
                foreach ($entries as $entry) {
                    $aKeywords[] = $entry->getName();
                }
            }
            $aKeywords[] = $category->getName();
            $meta_keywords = implode(", ", array_reverse($aKeywords));
        }
        $this->view->meta_keywords = strtolower($meta_keywords);
    }

    /**
     * @return null
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }

    /**
     * @param Catalog_Model_Categories $category
     * @return mixed|string
     */
    public function setMetaDescription(Catalog_Model_Categories $category)
    {
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

        return $meta_description;
    }

}

