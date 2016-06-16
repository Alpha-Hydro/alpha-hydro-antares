<?php

class PagesIndexControllerTest extends ControllerTestCase
{
    public function testIndexAction()
    {
        $this->dispatch('/');
        //$this->assertModule('default');
//        $this->assertController('index');
//        $this->assertAction('index');
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

