<?php

class Media_Model_Mapper_Media
{

    protected $_dbTable = null;

    /**
     * @param $dbTable
     * @return $this
     * @throws Exception
     */
    public function setDbTable($dbTable)
    {
        if (is_string($dbTable))
        	$dbTable = new $dbTable();
        
        if (!$dbTable instanceof Zend_Db_Table_Abstract)
        	throw new Exception('Invalid table data gateway provided');
        
        $this->_dbTable = $dbTable;
        
        return $this;
    }

    /**
     * @return Media_Model_DbTable_Media
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable)
        	$this->setDbTable('Media_Model_DbTable_Media');
        
        return $this->_dbTable;
    }

    /**
     * @param Media_Model_Media $media
     * @return $this
     */
    public function save(Media_Model_Media $media)
    {
        $data = $this->_getDbData($media);
        
        if (null == ($id = $media->getId())) {
        	unset($data[$this->_getDbPrimary()]);
        	$this->getDbTable()->insert($data);
        } else {
        	$this->getDbTable()->update($data, array($this->_getDbPrimary(). ' = ?' => $id));
        }
        
        return $this;
    }

    /**
     * @param $id
     * @param Media_Model_Media $media
     * @return Media_Model_Media|null
     */
    public function find($id, Media_Model_Media $media)
    {
        $result = $this->getDbTable()->find($id);
        
        if (0 == count($result)) {
        	return null;
        }
        
        $row = $result->current();
        $entry = $this->_setDbData($row, $media);
        
        return $entry;
    }

    /**
     * @param null $select
     * @return array
     */
    public function fetchAll($select = null)
    {
        $resultSet = $this->getDbTable()->fetchAll($select);
        
        $entries   = array();
        foreach ($resultSet as $row) {
        	$entry = new Media_Model_Media();
        	$entry = $this->_setDbData($row, $entry);
        	$entries[] = $entry;
        }
        
        return $entries;
    }

    /**
     * @return mixed
     */
    protected function _getDbPrimary()
    {
        $primaryKey = $this->getDbTable()->info('primary');
        
        return $primaryKey[1];
    }

    /**
     * @param Media_Model_Media $media
     * @return array
     */
    protected function _getDbData(Media_Model_Media $media)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        $data = array();
        foreach ($properties as $property) {
        	$name = $this->_normaliseName($property);
        
        	if($property != $this->_getDbPrimary())
        		$data[$property] = $media->__get($name);
        }
        
