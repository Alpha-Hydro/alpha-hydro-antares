<?php

class Admin_Form_Auth extends Twitter_Bootstrap_Form_Horizontal
{

    public function init()
    {
        $this->setIsArray(true);
        //$this->setElementsBelongTo('bootstrap');

        $this->_addClassNames('well well-lg');

        $this->addElement('text', 'username', array(
            'label'         => 'Логин',
            'placeholder'   => 'E-mail',
            'prepend'       => '@',
        ));

        $this->addElement('password', 'password', array(
            'label'         => 'Пароль',
            'placeholder' => 'Пароль',
            'prepend'       => '&#128274;',
        ));

        $this->addElement('button', 'submit', array(
            'label'         => 'Вход',
            'type'          => 'submit',
            'buttonType'    => 'success',
            //'escape'        => false
        ));

        $this->addElement('button', 'reset', array(
            'label'         => 'Отмена',
            'type'          => 'reset'
        ));


        $this->addDisplayGroup(
            array('username', 'password', 'submit', 'reset'),
            'login',
            array(
                'legend' => 'Вход в админ панель'
            )
        );

    }


}

