<?php
class Pages_Model_PageEntries implements Countable
{
    protected $_entries;

    protected $_count;

    public function __construct()
    {
        $this->_entries = array ();
        $this->_count = 0;
    }
    public function addEntry(Pages_Model_Pages $entry)
    {
        $this->_entries[] = $entry;
        $this->_count++;
        return $this;
    }
    public function hasEntries()
    {
        return 0 !== $this->count();
    }
    public function getEntries()
    {
        return $this->_entries;
    }
    public function count()
    {
        return $this->_count;
    }
}