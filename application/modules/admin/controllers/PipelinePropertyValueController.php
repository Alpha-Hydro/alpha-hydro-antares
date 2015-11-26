<?php
include_once 'vlmeh/Filter/Slugify.php';

class Admin_PipelinePropertyValueController extends Zend_Controller_Action
{

    protected $_redirector = null;

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('add-new-property', 'json')
            ->addActionContext('delete', 'json')
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

        $form = new Admin_Form_PipelinePropertyValueAdd();

        if ($request->isPost()){
            $pipelinePropertyValues = new Pipeline_Model_PipelinePropertyValues();

            $pipelinePropertyValues->setPipelineId($request->getParam('pipelineId'));
            $pipelinePropertyValues->setPropertyId($request->getParam('propertyId'));

            if($request->getParam('valueText'))
                $pipelinePropertyValues->setValue($request->getParam('valueText'));

            if($request->getParam('valueTextArea'))
                $pipelinePropertyValues->setValue($request->getParam('valueTextArea'));

            if(!empty($_FILES)){
                $file = $form->valueLoadFile->getFileInfo();
                if($file['valueLoadFile']['name'] !== ''){
                    $form->valueLoadFile->receive();
                    $pipelinePropertyValues->setValue('/upload/pipeline/items/'.$file['imageLoadFile']['name']);
                }
            }

            $pipelinePropertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();
            $pipelinePropertyValuesMapper->save($pipelinePropertyValues);
        }

        $this->_helper->redirector('edit','pipeline','admin',array('id' => $request->getParam('pipelineId')));
        return;
    }

    public function addNewPropertyAction()
    {
        $request = $this->getRequest();
        $dataResponse = array();

        if($request->isPost()){
            $validator = new Zend_Validate_Db_NoRecordExists(
                array(
                    'table' => 'pipeline_property',
                    'field' => 'sistem_name'
                )
            );

            $systemName = $this->_getSistemNameProperty($request->getParam('newPropertyName'));

            if ($validator->isValid(strtolower($systemName))) {

                $newProperty = $this->_createNewProperty();

                if(!is_null($newProperty) && $request->getParam('pipelineId') != 0){
                    $newPropertyValue = $this->_createNewPropertyValue($newProperty->getId());
                    $dataResponse['newProperty'] = array(
                        'propertyValueId' => $newPropertyValue->getId(),
                        'propertyName' => $newProperty->getName(),
                        'propertyValue' => $newPropertyValue->getValue()
                    );
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

    /**
     * @return null|Pipeline_Model_PipelineProperty
     */
    protected function _createNewProperty()
    {
        $request = $this->getRequest();
        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $pipelineProperty = new Pipeline_Model_PipelineProperty();

        $systemName = $this->_getSistemNameProperty($request->getParam('newPropertyName'));

        $pipelineProperty->setOptions(array(
            'name' => $request->getParam('newPropertyName'),
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
     * @param $propertyId
     * @return null|Pipeline_Model_PipelinePropertyValues
     */
    protected function _createNewPropertyValue($propertyId)
    {
        $request = $this->getRequest();
        $pipelinePropertyValueMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();
        $pipelinePropertyValue = new Pipeline_Model_PipelinePropertyValues();

        $pipelinePropertyValue->setOptions(array(
            'pipelineId' => $request->getParam('pipelineId'),
            'propertyId' => $propertyId,
            'value' => $request->getParam('newPropertyValue')
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
     */
    protected function _getSistemNameProperty($propertyName)
    {
        $filterSlugify = new Vlmeh_Filter_Slugify();
        $filterSlugify->setSeparator('_');

        $result = $filterSlugify->filter($propertyName);

        return $result;
    }

}
