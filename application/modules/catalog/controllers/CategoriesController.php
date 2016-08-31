<?php

class Catalog_CategoriesController extends Zend_Controller_Action
{
    protected $_fullPath = null;

    /**
     * @var Zend_Auth
     */
    protected $_auth = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    public function init()
    {
        $request = $this->getRequest();
        $this->_redirector = $this->_helper->getHelper('Redirector');
        $this->_fullPath =  $request->getParam('fullPath');
        $this->_auth = Zend_Auth::getInstance()->hasIdentity();

        $this->view->assign(array(
            'title' => 'Каталог продукции',
        ));
    }

    public function indexAction()
    {
        $fullPath =  $this->getFullPath();
        $categories = new Catalog_Model_Mapper_Categories();
        $category = new Catalog_Model_Categories();

        $category = $categories->findByFulPath($fullPath, $category);

        if(is_null($category)) {
            //throw new Zend_Controller_Action_Exception("Страница не найдена", 404);
            $this->forward('view', 'products');
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'categories',
                    'id' => $category->getId(),
                    'active' => $category->getActive(),
                    'deleted' => $category->getDeleted()
                )
            ));
        }

        if($category->getDeleted() === '1'){
            if (!Zend_Auth::getInstance()->hasIdentity())
                throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

            $this->_redirector->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'categories',
                'action' => 'index',
                'parent_id' => $category->getParentId()
            ),'adminCategoriesEdit', true);
        }


        $current_category_id = $category->getId();
        $this->view->assign('adminPath', 'categories/'.$current_category_id);

        if($current_category_id !== 0){

            $jsonRequest = $this->getRequest()->getParam('json');
            if(isset($jsonRequest)){
                $id = ($jsonRequest !== '')? $jsonRequest : $current_category_id;
                $this->forward('json', 'categories', 'admin', array('id' => $id));
                return;
            }

            $select = $categories->getDbTable()->select();
            $select->where('parent_id = ?', $current_category_id)
                ->where('deleted != ?', 1)
                ->order('sorting ASC');

            if(!$this->_auth) $select->where('active != ?', 0);

            $entries = $categories->fetchAll($select);

            if(empty($entries)){
                /*$productsMapper = new Catalog_Model_Mapper_Products();
                $select = $productsMapper->getDbTable()->select()->order('sorting ASC');
                $entries = $categories->fetchProductsRel($current_category_id, $select);*/

                $this->view->assign(array('category' => $category));
                $this->forward('index', 'products');
                return;
            }
            $this->view->assign('entries', $entries);
        }
        else{
            $this->redirect('/catalog/', array('code'=>301));
            return;
        }


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
        
        $this->view->assign(array(
            'title' => $category->getName(),
            'current_category' => $current_category_id,
            'meta_description' => $this->setMetaDescription($category),
            'meta_keywords' => strtolower($meta_keywords),
        ));

        if($category->getActive() === '0'
            && !Zend_Auth::getInstance()->hasIdentity()){
            $this->view->assign(array(
                'breadcrumbs' => true,
                'sidebar_headers' => true,
                //'secondaryHeader' => null,
            ));
            throw new Zend_Controller_Action_Exception("Раздел временно не доступен", 403);
        }

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

