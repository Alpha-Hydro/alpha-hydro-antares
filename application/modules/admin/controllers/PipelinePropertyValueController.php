<?php

class Admin_PipelinePropertyValueController extends Zend_Controller_Action
{
    protected $_redirector = null;

    public function init()
    {
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


}



