<?php

class Admin_IndexControllerTest extends ControllerTestCase
{
    public function testIndexAction()
    {
        $this->_request->setParam('advanced', true);

        $this->dispatch('/admin');
        $this->assertRoute('adminAdvanced');
    }

    public function testSlugifyAction(){
        $this->_request
            ->setParams(array('slugify'  => 'тестовый продукт'));

        $this->dispatch('/admin/index/slugify');

        /*$this->assertModule('admin');
        $this->assertController('index');
        $this->assertAction('slugify');*/
    }

    /**
     * @access protected
     */
    protected function tearDown()
    {
        print "\n".__CLASS__;
    }
}

