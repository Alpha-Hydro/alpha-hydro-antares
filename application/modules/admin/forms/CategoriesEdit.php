<?php

class Admin_Form_CategoriesEdit extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $this->addElement('hidden', 'id');

        $image = new Zend_Form_Element_File('imageLoadFile');
        $image
            ->setValueDisabled(true)
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,gif')
            ->setAttribs(array(
                'class' => 'hidden',
                'data-input' => 'image',
                'data-upload' => '/upload/categories'
            ));
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
        
        $this->addElement('select', 'parentId', array(
            'label'     => 'Родительская категория',
            'required'  => true,
            'multiOptions' => $this->getCategoryArray(),
        ));

        $this->addElement('text', 'name', array(
            'label'         => 'Наименование категории',
            'placeholder'   => 'Нименование категории',
            'required'      => true,
            'class'         => 'slugify',
            'data-slugify'  => 'path',
        ));

        $this->addElement('text', 'path', array(
            'label'         => 'Url',
            'placeholder'   => 'Url',
            'required'      => true,
        ));

        $this->addElement('textarea', 'description', array(
            'label'         => 'Краткое описание категории',
            'placeholder'   => 'Краткое описание категории',
            'rows'          => '8',
        ));

        $this->addElement('text', 'metaTitle', array(
            'label'         => 'SEO title',
            'placeholder'   => 'meta title',
        ));

        $this->addElement('textarea', 'metaDescription', array(
            'label'         => 'SEO description',
            'placeholder'   => 'meta description',
            'rows'          => '4',
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
                'name',
                'parentId',
                'path',
                'id',
            ),
            'basic',
            array()
        );


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
                'description',
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
            'ignore' => true,
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
        $categoryMapper = new Media_Model_Mapper_MediaCategories();
        $select = $categoryMapper->getDbTable()->select();
        $select
            ->where('active != ?', 0)
            ->where('deleted != ?', 1)
            ->order('sorting ASC');

        $categoryArray = array();
        $categoryArray[0] = 'нет';

        $categories = $categoryMapper->fetchAll();

        if(!empty($categories)){
            /** @var Media_Model_MediaCategories $category */
            foreach ($categories as $category) {
                $categoryArray[$category->getId()] = $category->getName();
            }
        }

        return $categoryArray;
    }

}

