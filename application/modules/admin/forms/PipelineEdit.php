<?php

class Admin_Form_PipelineEdit extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $image = new Zend_Form_Element_File('imageLoadFile');
        $image
            ->setValueDisabled(true)
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png')
            ->setAttribs(
                array(
                    'class' => 'hidden',
                    'data-input' => 'image',
                    'data-upload' => '/upload/pipeline/items'
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

        $this->addDisplayGroup(
            array(
                'imageLoad',
                'imageLoadFile',
                'image',
            ),
            'imageGroup',
            array()
        );

        /*$imageDraft = new Zend_Form_Element_File('imageDraftLoadFile');
        $imageDraft->setDestination(APPLICATION_ROOT.'/upload/pipeline/items/')
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png')
            ->setAttribs(
                array(
                    'class' => 'hidden',
                )
            );
        $this->addElement($imageDraft);

        $this->addElement('image', 'imageDraftLoad', array(
            'label'         => null,//'Чертеж',
            'class'         => 'img-thumbnail',
            'data-toggle'   => 'tooltip',
            'data-placement'=> 'bottom',
            'title'         => 'Загрузить чертеж',
        ));

        $this->addElement('hidden', 'imageDraft');

        $this->addDisplayGroup(
            array(
                'imageDraftLoad',
                'imageDraftLoadFile',
                'imageDraft',
            ),
            'imageDraftGroup',
            array()
        );*/


        $imageTable = new Zend_Form_Element_File('imageTableLoadFile');
        $imageTable
            ->setValueDisabled(true)
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,pdf')
            ->setAttribs(
                array(
                    'class' => 'hidden',
                    'data-input' => 'imageTable',
                    'data-upload' => '/upload/pipeline/items'
                )
            );
        $this->addElement($imageTable);

        $this->addElement('text', 'imageTable', array(
            'label'         => 'Таблица',
            'placeholder'   => 'Таблица размеров',
            'class'         => '',
        ));

        $this->addDisplayGroup(
            array(
                'imageTable',
                'imageTableLoadFile',
            ),
            'imageTableGroup',
            array()
        );


        $this->addElement('hidden', 'id');
        $this->addElement('hidden', 'fullPath');

        $this->addElement('text', 'title', array(
            'label'         => 'Наименование товара',
            'placeholder'   => 'Наименование товара',
            'required'      => true,
            'class'         => 'slugify',
            'data-slugify'  => 'path',
        ));

        $this->addElement('select', 'categoryId', array(
            'label'     => 'Категория',
            'required'  => true,
            'data-controller'  => 'pipeline-categories',
            'multiOptions' => $this->getCategoryArray(),
        ));


        $this->addElement('text', 'path', array(
            'label'         => 'Url страницы',
            'placeholder'   => 'Url страницы',
            'required'      => true,
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
                'class' => 'tab-pane',
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
        $pipelineCategoryMapper = new Pipeline_Model_Mapper_PipelineCategories();
        $select = $pipelineCategoryMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->order('sorting ASC');

        $categoryArray = array();
        $categoryArray[] = 'нет';

        $pipelineCategories = $pipelineCategoryMapper->fetchAll();

        if(!empty($pipelineCategories)){
            foreach ($pipelineCategories as $category) {
                $categoryArray[$category->getId()] = $category->getTitle();
            }
        }

        return $categoryArray;
    }

}

