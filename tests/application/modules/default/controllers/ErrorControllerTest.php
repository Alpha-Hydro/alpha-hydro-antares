<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 16.06.2016
 * Time: 13:23
 */
class Default_ErrorControllerTest extends ControllerTestCase
{
    public function testErrorURL()
    {
        $this->dispatch('foo');
        $this->assertModule('default');
        $this->assertController('error');
        $this->assertAction('error');
    }

    /**
     * @access protected
     */
    protected function tearDown()
    {
        print "\n".__CLASS__;
    }
}