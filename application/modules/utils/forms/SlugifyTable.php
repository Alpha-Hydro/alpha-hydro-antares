<?php

class Utils_Form_SlugifyTable extends Zend_Form
{

    public function init()
    {
        $this->setName('slugify');

        // сообщение о незаполненном поле
        $isEmptyMessage = 'Значение является обязательным и не может быть пустым';

        $table = new Zend_Form_Element_Select('table');

        $table->setLabel('Таблица');
        $table->addMultiOptions(array(
            'categories' => 'categories',
            'products' => 'products'
        ));

        // создаём кнопку submit
        $submit = new Zend_Form_Element_Submit('login');
        $submit->setLabel('Генерировать');

        // добавляем элементы в форму
        $this->addElements(array($table, $submit));

        // указываем метод передачи данных
        $this->setMethod('post');
    }


}

