<?php
use \Michelf\Markdown;
include_once 'Michelf/Markdown.php';

class Admin_PipelineController extends Zend_Controller_Action
{

    protected $_count_item_on_page = null;

    public function init()
    {
        $this->_count_item_on_page = 10;
    }

    public function indexAction()
    {
        $request = $this->getRequest();

        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();
        $select = $pipelineMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->order('sorting ASC');

        $pipelineItems = $pipelineMapper->fetchAll($select);

        if(!empty($pipelineItems)){
            if(count($pipelineItems)> $this->getCountItemOnPage()){
                $pipelinePages = array_chunk($pipelineItems, $this->getCountItemOnPage());

                $currentPage = 0;

                if($request->getParam('page') && $request->getParam('page')>0)
                    $currentPage = $request->getParam('page')-1;

                if($request->getParam('page') && $request->getParam('page')>count($pipelinePages))
                    $currentPage = count($pipelinePages)-1;

                $pipelineItems = $pipelinePages[$currentPage];
                $this->view->countPage = count($pipelinePages);
                $this->view->currentPage = $currentPage+1;
            }


        }

        $this->view->pages = $pipelineItems;
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $form = new Admin_Form_PipelineEdit();

        $form->setDefaults(array(
            'sorting'       => 0,
            'active'        => 1,
            'deleted'       => 0,
        ));

        if ($this->getRequest()->isPost()){
            if ($form->isValid($request->getPost())){
                $pipeline = new Pipeline_Model_Pipeline($form->getValues());
                $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();

                $pipelineCategoryMapper = new Pipeline_Model_Mapper_PipelineCategories();
                $pipelineCategory = $pipelineCategoryMapper->find($request->getParam('categoryId'),
                    new Pipeline_Model_PipelineCategories());

                $fullPath = (!is_null($pipelineCategory))
                    ?$pipelineCategory->getPath().'/'.$this->getParam('path')
                    :$this->getParam('path');
                $pipeline->setFullPath($fullPath);

                $file = $form->imageLoadFile->getFileInfo();
                if(!empty($file) && $file['imageLoadFile']['name'] !== ''){
                    $form->imageLoadFile->receive();
                    $pipeline->setImage('/upload/pipeline/items/'.$file['imageLoadFile']['name']);
                }

                $markdown = $request->getParam('contentMarkdown');
                $context_html = Markdown::defaultTransform($markdown);
                $pipeline->setContentHtml($context_html);

                $metaTitle = $request->getParam('metaTitle');
                if(empty($metaTitle))
                    $pipeline->setMetaTitle($request->getParam('title'));

                $description = $request->getParam('description');
                $metaDescription = $request->getParam('metaDescription');
                if(empty($metaDescription) && !empty($description))
                    $pipeline->setMetaDescription($description);

                $pipelineMapper->save($pipeline);

                return $this->_helper->redirector('index');

            }

            $form->setDefaults($request->getPost());
            $this->view->formData = $form->getValues();
        }

        $this->view->form = $form;
    }

    /**
     * @param null $count_item_on_page
     * @return Admin_PipelineController
     *
     *
     *
     */
    public function setCountItemOnPage($count_item_on_page)
    {
        $this->_count_item_on_page = $count_item_on_page;
        return $this;
    }

    /**
     * @return null
     *
     *
     *
     */
    public function getCountItemOnPage()
    {
        return $this->_count_item_on_page;
    }

    public function editAction()
    {
        // action body
    }

    public function deleteAction()
    {
        // action body
    }


}







