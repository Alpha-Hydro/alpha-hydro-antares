<?php

class Admin_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('slugify', 'json');
    }

    public function indexAction()
    {
        // action body
    }

    public function slugifyAction()
    {
        $slug = $this->getRequest()->getParam('slugify');

        $filterSlugify = new Vlmeh_Filter_Slugify();
        $filterSlugify->setSeparator('_');

        $result = $filterSlugify->filter($slug);

        /*if(!$this->_validateColumn($result, 'products', 'path')){
            $filterSlugify->setSeparator('-');
            $result = $filterSlugify->filter($slug);
        }*/

        echo $this->_helper->json($result);
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



