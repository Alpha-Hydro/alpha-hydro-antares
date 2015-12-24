<?php

class Admin_Form_PipelinePropertyEdit extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $this->addElement('hidden', 'id');

        $this->addElement('text', 'name', array(
            'label'         => 'Наименование',
            'placeholder'   => 'Наименование свойства',
            'required'      => true,
            'class'         => 'slugify',
            'data-slugify'  => 'sistemName',
        ));

        $this->addElement('text', 'sistemName', array(
            'label'         => 'Системное имя',
            'placeholder'   => 'Системное имя',
            'required'      => true,
        ));

        $this->addElement('select', 'type', array(
            'label'         => 'Тип',
            'placeholder'   => 'Тип',
            'required'      => true,
            'multiOptions'  => array(
                '0' => 'string', //tetx
                '1' => 'text', //textarea
                '2' => 'image', //file
                '3' => 'file', //file
                '4' => 'checkbox',
                '5' => 'radio',
            ),
        ));

        $this->addElement('text', 'sorting', array(
            'label'         => 'Сортировка',
        ));

        $this->addElement('checkbox', 'showList', array(
            'label'         => 'Показывать в списке свойств товара',
        ));

        $this->addElement('checkbox', 'active', array(
            'label'         => 'Активность',
        ));

        $this->addElement('checkbox', 'deleted', array(
            'label'         => 'Свойство удалено',
        ));

        /*$this->addElement('button', 'submit', array(
            'label'         => 'Сохранить',
            'type'          => 'submit',
            'buttonType'    => 'success',
            'ignore' => true,
        ));*/

        $this->addAttribs(array(
            'id' => 'itemEdit',
        ));
    }


}

