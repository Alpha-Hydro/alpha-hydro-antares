<?php

class Admin_SearchIndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $indexName = 'media-index';
        $module = 'media';
        $index = Zend_Search_Lucene::create(APPLICATION_ROOT.'/data/'.$indexName);

        $moduleMapperName = ucfirst($module).'_Model_Mapper_'.ucfirst($module);

        $moduleMapper =  new $moduleMapperName();
        $moduleMapper =  new Media_Model_Mapper_Media();

        $indexModule = $moduleMapper->addSearchIndex();
        var_dump($indexModule->count());

        $form = new Admin_Form_CreateSearchIndex();

        $this->view->form = $form;
    }

    public function createAction()
    {
        // action body
    }

    public function updateAction()
    {
        // action body
    }

    public function deleteAction()
    {
        // action body
    }

    public function optimizeAction()
    {
        // action body
    }


}









