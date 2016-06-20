<?php
require_once 'Zend/Application.php';
require_once 'Zend/Test/PHPUnit/ControllerTestCase.php';


class Application_Model_PagesTest extends Zend_Test_PHPUnit_ControllerTestCase
{
    /**
     * @var Pages_Model_PageEntries
    */
    protected $_gb;

    protected function setUp()
    {
        parent::setUp();
        $this->_gb = new Pages_Model_PageEntries();
    }

    protected function tearDown()
    {
        $this->_gb = null;
        parent::tearDown();
    }

    public function testPagesIsEmptyAtConstruct()
    {
        $this->assertType('Pages_Model_PageEntries', $this->_gb);
        $this->assertFalse($this->_gb->hasEntries());
        $this->assertSame(0, count($this->_gb->getEntries()));
        $this->assertSame(0, count($this->_gb));
    }

    public function testPagesAddEntry()
    {
        $page = new Pages_Model_Pages();
        $page->setActive(1)
            ->setDeleted(0)
            ->setTitle('This is a test')
            ->setPath('test');

        $this->_gb->addEntry($page);
        $this->assertTrue($this->_gb->hasEntries());
        $this->assertSame(1, count($this->_gb));
    }

    public function gbEntryProvider()
    {
        return array(
            'path' => 'test_user',
            'title' => 'Test User',
            'description' => 'Test User',
            'contentHtml' => 'This is a test',
            'contentMarkdown' => 'This is a test',
            'metaTitle' => 'Test User',
            'metaDescription' => 'This is a test',
            'metaKeywords' => 'This is a test',
            'sorting' => '0',
            'active' => '1',
            'deleted' => '0',
            'image' => '/upload/pages/1/LOGO-new.svg',
            'dateCreate' => '2016-06-20 00:00:00'
        );
    }

    public function testEntryCanBeOptionsAtConstruct()
    {
        $data = $this->gbEntryProvider();
        $entry = new Pages_Model_Pages($data);
        $this->assertSame($data, $entry->getOptions());
    }
}