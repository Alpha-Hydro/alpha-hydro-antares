<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 16.09.2015
 * Time: 11:32
 */
class Zend_View_Helper_getPipelineProperties extends Zend_View_Helper_Abstract
{
    /**
     * @param $pipeline_id
     * @return array
     */
    function GetPipelineProperties($pipeline_id){

        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();
        $pipelineProperties = $pipelineMapper->fetchPropertyRel($pipeline_id);

        $properties = array();
        if(!empty($pipelineProperties)){
            $propertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();

            foreach ($pipelineProperties as $property) {
                $propertyValues = $propertyValuesMapper->findByKey($pipeline_id, $property->getId(), new Pipeline_Model_PipelinePropertyValues());
                $properties[$property->getName()] = $propertyValues;
            }
        }

        return $properties;
    }
}