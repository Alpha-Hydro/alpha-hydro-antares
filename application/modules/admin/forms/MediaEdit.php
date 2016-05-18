<?php

class Admin_Form_MediaEdit extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $this->addElement('hidden', 'id');
        $this->addElement('hidden', 'path');

        $this->addElement('select', 'categoryId', array(
            'label'     => 'Категория',
            'required'  => true,
            'multiOptions' => $this->getCategoryArray(),
        ));

        $this->addElement('text', 'name', array(
            'label'         => 'Заголовок',
            'placeholder'   => 'Заголовок статьи',
            'required'      => true,
            'class'         => 'slugify',
            'data-slugify'  => 'path',
        ));

        $this->addElement('text', 'author', array(
            'label'         => 'Автор',
            'placeholder'   => 'Автор статьи',
            'required'      => true,
        ));

        $this->addDisplayGroup(
            array(
                'categoryId',
                'name',
                'author',
                'path',
                'id',
            ),
            'basic',
            array()
        );

        $image = new Zend_Form_Element_File('imageLoadFile');
        $image->setDestination(APPLICATION_ROOT.'/upload/media/items/')
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

        $this->addElement('textarea', 'sContent', array(
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
                'sContent',
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

        $this->addElement('select', 'sectionSiteId', array(
            'label'     => 'Привязать к разделу сайта',
            'multiOptions' => $this->getSectionSiteArray(),
        ));

        $this->addDisplayGroup(
            array(
                'sorting',
                'active',
                'deleted',
                'sectionSiteId'
            ),
            'additionally',
            array(
                'class' => 'tab-pane',
                'role'  => 'tabpanel'
            )
        );
    }

    /**
     * @return array
     */
    public function getSectionSiteArray()

    {
        $pagesMapper = new Pages_Model_Mapper_Pages();
        $select = $pagesMapper->getDbTable()->select();
        
        $select
            ->where('active != ?', 0)
            ->where('deleted != ?', 1)
            ->order('sorting ASC');
        
        $sectionSiteArray = array();
        $sectionSiteArray[] = 'нет';
        /**
         * @var $page Pages_Model_Pages;
         */
        foreach ($pagesMapper->fetchAll($select) as $page) {
            $sectionSiteArray[$page->getId()] = $page->getTitle();
        }
        
        return $sectionSiteArray;
    }

    /**
     * @return array
     */
    public function getCategoryArray()
    {
        $mediaCategoryMapper = new Media_Model_Mapper_MediaCategories();

        $categoryArray = array();
        $categoryArray[] = 'нет';
        /**
         * @var $category Media_Model_MediaCategories;
         */
        foreach ($mediaCategoryMapper->fetchAll() as $category) {
            $categoryArray[$category->getId()] = $category->getName();
        }

        return $categoryArray;

    }
}

