<?php

class Utils_TestController extends Zend_Controller_Action
{

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('add', 'html')
            ->addActionContext('edit', 'html')
            ->addActionContext('delete', 'html')
            ->initContext('html');
    }

    public function indexAction()
    {
        $itemId = 1;

        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();

        $pipelineProperties = $pipelineMapper->fetchPropertyRel($itemId);

        if(!empty($pipelineProperties)){
            $propertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();

            $viewProperties = array();
            foreach ($pipelineProperties as $property) {
                $propertyValues = $propertyValuesMapper->findByKey($itemId, $property->getId(), new Pipeline_Model_PipelinePropertyValues());
                $viewProperties[$property->getName()] = $propertyValues;
            }
            $this->view->properties = $viewProperties;
        }



        $formValue = new Admin_Form_PipelinePropertyValue();
        $formValue->setDefaults(array(
            'pipelineId' => $itemId,
            'propertyId' => 0,
            'sorting' => 0,
        ));
        $this->view->formValue = $formValue;
    }

    public function addAction()
    {
        var_dump($this->getAllParams());
    }

    public function editAction()
    {
        var_dump($this->getAllParams());
    }

    public function deleteAction()
    {
        var_dump($this->getAllParams());
    }


}