        return $data;
    }

    /**
     * @param Zend_Db_Table_Rowset $row
     * @param Media_Model_Media $entry
     * @return Media_Model_Media
     */
    protected function _setDbData($row, Media_Model_Media $entry)
    {
        $info = $this->getDbTable()->info();
        $properties = $info['cols'];
        
        foreach ($properties as $property) {
        	$entry->__set($this->_normaliseName($property), $row->$property);
        }
        
        return $entry;
    }

    /**
     * @param $property string
     * @return string
     */
    protected function _normaliseName($property)
    {
        $name = preg_split('~_~', $property);
        $normaliseName = implode(array_map('ucwords', $name));
        
        return $normaliseName;
    }

    /**
     * @param $column string
     * @return array
     */
    public function fetchFreeRowColumn($column)
    {
        $select = $this->getDbTable()->select();
        $select->where($column.' = ?', '')
            ->orWhere($column.' IS NULL');
        $entries = $this->fetchAll($select);

        return $entries;
    }

    /**
     * @param $column string
     * @return array
     */
    public function fetchDublicateRowColumn($column)
    {
        $table = $this->getDbTable();

        $select = $table->select()
            ->from(
                $table->info('name'),
                array('count' => 'COUNT(*)', '*')
            )
            ->group($column)
            ->having('count > 1')
        ;
        $entries   = $this->fetchAll($select);

        return $entries;
    }

    /**
     * @param $id
     * @return array|string
     */
    public function generateFullPath($id)
    {
        $empty = $this->getDbTable()->find($id)->current();

        $category = $empty->findParentRow('Media_Model_DbTable_MediaCategories','CategoriesRel');
        if(is_null($category)){
            $result = $empty->path;
        }
        else{
            $result = array();
            $result[] = $empty->path;
            $result[] = $category->path;

            if(!empty($result)){
                $result = array_reverse($result);
            }
            $result = trim(implode('/',$result));
        }

        return $result;
    }

    /**
     * @param $fullPath
     * @param Media_Model_Media $media
     * @return Media_Model_Media|null
     */
    public function findByFullPath($fullPath, Media_Model_Media $media)
    {
        $table = $this->getDbTable();
        $select = $table->select()
            ->where('full_path = ?', $fullPath);

        $result = $table->fetchAll($select);

        if(0 == count($result))
            return null;

        $row = $result->current();
        $entry = $this->_setDbData($row, $media);

        return $entry;
    }


    /**
     * @param $column
     * @param $value
     * @return Media_Model_Media|null
     * @throws Zend_Db_Table_Exception
     */
    public function findBy($column, $value)
    {
        $table = $this->getDbTable();
        $cols = $table->info('cols');

        if(!in_array($column, $cols))
            return null;

        $select = $table->select()
            ->where($column.' = ?', $value);

        $result = $table->fetchAll($select);

        if(0 == count($result))
            return null;

        $row = $result->current();

        $entry = $this->_setDbData($row, new Media_Model_Media());

        return $entry;

    }

    /**
     * @param $column string
     * @param $value string
     * @return array|null
     * @throws Zend_Db_Table_Exception
     */
    public function fetchBy($column, $value)
    {
        $table = $this->getDbTable();
        $cols = $table->info('cols');

        if(!in_array($column, $cols))
            return null;

        $select = $table->select()
            ->where($column.' = ?', $value);

        $result = $table->fetchAll($select);

        if(0 == count($result))
            return null;
        
        $entries   = array();
        foreach ($result as $row) {
            $entry = new Media_Model_Media();
            $entry = $this->_setDbData($row, $entry);
            $entries[] = $entry;
        }
        return $entries;
    }

    /**
     * @return Zend_Search_Lucene_Interface
     */
    public function addSearchIndex()
    {
        Zend_Search_Lucene_Analysis_Analyzer::setDefault(
            new Zend_Search_Lucene_Analysis_Analyzer_Common_Utf8_CaseInsensitive());

        // Создание индекса
        $index = Zend_Search_Lucene::open(APPLICATION_ROOT.'/data/media-index');

        $select = $this->getDbTable()->select();
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id IN(?)', array(2, 3, 4))
            ->order('timestamp DESC');

        $mediaItems = $this->fetchAll($select);

        if(!empty($mediaItems)){
            foreach ($mediaItems as $mediaItem) {
                $doc = new Zend_Search_Lucene_Document();

                // Сохранение Name документа для того, чтобы идентифицировать его
                // в результатах поиска
                $doc->addField(Zend_Search_Lucene_Field::Text('title', strtolower($mediaItem->getName())));

                // Сохранение URL документа для того, чтобы идентифицировать его
                // в результатах поиска
                $doc->addField(Zend_Search_Lucene_Field::Text('url', '/media/'.$mediaItem->getFullPath()));

                // Сохранение Description документа для того, чтобы идентифицировать его
                // в результатах поиска
                // $doc->addField(Zend_Search_Lucene_Field::Text('description', strtolower($mediaItem->getSContent())));

                // Индексирование keyWords содержимого документа
                $doc->addField(Zend_Search_Lucene_Field::UnStored('keyword', strtolower($mediaItem->getMetaKeywords())));

                // Индексирование содержимого документа
                $doc->addField(Zend_Search_Lucene_Field::UnStored('contents', strtolower($mediaItem->getContent())));

                // Добавление документа в индекс
                $index->addDocument($doc);
            }
        }

        return $index;
    }
}
