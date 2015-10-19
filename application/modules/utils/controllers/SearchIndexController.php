<?php

class Utils_SearchIndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $indexName = 'my-index';
        $index = Zend_Search_Lucene::open(APPLICATION_ROOT.'/data/'.$indexName);
        $indexSize = $index->count();
        $indexDocuments = $index->numDocs();

        $this->view->indexName = $indexName;
        $this->view->indexSize = $indexSize;
        $this->view->indexDocuments = $indexDocuments;
    }

    public function createAction()
    {
        Zend_Search_Lucene_Analysis_Analyzer::setDefault(
            new Zend_Search_Lucene_Analysis_Analyzer_Common_Utf8_CaseInsensitive());

        // Создание индекса
        $index = Zend_Search_Lucene::create(APPLICATION_ROOT.'/data/my-index');

        $mediaMapper = new Media_Model_Mapper_Media();
        $select = $mediaMapper->getDbTable()->select();
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id IN(?)', array(2, 3, 4))
            ->order('timestamp DESC');

        $mediaItems = $mediaMapper->fetchAll($select);

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
    }

    public function updateAction()
    {
        Zend_Search_Lucene_Analysis_Analyzer::setDefault(
            new Zend_Search_Lucene_Analysis_Analyzer_Common_Utf8_CaseInsensitive());

        // Создание индекса
        $index = Zend_Search_Lucene::create(APPLICATION_ROOT.'/data/my-index');

        $mediaMapper = new Media_Model_Mapper_Media();
        $select = $mediaMapper->getDbTable()->select();
        $select
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->where('category_id IN(?)', array(2, 3, 4))
            ->order('timestamp DESC');

        $mediaItems = $mediaMapper->fetchAll($select);

        if(!empty($mediaItems)){
            foreach ($mediaItems as $mediaItem) {
                $doc = new Zend_Search_Lucene_Document();

                // Сохранение Name документа для того, чтобы идентифицировать его
                // в результатах поиска
                $doc->addField(Zend_Search_Lucene_Field::Text('title', strtolower($mediaItem->getName()), 'UTF-8'));

                // Сохранение URL документа для того, чтобы идентифицировать его
                // в результатах поиска
                $doc->addField(Zend_Search_Lucene_Field::Text('url', '/media/'.$mediaItem->getFullPath(), 'UTF-8'));

                // Сохранение Description документа для того, чтобы идентифицировать его
                // в результатах поиска
                // $doc->addField(Zend_Search_Lucene_Field::Text('description', strtolower($mediaItem->getSContent()),'UTF-8'));

                // Индексирование keyWords содержимого документа
                $doc->addField(Zend_Search_Lucene_Field::UnStored('keyword', strtolower($mediaItem->getMetaKeywords()), 'UTF-8'));

                // Индексирование содержимого документа
                $doc->addField(Zend_Search_Lucene_Field::UnStored('contents', strtolower($mediaItem->getContent()), 'UTF-8'));

                // Добавление документа в индекс
                $index->addDocument($doc);
            }
        }
    }

    public function optimizeAction()
    {
        // action body
    }

    public function deleteAction()
    {
        // action body
    }

    public function testAction()
    {
        Zend_Search_Lucene_Analysis_Analyzer::setDefault(
            new Zend_Search_Lucene_Analysis_Analyzer_Common_Utf8_CaseInsensitive());

        Zend_Search_Lucene_Search_QueryParser::setDefaultEncoding('UTF-8');

        $index = Zend_Search_Lucene::open(APPLICATION_ROOT.'/data/my-index');

        $phrase = 'альфа';
        $query = Zend_Search_Lucene_Search_QueryParser::parse($phrase);

        $hits = $index->find(strtolower($query));

        //var_dump($hits);
        foreach ($hits as $hit) {
            // возвращает объект для этого "хита"
            $document = $hit->getDocument();

            // возвращает объект Zend_Search_Lucene_Field
            // из Zend_Search_Lucene_Document
            $document->getField('title');
            var_dump($document->getField('title'));

            echo '<br>';
            echo '<br>';

            // возвращает строковое значение объекта Zend_Search_Lucene_Field
            /*echo $document->getFieldValue('title');

            // делает то же самое, что и getFieldValue()
            echo $document->title;*/
        }
    }

}













