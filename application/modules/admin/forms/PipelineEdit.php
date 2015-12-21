<?php

class Admin_Form_PipelineEdit extends Twitter_Bootstrap_Form_Vertical
{

    public function init()
    {
        $this->addElement('hidden', 'id');

        $image = new Zend_Form_Element_File('imageLoadFile');
        $image->setDestination(APPLICATION_ROOT.'/upload/pipeline/items/')
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png')
            ->setAttribs(
                array(
                    'class' => 'hidden',
                )
            );
        $this->addElement($image);

        $this->addElement('image', 'imageLoad', array(
            'label'         => 'Изображение',
            'class'         => 'img-thumbnail',
            'data-toggle'   => 'tooltip',
            'data-placement'=> 'bottom',
            'title'         => 'Загрузить изображение',
        ));

        $this->addElement('hidden', 'image');

        $imageDraft = new Zend_Form_Element_File('imageDraftLoadFile');
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
            'label'         => 'Чертеж',
            'class'         => 'img-thumbnail',
            'data-toggle'   => 'tooltip',
            'data-placement'=> 'bottom',
            'title'         => 'Загрузить чертеж',
        ));

        $this->addElement('hidden', 'imageDraft');

        $imageTable = new Zend_Form_Element_File('imageTableLoadFile');
        $imageTable->setDestination(APPLICATION_ROOT.'/upload/pipeline/items/')
            ->addValidator('Size', false, 1024000)
            ->addValidator('Extension', false, 'jpg,png,pdf')
            ->setAttribs(
                array(
                    'class' => 'hidden',
                )
            )
            ->setLabel('Таблица');
        $this->addElement($imageTable);

        $this->addElement('text', 'imageTable', array(
            'label'         => 'Таблица',
            'placeholder'   => 'Таблица размеров',
            //'prepend_btn'       => '<a class="btn btn-default"><span class="glyphicon glyphicon-eye-open"></span></a>',
            'class'         => '',
        ));

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
            'multiOptions' => $this->getCategoryArray(),
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
                'title',
                'categoryId',
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
                'imageTable',
                'imageTableLoadFile',
            ),
            'imageTableGroup',
            array()
        );

        $this->addDisplayGroup(
            array(
                'imageDraftLoad',
                'imageDraftLoadFile',
                'imageDraft',
            ),
            'imageDraftGroup',
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

