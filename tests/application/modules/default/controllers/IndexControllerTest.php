<?php

class Default_IndexControllerTest extends ControllerTestCase
{
    public function testIndexAction()
    {
        $this->dispatch('/');
//        $this->assertModule('default');
//        $this->assertController('index');
//        $this->assertAction('index');
    }

    /**
     * @access protected
     */
    protected function tearDown()
    {
        print "\n".__CLASS__;
    }
}

