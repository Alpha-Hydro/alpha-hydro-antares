<?php

class Admin_Form_ManufactureEdit extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $this->addElement('hidden', 'id');

        $this->addElement('select', 'categoryId', array(
            'label'     => 'Категория',
            'required'  => true,
            'multiOptions' => $this->getCategoryArray(),
        ));

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

        /*$this->addElement('text', 'fullPath', array(
            'label'         => 'Url страницы',
            'placeholder'   => 'Url страницы',
            'required'      => true,
        ));*/

        $this->addElement('hidden', 'image');

        $this->addElement('image', 'imageLoad', array(
            'label'         => 'Изображение',
            'class'         => 'img-thumbnail',
            'data-toggle'   => 'tooltip',
            'data-placement'=> 'bottom',
            'title'         => 'Загрузить изображение',
        ));

        $image = new Zend_Form_Element_File('imageLoadFile');
        $image->setDestination(APPLICATION_ROOT.'/upload/manufacture/items/')
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,gif')
            ->setAttrib('class', 'hidden');
        $this->addElement($image);

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
            //'escape'        => true
        ));

        $this->getElement('submit')->removeDecorator('label');

        /*$this->addElement('hash', 'csrf', array(
            'ignore' => true,
        ));*/

        /*$classForm = $this->getAttrib('class');
        $this->addAttribs(array(
            'class' => 'tab-content '.$classForm,
        ));*/
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

