<?php

class IndexControllerTest extends ControllerTestCase
{
    public function testTestAction()
    {
        $this->assertTrue(true);
    }

    /**
     * @access protected
     */
    protected function tearDown()
    {
        print "\n".__CLASS__;
    }
}

