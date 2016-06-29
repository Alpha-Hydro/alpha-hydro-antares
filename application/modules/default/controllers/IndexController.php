<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
    }

    public function indexAction()
    {
        $this->forward('index', 'home', 'pages');
    }

    public function plugAction()
    {
        Zend_Layout::getMvcInstance()->setLayout("plug");
        $hostHttp = new Zend_Controller_Request_Http();
        $host = $hostHttp->getServer('HTTP_HOST');

        if($host === 'xn----7sbavhvfm6b0af.xn--p1ai')
            $host = 'ханза-флекс.рф';

        $this->view->assign('host', $host);
    }

}

