<?php

class Admin_Form_PipelinePropertyValueAdd extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $this->setAttrib('id', 'pipelinePropertyValueAdd')
            ->setAction('/admin/pipeline-property-value/add')
            ->setMethod('post')
            ->setEnctype(Zend_Form::ENCTYPE_MULTIPART);

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
            'disabled'      => 'disabled',
        ));

        $this->addElement('text', 'valueText', array(
            'label'         => 'Значение',
            'placeholder'   => 'Значение',
            'required'      => true,
        ));

        $this->addElement('textarea', 'valueTextArea', array(
            'label'         => 'Значение',
            'placeholder'   => 'Значение',
            'rows' => '4',
            'required'      => true,
        ));

        $file = new Zend_Form_Element_File('valueLoadFile');
        $file->setDestination(APPLICATION_ROOT.'/upload/pipeline/items/')
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,gif,pdf')
            ->setLabel('Значение');
        $this->addElement($file);
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

