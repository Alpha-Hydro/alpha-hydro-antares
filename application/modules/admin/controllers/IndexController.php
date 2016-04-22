<?php
include_once 'vlmeh/Filter/Slugify.php';

class IndexController extends Zend_Controller_Action
{

    /**
     * @var Vlmeh_Filter_Slugify;
     *
     */
    protected $_filterSlugify = null;

    public function init()
    {
        $this->_filterSlugify = new Vlmeh_Filter_Slugify();

        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('slugify', 'json')
            ->addActionContext('slugify-product-sku', 'json');
    }

    public function indexAction()
    {
        $this->_helper->layout->setLayout('layout_admin');
        $this->forward('index', 'index', 'pages');
        return;
    }

    public function slugifyAction()
    {
        $slug = $this->getRequest()->getParam('slugify');

        $result = $this->_filterSlugify
            ->setSeparator('_')
            ->filter($slug);

        return $this->_helper->json->sendJson($result);
    }

    public function slugifyProductSkuAction()
    {
        $slug = $this->getRequest()->getParam('slugify');

        if(!$this->_validateColumn($slug, 'products', 'sku'))
            return $this->_helper->json->sendJson(
                array(
                    'path' => null,
                    'error' => 'Товар с кодом "'.$slug.'" уже существует!')
            );
        
        $result = $this->_filterSlugify
            ->setSeparator('')
            ->filter($slug);
        return $this->_helper->json->sendJson(array('path' => strtoupper($result), 'error' => null));

    }

    /**
     * @param $value string
     * @param $table
     * @param $field string
     * @return bool
     *
     *
     */
    private function _validateColumn($value, $table, $field)
    {
        $validator = new Zend_Validate_Db_NoRecordExists(
            array(
                'table' => $table,
                'field' => $field,
            )
        );

        return $validator->isValid($value);
    }
}



