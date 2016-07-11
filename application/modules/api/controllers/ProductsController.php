<?php

class Api_ProductsController extends Zend_Controller_Action
{
    /**
     * @var Catalog_Model_Mapper_Products
     *
     */
    protected $_modelMapper = null;

    /**
     * @var Catalog_Model_Products
     *
     */
    protected $_model = null;

    /**
     * @var Catalog_Model_Mapper_Categories
     *
     */
    protected $_modelCategoriesMapper = null;

    /**
     * @var Catalog_Model_Categories
     *
     */
    protected $_categoriesModel = null;

    /**
     * @var Catalog_Model_Mapper_ProductParams
     *
     */
    protected $_paramsMapper = null;

    /**
     * @var Catalog_Model_Mapper_Subproducts
     *
     */
    protected $_subproductsModelMapper = null;

    /**
     * @var Catalog_Model_Mapper_SubproductParams
     *
     */
    protected $_subproductsParamsMapper = null;

    /**
     * @var Catalog_Model_Mapper_SubproductParamsValues
     *
     */
    protected $_subproductParamsValuesMapper = null;


    public function init()
    {
        $this->_modelMapper = new Catalog_Model_Mapper_Products();
        $this->_model = new Catalog_Model_Products();

        $this->_modelCategoriesMapper = new Catalog_Model_Mapper_Categories();
        $this->_categoriesModel = new Catalog_Model_Categories();

        $this->_paramsMapper = new Catalog_Model_Mapper_ProductParams();

        $this->_subproductsModelMapper = new Catalog_Model_Mapper_Subproducts();
        $this->_subproductsParamsMapper = new Catalog_Model_Mapper_SubproductParams();
        $this->_subproductParamsValuesMapper = new Catalog_Model_Mapper_SubproductParamsValues();
    }

    public function indexAction()
    {
        // action body
    }

    public function modificationsAction()
    {
        $id = $this->_request->getParam('id');

        $select = $this->_subproductsModelMapper->getDbTable()->select()
            ->where('deleted != ?', 1)
            ->order('order ASC');

        $jsonData = array(
            'parentId' => $id,
            'columns' => array(),
            'rows' => array(),
        );

        $modifications = $this->_modelMapper->findSubproductsRel($id, $select, true);

        if(!empty($modifications)){

            $selectSubproductParams = $this->_subproductsParamsMapper
                ->getDbTable()->select()->order('order ASC');
            $subproductProperty = $this->_modelMapper->findSubproductParams($id, $selectSubproductParams, true);

            $jsonData['columns'] = $subproductProperty;

            $modificationsTableValues = array();
            foreach ($modifications as $modification) {
                $modificationPropertyValues = $this->_subproductsModelMapper
                    ->findSubProductParamValue($modification['id']);
                $values['item'] = $modification;
                $values['values'] = array();
                foreach ($modificationPropertyValues as $modificationPropertyValue) {
                    $values['values'][] = $modificationPropertyValue->getOptions();
                }
                $modificationsTableValues[] = $values;
            }

            $jsonData['rows'] = $modificationsTableValues;
            //Zend_Debug::dump($jsonData);
        }
        $this->_helper->json->sendJson($jsonData);
    }
}



