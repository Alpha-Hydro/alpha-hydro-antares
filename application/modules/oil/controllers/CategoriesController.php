<?php

class Oil_CategoriesController extends Zend_Controller_Action
{
    protected $_fullPath = null;

    /**
     * @var Oil_Model_Mapper_OilCategories
     */
    protected $_categoryMapper = null;

    /**
     * @var Oil_Model_Mapper_Oil
     */
    protected $_itemMapper = null;

    /**
     * @var Zend_Controller_Action_Helper_Redirector
     *
     */
    protected $_redirector = null;


    public function init()
    {
        $this->_categoryMapper = new Oil_Model_Mapper_OilCategories();
        $this->_itemMapper = new Oil_Model_Mapper_Oil();
        $this->_redirector = new Zend_Controller_Action_Helper_Redirector();

        if($this->_request->getParam('fullPath'))
            $this->setFullPath($this->_request->getParam('fullPath'));

        $select = $this->_categoryMapper->getDbTable()->select();
        $select->where('parent_id = ?', 0)
            ->where('active != ?', 0)
            ->where('deleted != ?', 1)
            ->order('sorting ASC');

        $categories = $this->_categoryMapper->fetchAll($select);

        if(!empty($categories))
            $this->view->categories = $categories;

        $this->view->adminPath = 'oil-categories/';
    }

    public function indexAction()
    {
        $fullPath = $this->getFullPath();

        if(is_null($fullPath))
            $this->_redirector->gotoSimpleAndExit('index', 'index');

        $category = $this->_categoryMapper
            ->findByFulPath($fullPath, new Oil_Model_OilCategories());

        if(is_null($category)){
            //throw new Zend_Controller_Action_Exception("Страница не найдена", 404);
            //перенаправляем в товар, может быть это товар
            $this->forward('view', 'oil');
            return;
        }

        if(!is_null($this->getRequest()->getParam('json'))
            && Zend_Auth::getInstance()->hasIdentity()){

            $this->forward('json', 'oil-categories', 'admin', array('id' => $category->getId()));
            return;
        }

        if(Zend_Auth::getInstance()->hasIdentity()){
            $this->_request->setParams(array(
                'dataItem' => array(
                    'controller' => 'oil-categories',
                    'id' => $category->getId(),
                    'active' => $category->getActive(),
                    'deleted' => $category->getDeleted()
                )
            ));
        }

        $current_category_id = $category->getId();
        $this->view->category = $category;
        $this->view->title = $category->getTitle();
        $this->view->adminPath = 'oil-categories/list/'.$category->getId();

        if($current_category_id != 0){
            if(!is_null($this->getRequest()->getParam('json'))
                && Zend_Auth::getInstance()->hasIdentity()){

                $this->forward('json', 'oil-categories', 'admin', array('id' => $current_category_id));
                return;
            }

            if(Zend_Auth::getInstance()->hasIdentity()){
                $this->_request->setParams(array(
                    'dataItem' => array(
                        'controller' => 'oil-categories',
                        'id' => $category->getId(),
                        'active' => $category->getActive(),
                        'deleted' => $category->getDeleted()
                    )
                ));
            }

            $select = $this->_categoryMapper->getDbTable()->select();
            $select->where('parent_id = ?', $current_category_id)
                ->where('deleted != ?', 1)
                ->where('active != ?', 0)
                ->order('sorting ASC');

            $categories = $this->_categoryMapper->fetchAll($select);

            if(empty($categories)){
                $this->forward('index', 'oil', 'oil', array('category' => $category));
                return;
            }

            $this->view->categories = $categories;
        }
        else{
            $this->_redirector->gotoUrlAndExit('/oil/', array('code' => 301));
        }
    }

    /**
     * @param null $fullPath
     * @return Oil_CategoriesController
     */
    public function setFullPath($fullPath)
    {
        $this->_fullPath = $fullPath;
        return $this;
    }

    /**
     * @return null
     */
    public function getFullPath()
    {
        return $this->_fullPath;
    }


}

