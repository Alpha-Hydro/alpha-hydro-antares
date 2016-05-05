<?php

class Admin_Form_OilEdit extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $this->addElement('hidden', 'id');
        $this->addElement('hidden', 'fullPath');

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

        $this->addElement('select', 'categoryId', array(
            'label'     => 'Категория',
            'required'  => true,
            'data-controller'  => 'oil-categories',
            'multiOptions' => $this->getCategoryArray(),
        ));

        $this->addDisplayGroup(
            array(
                'title',
                'categoryId',
                'path',
                'fullPath',
                'id',
            ),
            'basic',
            array()
        );

        $uploadDir = UPLOAD_DIR .'/oil/items';
        if(!file_exists($uploadDir))
            mkdir($uploadDir, 0755, true);

        $image = new Zend_Form_Element_File('imageLoadFile');
        $image->setDestination($uploadDir)
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png')
            ->setAttribs(
                array(
                    'class' => 'hidden',
                )
            );
        $this->addElement($image);

        $this->addElement('image', 'imageLoad', array(
            'label'         => null,//'Изображение',
            'class'         => 'img-thumbnail',
            'data-toggle'   => 'tooltip',
            'data-placement'=> 'bottom',
            'title'         => 'Загрузить изображение',
        ));

        $this->addElement('hidden', 'image');

        $this->addDisplayGroup(
            array(
                'imageLoad',
                'imageLoadFile',
                'image',
            ),
            'imageGroup',
            array()
        );

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
                'class' => 'tab-pane',
                'role'  => 'tabpanel'
            )
        );

        $this->addElement('button', 'submit', array(
            'label'         => 'Сохранить',
            'type'          => 'submit',
            'buttonType'    => 'success',
            'ignore' => true,
        ));

        /*$classForm = $this->getAttrib('class');
        $this->addAttribs(array(
            'class' => 'tab-content '.$classForm,
        ));*/
    }

    public function getCategoryArray()
    {
        $categoryMapper = new Oil_Model_Mapper_OilCategories();
        $select = $categoryMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $categoryArray = array();
        $categoryArray[] = 'нет';

        $categories = $categoryMapper->fetchAll();

        if(!empty($categories)){
            foreach ($categories as $category) {
                $categoryArray[$category->getId()] = $category->getTitle();
            }
        }

        return $categoryArray;
    }

}

