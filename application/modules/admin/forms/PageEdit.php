<?php

class Admin_Form_PageEdit extends Twitter_Bootstrap_Form_Horizontal
{

    public function init()
    {
        //$this->setIsArray(true);

        $this->addElement('hidden', 'id', array());

        $this->addElement('text', 'path', array(
            'label'         => 'Url страницы',
            'placeholder'   => 'Url страницы',
            'required'      => true,
        ));

        $this->addElement('text', 'title', array(
            'label'         => 'Заголовок страницы',
            'placeholder'   => 'Заголовок страницы',
            'required'      => true,
        ));

        $this->addElement('textarea', 'description', array(
            'label'         => 'Краткое описание страницы',
            'placeholder'   => 'Краткое описание страницы',
            'rows'          => '8',
        ));

        $this->addElement('textarea', 'content_markdown', array(
            'label'         => 'Код страницы',
            'placeholder'   => 'Код страницы',
        ));

        $this->addElement('text', 'sorting', array(
            'label'         => 'Сортировка',
        ));

        $this->addElement('checkbox', 'active', array(
            'label'         => 'Активность',
        ));

        $this->addElement('checkbox', 'deleted', array(
            'label'         => 'Cтраница удалена',
        ));



        $this->addElement('button', 'submit', array(
            'label'         => 'Sing in',
            'type'          => 'submit',
            'buttonType'    => 'success',
            'ignore' => true,
            //'escape'        => false
        ));

        $this->addElement('hash', 'csrf', array(
            'ignore' => true,
        ));
    }

}

