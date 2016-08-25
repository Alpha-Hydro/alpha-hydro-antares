<?php

class Admin_Form_ManufactureEdit extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $this->addElement('hidden', 'id');
        //$this->addElement('hidden', 'path');
        $this->addElement('hidden', 'fullPath');

        $image = new Zend_Form_Element_File('imageLoadFile');
        $image
            ->setValueDisabled(true)
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,gif')
            ->setAttribs(
                array(
                    'class' => 'hidden',
                    'data-input' => 'image',
                    'data-upload' => '/upload/manufacture/items'
                )
            );
        $this->addElement($image);

        $this->addElement('hidden', 'image');

        $this->addElement('image', 'imageLoad', array(
            'label'         => null,//'Изображение',
            'class'         => 'img-thumbnail',
            'data-toggle'   => 'tooltip',
            'data-placement'=> 'bottom',
            'data-input' => 'image',
            'title'         => 'Загрузить изображение',
        ));

        $this->addElement('select', 'categoryId', array(
            'label'     => 'Категория',
            'required'  => true,
            'multiOptions' => $this->getCategoryArray(),
        ));

        $this->addElement('text', 'title', array(
            'label'         => 'Заголовок страницы',
            'placeholder'   => 'Заголовок страницы',
            'required'      => true,
            //'class'         => 'slugify',
            //'data-slugify'  => 'path',
        ));

        $refreshPath = '<button type="button" class="refreshSlugify btn btn-default" data-slugify="path" data-sourse="title">
                            <span class="glyphicon glyphicon-refresh"></span>
                        </button>';
        $this->addElement('text', 'path', array(
            'label'         => 'Url',
            'placeholder'   => 'Url',
            'required'      => true,
            'prepend_btn'   => $refreshPath
        ));

        $this->addElement('textarea', 'description', array(
            'label'         => 'Краткое описание страницы',
            'placeholder'   => 'Краткое описание страницы',
            'rows'          => '4',
        ));

        $this->addElement('textarea', 'contentMarkdown', array(
            'label'         => 'Текст на странице (markdown)',
            'placeholder'   => 'Текст',
            'rows'          => '8',
        ));

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
            'rows'          => '4',
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

        $this->addDisplayGroup(
            array(
                'imageLoad',
                'imageLoadFile',
                'image',
            ),
            'imageGroup',
            array()
        );

        $this->addDisplayGroup(
            array(
                'categoryId',
                'title',
                'path',
                'fullPath',
                'id',
            ),
            'basic',
            array()
        );

        $this->addDisplayGroup(
            array(
                'description',
                'contentMarkdown',
            ),
            'desc',
            array(
                'class' => 'tab-pane active',
                'role'  => 'tabpanel'
            )
        );

        $this->addDisplayGroup(
            array(
                'metaTitle',
                'metaDescription',
                'metaKeywords',
            ),
            'seo',
            array(
                'class' => 'tab-pane',
                'role'  => 'tabpanel',

            )
        );

        $this->addDisplayGroup(
            array(
                'sorting',
                'active',
                'deleted'
            ),
            'additionally',
            array(
                'class' => 'tab-pane',
                'role'  => 'tabpanel'
            )
        );

        $this->addElement('button', 'submit', array(
            'label'         => 'Сохранить изменения',
            'type'          => 'submit',
            'buttonType'    => 'success',
            'ignore'        => true,
            'form'          => 'itemEdit',
            'id'            => 'saveItemEdit',
            'class'         => 'hidden'
        ));

        $this->getElement('submit')->removeDecorator('label');

    }

    /**
     * @return array
     */
    public function getCategoryArray()
    {
        $manufactureCategoryMapper = new Manufacture_Model_Mapper_ManufactureCategories();

        $categoryArray = array();
        $categoryArray[] = 'нет';
        foreach ($manufactureCategoryMapper->fetchAll() as $category) {
            $categoryArray[$category->getId()] = $category->getTitle();
        }

        return $categoryArray;

    }


}

