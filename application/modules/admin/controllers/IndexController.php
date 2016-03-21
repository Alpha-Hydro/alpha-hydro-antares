<?php
include_once 'vlmeh/Filter/Slugify.php';

class IndexController extends Zend_Controller_Action
{

    public function init()
    {

        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('slugify', 'json');
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

        $filterSlugify = new Vlmeh_Filter_Slugify();
        $filterSlugify->setSeparator('_');

        $result = $filterSlugify->filter($slug);

        echo $this->_helper->json->sendJson($result);
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



