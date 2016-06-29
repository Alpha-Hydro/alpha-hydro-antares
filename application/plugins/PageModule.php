<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 29.06.2016
 * Time: 16:22
 */
class Plugin_PageModule extends Zend_Controller_Plugin_Abstract
{
    public function preDispatch(Zend_Controller_Request_Abstract $request)
    {
        $pagesMapper = new Pages_Model_Mapper_Pages();
        $page = $pagesMapper->findByPath($request->getModuleName(), new Pages_Model_Pages());
        $r = new Zend_Controller_Action_Helper_Redirector;
        $layout = Zend_Layout::getMvcInstance();

        if(is_null($page))
            return;

        if($page->getDeleted() === '1'){
            if (!Zend_Auth::getInstance()->hasIdentity()){
                $layout->setLayout('layout_error');
                throw new Zend_Controller_Action_Exception("Страница не найдена", 404);
            }

            $r->gotoRouteAndExit(array(
                'module' => 'admin',
                'controller' => 'pages',
                'action' => 'index'
            ),'adminEdit', true);
        }

        if($page->getActive() === '0'){
            if (!Zend_Auth::getInstance()->hasIdentity()){
                $layout->setLayout('layout_error');
                throw new Zend_Controller_Action_Exception("Раздел временно не доступен", 500);
            }
        }
    }
}