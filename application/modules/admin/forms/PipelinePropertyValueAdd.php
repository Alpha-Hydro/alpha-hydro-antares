<?php

class Admin_Form_PipelinePropertyValueAdd extends Twitter_Bootstrap_Form_Horizontal
{

    public function init()
    {
        $this->addElement('hidden', 'pipelineId');

        $this->addElement('select', 'propertyId', array(
            'label'         => 'Свойство',
            'placeholder'   => 'Свойство',
            'required'      => true,
            'multiOptions'  => $this->_getPropertyArray(),
        ));

        $this->addElement('text', 'value', array(
            'label'         => 'Значение',
            'placeholder'   => 'Значение',
        ));

    }

    protected function _getPropertyArray()
    {
        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $select = $pipelinePropertyMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $pipelinePropertyArray = array();
        $pipelinePropertyArray[] = '...';
        $pipelineProperty = $pipelinePropertyMapper->fetchAll($select);

        if(!empty($pipelineProperty)){
            foreach ($pipelineProperty as $property) {
                $pipelinePropertyArray[$property->getId()] = $property->getName();
            }
        }

        return $pipelinePropertyArray;

    }

}

