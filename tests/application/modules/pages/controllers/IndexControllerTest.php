<?php

class PagesIndexControllerTest extends ControllerTestCase
{
    public function testIndexAction()
    {
        $this->dispatch('/');

        //????
        $this->assertModule('default');
        $this->assertController('error');
        $this->assertAction('error');
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

