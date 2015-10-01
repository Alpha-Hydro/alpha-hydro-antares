<?php

class Forum_Form_ForumAsk extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $this->addElement('text', 'author', array(
            'label'         => 'Имя',
            'placeholder'   => 'Ваше имя',
            'required'      => true,
        ));

        $this->addElement('text', 'email', array(
            'label'         => 'E-mail',
            'placeholder'   => 'Ваш email',
            'required'      => true,
        ));

        $this->getElement('email')->addValidator('EmailAddress', true);

        $this->addElement('select', 'category',
            array(
                'label'         => 'В форум',
                'required'      => true,
                'multiOptions'  => array(
                    'Вопросы и запросы'     =>'Вопросы и запросы',
                    'Отзывы и предложения'  =>'Отзывы и предложения',
                    'Книга жалоб'           =>'Книга жалоб',
                ),
            )
        );

        $this->addElement('textarea', 'content',
            array(
                'label'         => 'Ваш вопрос',
                'placeholder'   => 'Ваш вопрос',
                'required'      => true,
                'rows'  => 5,
            )
        );

        $elements = $this->getElements();
        foreach ($elements as $element){
            if ($element->isRequired()) {
                $element->setAttrib('required', 'required');
            }
        }

    }


}

