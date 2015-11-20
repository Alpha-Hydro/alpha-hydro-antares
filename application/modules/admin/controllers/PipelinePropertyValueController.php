<?php

class Admin_PipelinePropertyValueController extends Zend_Controller_Action
{

    protected $_redirector = null;

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('add-test', 'html')
            ->initContext('html');

        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        // action body
    }

    public function addAction()
    {
        $request = $this->getRequest();

        $form = new Admin_Form_PipelinePropertyValueAdd();

        if ($request->isPost()){
            $pipelinePropertyValues = new Pipeline_Model_PipelinePropertyValues();

            $pipelinePropertyValues->setPipelineId($request->getParam('pipelineId'));
            $pipelinePropertyValues->setPropertyId($request->getParam('propertyId'));

            if($request->getParam('valueText'))
                $pipelinePropertyValues->setValue($request->getParam('valueText'));

            if($request->getParam('valueTextArea'))
                $pipelinePropertyValues->setValue($request->getParam('valueTextArea'));

            if(!empty($_FILES)){
                $file = $form->valueLoadFile->getFileInfo();
                if($file['valueLoadFile']['name'] !== ''){
                    $form->valueLoadFile->receive();
                    $pipelinePropertyValues->setValue('/upload/pipeline/items/'.$file['imageLoadFile']['name']);
                }
            }

            $pipelinePropertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();
            $pipelinePropertyValuesMapper->save($pipelinePropertyValues);
        }

        $this->_helper->redirector('edit','pipeline','admin',array('id' => $request->getParam('pipelineId')));
        return;
    }

    public function addTestAction()
    {
        //var_dump($this->getAllParams());
        $request = $this->getRequest();

        $this->view->sorting = 0;

        if($request->isPost()){
            $pipelinePropertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();
            $pipelinePropertyValues = $pipelinePropertyValuesMapper
                ->findByKey(
                    $request->getParam('pipelineId'),
                    $request->getParam('propertyId'),
                    new Pipeline_Model_PipelinePropertyValues()
                );

            if(!is_null($pipelinePropertyValues)){
                $value = $pipelinePropertyValues->getValue();
                $pipelinePropertyValues->setValue($value.', '.$request->getParam('value'));
            }
            else{
                $pipelinePropertyValues = new Pipeline_Model_PipelinePropertyValues();

                $pipelinePropertyValues->setPipelineId($request->getParam('pipelineId'));
                $pipelinePropertyValues->setPropertyId($request->getParam('propertyId'));
                $pipelinePropertyValues->setValue($request->getParam('value'));
            }

            $pipelinePropertyValuesMapper->save($pipelinePropertyValues);

            $this->view->propertyValues = $pipelinePropertyValues;

            $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
            $pipelineProperty = $pipelinePropertyMapper->find($request->getParam('propertyId'), new Pipeline_Model_PipelineProperty());
            $this->view->name = $pipelineProperty->getName();

            if($request->getParam('sorting') != 0){
                $pipelineProperty->setSorting($request->getParam('sorting'));
                $pipelinePropertyMapper->save($pipelineProperty);

                $this->view->sorting = $pipelineProperty->getSorting();
            }
        }
    }


}





