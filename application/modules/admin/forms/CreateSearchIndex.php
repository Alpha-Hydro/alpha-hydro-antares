<?php

class Admin_Form_CreateSearchIndex extends Twitter_Bootstrap_Form_Horizontal
{
    public $modules = array(
        'manufacture' => 'manufacture',
        'media' => 'media',
        'oil' => 'oil',
        'pipeline' => 'pipeline',
        'forum' => 'forum',
    );

    public function init()
    {
        //$this->addElement('hidden', 'id');

        $this->addElement('text', 'name', array(
            'label'         => 'Имя индекса',
            'placeholder'   => 'Имя Индекса',
            'required'      => true,
        ));

        $this->addElement('select', 'module', array(
            'label'         => 'Модуль',
            'placeholder'   => 'Модуль',
            'required'      => true,
            'multiOptions'  => $this->modules,
        ));

        $this->addElement('button', 'submit', array(
            'label'         => 'Создать индекс',
            'type'          => 'submit',
            'buttonType'    => 'success',
            'ignore' => true,
            //'escape'        => false
        ));
    }


}

