<?php

class Pipeline_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        $this->view->title = 'Трубопроводная арматура';

        /*//Заглушка
        if(!Zend_Auth::getInstance()->hasIdentity()){
            $this->_helper->layout->setLayout('_cap');
            $this->render('cap');
        }*/

        $this->view->adminPath = 'pipeline';
    }

    public function indexAction()
    {

        $categoriesMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $select =  $categoriesMapper->getDbTable()->select();
        $select->where('parent_id = ?', 0)
            ->where('active != ?', 0)
            ->where('deleted != ?', 1)
            ->order('sorting ASC');

        $categories = $categoriesMapper->fetchAll($select);

        $this->view->categories = $categories;
        $this->view->meta_description = 'Альфа-Гидро - Трубопроводная арматура. Оптовые поставки трубных элементов, в продаже заглушки, отводы, переходы, тройники, трубы, фланцы.';
        $this->view->meta_keywords = 'трубопроводная арматура, заглушки, отводы, переходы, тройники, трубы, фланцы';
    }

    public function capAction()
    {
        //Показывается заглушка
    }


}



