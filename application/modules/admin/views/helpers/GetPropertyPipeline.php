<?php

class Zend_View_Helper_getPropertyPipeline extends Zend_View_Helper_Abstract
{
    function getPropertyPipeline($property_id){
        $pipelineMapper = new Pipeline_Model_Mapper_PipelineProperty();;
        $property = $pipelineMapper->find($property_id, new Pipeline_Model_PipelineProperty());

        return $property;
    }
}