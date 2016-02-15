<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
    }

    public function indexAction()
    {
        $this->forward('index', 'index', 'pages');
    }

    /*public function aboutAction()
    {
//        $this->forward('index', 'about', 'default');
//        Zend_Controller_Front::getInstance()->getResponse()->setRedirect('/about/', 301);
//        return;
    }*/

    public function plugAction()
    {
        Zend_Layout::getMvcInstance()->setLayout("plug");
        $host = $this->getRequest()->getServer('HTTP_HOST');

        if($host === 'xn----7sbavhvfm6b0af.xn--p1ai')
            $host = 'ханза-флекс.рф';

        $this->view->host = $host;
    }

}

