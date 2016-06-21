<?php

class PagesIndexControllerTest extends ControllerTestCase
{
    public function testIndexAction()
    {
        $params = array('action' => 'index', 'controller' => 'index', 'module' => 'pages');
        $urlParams = $this->urlizeOptions($params);
        $url = $this->url($urlParams, null, false, true, true);

        $this->dispatch($url);

        // assertions
        //$this->assertResponseCode(200);
        //$this->assertModule($urlParams['module']);
        //$this->assertController($urlParams['controller']);
        //$this->assertAction($urlParams['action']);

        /*$this->assertQueryContentContains(
            'div#view-content p',
            'View script for controller <b>' . $params['controller'] . '</b> and script/action name <b>' . $params['action'] . '</b>'
        );*/
    }

    public function testIndexActionWithJson()
    {
        $this->dispatch('/?json=1');
    }

    public function testPages()
    {
        $this->dispatch('/pages/catalog');
    }

    public function testPagesContactsStaticRoute()
    {
        $this->dispatch('/contacts');
        $this->assertRoute('pages_contacts');
    }

    public function testPagesAboutStaticRoute()
    {
        $this->dispatch('/about');
        $this->assertRoute('pages_about');
    }

    public function testHomePage()
    {
        $this->dispatch('/');
    }


    /**
     * @access protected
     */
    protected function tearDown()
    {
        print "\n".__CLASS__;
    }
}

