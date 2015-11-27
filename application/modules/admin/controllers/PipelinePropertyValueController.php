<?php
include_once 'vlmeh/Filter/Slugify.php';

class Admin_PipelinePropertyValueController extends Zend_Controller_Action
{

    protected $_redirector = null;

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('add', 'json')
            ->addActionContext('add-new-property', 'json')
            ->addActionContext('delete', 'json')
            ->addActionContext('save', 'json')
            ->initContext();

        $this->_redirector = $this->_helper->getHelper('Redirector');
    }

    public function indexAction()
    {
        // action body
    }

    public function addAction()
    {
        $request = $this->getRequest();
        $dataResponse = array();

        if($request->isPost()){
            $pipelineId = $request->getParam('pipelineId');
            $propertyId = $request->getParam('propertyId');
            $propertyValue = $request->getParam('propertyValue');

            $propertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
            $property = $propertyMapper->find($propertyId, new Pipeline_Model_PipelineProperty());

            $newPropertyValue = $this->_createPropertyValue($pipelineId, $propertyId, $propertyValue);
            if(!is_null($newPropertyValue) && !is_null($property)){
                $dataResponse['property'] = array(
                    'propertyValueId' => $newPropertyValue->getId(),
                    'propertyName' => $property->getName(),
                    'propertyValue' => $newPropertyValue->getValue()
                );
            }
            else{
                $alert = 'Ошибка! Обратитесь к администратору сайта.';
                $dataResponse['errorMessage'] = $alert;
            }
        }

        echo $this->_helper->json($dataResponse);
    }

    public function addNewPropertyAction()
    {
        $request = $this->getRequest();
        $dataResponse = array();

        if($request->isPost()){
            $pipelineId = $request->getParam('pipelineId');
            $propertyName = $request->getParam('newPropertyName');
            $propertyValue = $request->getParam('newPropertyValue');

            $validator = new Zend_Validate_Db_NoRecordExists(
                array(
                    'table' => 'pipeline_property',
                    'field' => 'sistem_name'
                )
            );

            $systemName = $this->_getSistemNameProperty($propertyName);

            if ($systemName != '' && $validator->isValid(strtolower($systemName))) {

                $newProperty = $this->_createNewProperty($propertyName);

                if(!is_null($newProperty) && $request->getParam('pipelineId') != 0){
                    $newPropertyValue = $this->_createPropertyValue($pipelineId, $newProperty->getId(), $propertyValue);
                    if(!is_null($newPropertyValue)){
                        $dataResponse['property'] = array(
                            'propertyValueId' => $newPropertyValue->getId(),
                            'propertyName' => $newProperty->getName(),
                            'propertyValue' => $newPropertyValue->getValue()
                        );
                    }

                }
            }
            else {
                $alert = '<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4>Cвойство '.$request->getParam('newPropertyName').' уже существует.</h4>Выберите из списка и добавьте значение или измените зачение существующего свойства.</div>';
                $dataResponse['errorMessage'] = $alert;
            }
        }

        echo $this->_helper->json($dataResponse);
    }

    public function deleteAction()
    {
        $request = $this->getRequest();
        $dataResponse = array();

        if($request->isPost()){
            $pipelinePropertyValueId = $request->getParam('valueId');

            $pipelinePropertyValueMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();

            $pipelinePropertyValueMapper->deleted($pipelinePropertyValueId);

            $dataResponse['rowDeleted'] = array(
                'rowId' => $pipelinePropertyValueId,
                'message' => 'Значение успешно удалено',
            );
        }

        echo $this->_helper->json($dataResponse);
    }

    public function saveAction()
    {
        $request = $this->getRequest();
        $dataResponse = array();

        if($request->isPost()){
            $valueId = $request->getParam('valueId');
            $value = $request->getParam('value');

            $pipelinePropertyValueMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();
            $pipelinePropertyValue = $pipelinePropertyValueMapper
                ->find($valueId, new Pipeline_Model_PipelinePropertyValues());

            if($pipelinePropertyValue && $value != ''){
                $pipelinePropertyValue->setValue($value);
                $pipelinePropertyValueMapper->save($pipelinePropertyValue);

                $dataResponse['rowSaved'] = array(
                    'valueId' => $pipelinePropertyValue->getId(),
                    'value' => $pipelinePropertyValue->getValue(),
                    'message' => 'Значение успешно сохранено',
                );
            }
            else{
                $alert = 'Ошибка! Обратитесь к администратору сайта.';
                $dataResponse['errorMessage'] = $alert;
            }
        }

        echo $this->_helper->json($dataResponse);
    }

    /**
     * @return null|Pipeline_Model_PipelineProperty
     *
     */
    protected function _createNewProperty($propertyName)
    {

        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $pipelineProperty = new Pipeline_Model_PipelineProperty();

        $systemName = $this->_getSistemNameProperty($propertyName);

        $pipelineProperty->setOptions(array(
            'name' => $propertyName,
            'sistemName' => strtolower($systemName),
            'active' => 1,
            'showList' => 1,
            'type' => 1,
            'sorting' => 0,
            'deleted' => 0
        ));

        $pipelinePropertyMapper->save($pipelineProperty);

        $newProperty = $pipelinePropertyMapper
            ->findBySistemName($pipelineProperty->getSistemName(), new Pipeline_Model_PipelineProperty());

        return $newProperty;
    }

    /**
     * @param $pipelineId
     * @param $propertyId
     * @param $value
     * @return null|Pipeline_Model_PipelinePropertyValues
     *
     */
    protected function _createPropertyValue($pipelineId, $propertyId, $value)
    {
        $pipelinePropertyValueMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();
        $pipelinePropertyValue = new Pipeline_Model_PipelinePropertyValues();

        $pipelinePropertyValue->setOptions(array(
            'pipelineId' => $pipelineId,
            'propertyId' => $propertyId,
            'value' => $value
        ));

        $pipelinePropertyValueMapper->save($pipelinePropertyValue);

        $newPropertyValue = $pipelinePropertyValueMapper
            ->findByKey(
                $pipelinePropertyValue->getPipelineId(),
                $pipelinePropertyValue->getPropertyId(),
                new Pipeline_Model_PipelinePropertyValues());

        return $newPropertyValue;
    }

    /**
     * @param $itemId
     * @return array
     *
     */
    protected function _getPropertyArray($itemId)
    {
        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $select = $pipelinePropertyMapper->getDbTable()->select();
        $select->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->order('sorting ASC');

        $pipelinePropertyArray = array();
        $pipelinePropertyArray[] = '...';
        $pipelineProperty = $pipelinePropertyMapper->fetchAll($select);


        $pipelinePropertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();
        $select = $pipelinePropertyValuesMapper->getDbTable()->select();
        $select->where('pipeline_id = ?', $itemId);
        $pipelinePropertyValuesArray = $pipelinePropertyValuesMapper->fetchAll($select);

        $itemIdArray = array();
        if(!empty($pipelinePropertyValuesArray)){
            foreach($pipelinePropertyValuesArray as $pipelinePropertyValue){
                $itemIdArray[] = $pipelinePropertyValue->getPropertyId();
            }
        }

        if(!empty($pipelineProperty)){
            foreach ($pipelineProperty as $property) {
                if(!in_array($property->getId(), $itemIdArray)){
                    $pipelinePropertyArray[$property->getId()] = $property->getName();
                }
            }
        }

        $pipelinePropertyArray['new'] = 'Новое';

        return $pipelinePropertyArray;
    }

    /**
     * @param $propertyName
     * @return string
     *
     */
    protected function _getSistemNameProperty($propertyName)
    {
        $filterSlugify = new Vlmeh_Filter_Slugify();
        $filterSlugify->setSeparator('_');

        $result = $filterSlugify->filter($propertyName);

        return $result;
    }
}


