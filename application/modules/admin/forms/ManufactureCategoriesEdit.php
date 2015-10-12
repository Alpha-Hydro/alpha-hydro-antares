<?php

class Admin_Form_ManufactureCategoriesEdit extends Twitter_Bootstrap_Form_Horizontal
{

    public function init()
    {
        $this->addElement('hidden', 'id');
        $this->addElement('hidden', 'parentId');

        $image = new Zend_Form_Element_File('imageLoadFile');
        $image->setDestination(APPLICATION_ROOT.'/upload/manufacture/category/')
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,gif')
            ->setAttrib('class', 'hidden');
        $this->addElement($image);


        $this->addElement('text', 'title', array(
            'label'         => 'Заголовок страницы',
            'placeholder'   => 'Заголовок страницы',
            'required'      => true,
            'class'         => 'slugify',
            'data-slugify'  => 'path',
        ));

        $this->addElement('text', 'path', array(
            'label'         => 'Url страницы',
            'placeholder'   => 'Url страницы',
            'required'      => true,
        ));

        $this->addElement('text', 'image', array(
            'label'         => 'Изображение',
            'prepend'       => '<i class="glyphicon glyphicon-eye-open"></i>',
            'disabled'      => true,
        ));
        $this->addElement('button', 'imageLoad', array(
            'label'         => 'Загрузить изображение',
            'type'          => 'button',
            'class'         => 'image-btn',
            'ignore' => true,
        ));

        $this->addElement('textarea', 'description', array(
            'label'         => 'Краткое описание страницы',
            'placeholder'   => 'Краткое описание страницы',
            'rows'          => '8',
        ));

        $this->addElement('textarea', 'contentMarkdown', array(
            'label'         => 'Текст на странице (markdown)',
            'placeholder'   => 'Текст',
            'rows'          => '15',
        ));

        $this->addDisplayGroup(
            array(
                'title',
                'path',
                'image',
                'imageLoad',
                'description',
                'contentMarkdown',
            ),
            'basic',
            array(
                //'legend' => 'Основные',
                'class' => 'tab-pane active',
                'role'  => 'tabpanel'
            )
        );

        $this->addElement('text', 'metaTitle', array(
            'label'         => 'SEO title',
            'placeholder'   => 'meta title',
        ));

        $this->addElement('textarea', 'metaDescription', array(
            'label'         => 'SEO description',
            'placeholder'   => 'meta description',
            'rows'          => '8',
        ));

        $this->addElement('textarea', 'metaKeywords', array(
            'label'         => 'SEO keywords',
            'placeholder'   => 'meta keywords',
            'rows'          => '8',
        ));

        $this->addDisplayGroup(
            array(
                'metaTitle',
                'metaDescription',
                'metaKeywords',
            ),
            'seo',
            array(
                //'legend' => 'SEO',
                'class' => 'tab-pane',
                'role'  => 'tabpanel',

            )
        );

        $this->addElement('text', 'sorting', array(
            'label'         => 'Сортировка',
        ));

        $this->addElement('checkbox', 'active', array(
            'label'         => 'Активность',
        ));

        $this->addElement('checkbox', 'deleted', array(
            'label'         => 'Cтраница удалена',
        ));

        $this->addDisplayGroup(
            array(
                'sorting',
                'active',
                'deleted'
            ),
            'additionally',
            array(
                //'legend' => 'Дополнительно',
                'class' => 'tab-pane',
                'role'  => 'tabpanel'
            )
        );

        $this->addElement('button', 'submit', array(
            'label'         => 'Сохранить',
            'type'          => 'submit',
            'buttonType'    => 'success',
            'ignore' => true,
            //'escape'        => false
        ));

        /*$this->addElement('hash', 'csrf', array(
            'ignore' => true,
        ));*/

        $classForm = $this->getAttrib('class');
        $this->addAttribs(array(
            'class' => 'tab-content '.$classForm,
        ));
    }


}

