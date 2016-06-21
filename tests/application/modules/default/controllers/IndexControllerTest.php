<?php

class Default_IndexControllerTest extends ControllerTestCase
{
    public function testIndexAction()
    {
        $params = array('action' => 'index', 'controller' => 'index', 'module' => 'default');
        $urlParams = $this->urlizeOptions($params);
        $url = $this->url($urlParams, null, false, true, true);

        $this->dispatch($url);

        Zend_Debug::dump($this->getResponse()->getHttpResponseCode());
        //Zend_Debug::dump($this->getResponse()->outputBody());

        // assertions
        $this->assertResponseCode(200);
        $this->assertModule($urlParams['module']);
        $this->assertController($urlParams['controller']);
        $this->assertAction($urlParams['action']);
        
        $this->assertQueryContentContains(
            'div#view-content p',
            'View script for controller <b>' . $params['controller'] . '</b> and script/action name <b>' . $params['action'] . '</b>'
        );

        //$this->assertQuery('div .hidden');
    }

    public function testPlugAction()
    {
        $params = array('action' => 'plug', 'controller' => 'index', 'module' => 'default');
        $urlParams = $this->urlizeOptions($params);
        $url = $this->url($urlParams, null, false, true, true);

        $this->dispatch($url);

        // assertions
        $this->assertResponseCode(200);
        $this->assertModule($urlParams['module']);
        $this->assertController($urlParams['controller']);
        $this->assertAction($urlParams['action']);

        $this->assertQuery('div .hwin');
        
    }

    /**
     * @access protected
     */
    protected function tearDown()
    {
        print "\n".__CLASS__;
    }
}

