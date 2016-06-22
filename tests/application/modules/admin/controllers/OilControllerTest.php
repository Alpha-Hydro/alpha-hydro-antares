<?php

require_once 'Zend/Application.php';
require_once 'Zend/Test/PHPUnit/ControllerTestCase.php';

class OilControllerTest extends ControllerTestCase
{
    public function testSeoAction()
    {
        /*$params = array('action' => 'seo', 'controller' => 'oil', 'module' => 'admin');
        $urlParams = $this->urlizeOptions($params);
        $url = $this->url($urlParams, null, false, true, true);
        $this->dispatch($url);
        
        // assertions
        $this->assertModule($urlParams['module']);
        $this->assertController($urlParams['controller']);
        $this->assertAction($urlParams['action']);
        $this->assertQueryContentContains(
            'div#view-content p',
            'View script for controller <b>' . $params['controller'] . '</b> and script/action name <b>' . $params['action'] . '</b>'
            );*/
    }

}



