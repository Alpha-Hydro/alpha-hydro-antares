<?php

class Catalog_CategoriesController extends Zend_Controller_Action
{
    public function preDispatch()
    {
        $frontController = $this->getFrontController();
        $router = $frontController->getRouter();
        var_dump($router->getCurrentRouteName());
    }

    public function init()
    {
        /* Initialize action controller here
        $router = $this->getFrontController()->getRouter();
        var_dump($router->getCurrentRouteName());*/
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        //var_dump($request->getParams());

        $fullPath =  $request->getParam('fullPath');
        var_dump($fullPath);
        if(is_null($fullPath))
            //$this->forward('index', 'index', 'catalog');
            //$this->redirect('/catalog/', array('code' => 301));
            $this->redirect($this->url(array('module' => 'catalog', 'controller'=>'index', 'action'=>'index')), array('code' => 301));

        $this->view->title = 'Категория';
    }
}

