<?php

class Utils_Form_Auth extends Twitter_Bootstrap_Form_Horizontal
{

    public function init()
    {
        $this->setIsArray(true);
        //$this->setElementsBelongTo('bootstrap');

        $this->_addClassNames('well well-lg');

        $this->addElement('text', 'username', array(
            'label'         => 'Login',
            'placeholder'   => 'E-mail',
            'prepend'       => '@',
        ));

        $this->addElement('password', 'password', array(
            'label'         => 'Password',
            'placeholder' => 'Password',
            'prepend'       => '&#128274;',
        ));

        $this->addElement('button', 'submit', array(
            'label'         => 'Sing in',
            'type'          => 'submit',
            'buttonType'    => 'success',
            //'escape'        => false
        ));

        $this->addElement('button', 'reset', array(
            'label'         => 'Reset',
            'type'          => 'reset'
        ));


        $this->addDisplayGroup(
            array('username', 'password', 'submit', 'reset'),
            'login',
            array(
                'legend' => 'Administrator'
            )
        );

    }


}

