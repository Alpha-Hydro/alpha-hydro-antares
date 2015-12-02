<?php

class Admin_Form_PipelinePropertyValue extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $this->setAttrib('id', 'pipelinePropertyValueAdd')
            ->setAction('/admin/pipeline-property-value/add')
            ->setMethod('post')
            ->setEnctype(Zend_Form::ENCTYPE_MULTIPART);

        $this->addElement('hidden', 'pipelineId');

        $this->addElement('select', 'propertyId', array(
            'placeholder'   => 'Свойство',
            'required'      => true,
            //'multiOptions'  => $this->_getPropertyArray(),
        ));

        $this->addElement('text', 'value', array(
            'placeholder'   => 'Значение',
            'required'      => true,
        ));

        $this->addElement('text', 'sorting', array(
            'placeholder'   => 'Порядок',
            'required'      => true,
            'size'         => 'col-md-2'
        ));

        $this->getElement('propertyId')->getDecorator('Wrapper')->setOption('class','mb0');
        $this->getElement('value')->getDecorator('Wrapper')->setOption('class','mb0');
        $this->getElement('sorting')->getDecorator('Wrapper')->setOption('class','mb0');

        $this->getElement('value')->setAttrib('required', 'required');

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

        $pipelinePropertyArray['new'] = 'Новое';

        return $pipelinePropertyArray;
    }

}

