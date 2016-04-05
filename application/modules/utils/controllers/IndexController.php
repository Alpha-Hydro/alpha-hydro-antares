<?php

class Utils_IndexController extends Zend_Controller_Action
{

    public function init()
    {

    }

    public function indexAction()
    {
        

        $data = array(
            'paramId' => '8467',
            'subproductId' => '21863',
            'value' => '6'
        );
        $subproductParamsValuesMapper = new Catalog_Model_Mapper_SubproductParamsValues();
        $subproductParamsValue = $subproductParamsValuesMapper
            ->find('21863', '8467', new Catalog_Model_SubproductParamsValues());

        /*$subproductParamsValue = new Catalog_Model_SubproductParamsValues();
        $subproductParamsValue->setOptions($data);
        $subproductParamsValuesMapper->save($subproductParamsValue);*/
        
        
        Zend_Debug::dump($subproductParamsValue);
    }
}

