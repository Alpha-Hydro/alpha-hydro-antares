<?php

class Utils_TestController extends Zend_Controller_Action
{

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('add', 'json')
            ->addActionContext('new', 'json')
            ->addActionContext('edit', 'json')
            ->addActionContext('delete', 'json')
            ->initContext();
    }

    public function indexAction()
    {
        $itemId = 1;
        $this->view->pipelineId = $itemId;

        $pipelineMapper = new Pipeline_Model_Mapper_Pipeline();

        $pipelineProperties = $pipelineMapper->fetchPropertyRel($itemId);

        if(!empty($pipelineProperties)){
            $propertyValuesMapper = new Pipeline_Model_Mapper_PipelinePropertyValues();

            $viewProperties = array();
            foreach ($pipelineProperties as $property) {
                $propertyValues = $propertyValuesMapper->findByKey($itemId, $property->getId(), new Pipeline_Model_PipelinePropertyValues());
                $viewProperties[$property->getName()] = $propertyValues;
            }
            $this->view->properties = $viewProperties;
        }

        $propertyArray = $this->_getPropertyArray($itemId);

        if(0 != count($propertyArray)){
            $formValue = new Admin_Form_PipelinePropertyValue();
            $formValue->setDefaults(array(
                'pipelineId' => $itemId,
                'propertyId' => 0,
                'sorting' => 0,
            ));

            $formValue->getElement('propertyId')->setMultiOptions($propertyArray);
            $this->view->formValue = $formValue;
        }
    }

    public function addAction()
    {
        //var_dump($this->getAllParams());
        $request = $this->getRequest();
        echo $this->_helper->json($request->getParams());

        /*if($request->isPost()){
            $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
            $pipelineProperty = new Pipeline_Model_PipelineProperty();

            $pipelineProperty->setName($request->getParam('newPropertyName'));

            $validator = new Zend_Validate_Db_NoRecordExists(
                array(
                    'table' => 'pipeline_property',
                    'field' => 'sistem_name'
                )
            );

            if ($validator->isValid(strtolower($request->getParam('newPropertySystemName')))) {
                $pipelineProperty->setSistemName(strtolower($request->getParam('newPropertySystemName')));
                $pipelineProperty->setActive(1);
                $pipelineProperty->setShowList(1);
                $pipelineProperty->setType(0);
                $pipelineProperty->setSorting(0);
                $pipelineProperty->setDeleted(0);

                $pipelinePropertyMapper->save($pipelineProperty);

                $newProperty = $pipelinePropertyMapper->findBySistemName($pipelineProperty->getSistemName(), new Pipeline_Model_PipelineProperty());

                echo $this->_helper->json($newProperty->getId());
            }
            else {
                // username is invalid; print the reason
                $messages = $validator->getMessages();
                foreach ($messages as $message) {
                    echo $this->_helper->json($message);
                }
            }
        }*/


    }

    public function newAction()
    {
        $request = $this->getRequest();

        if($request->isPost()){
            $validator = new Zend_Validate_Db_NoRecordExists(
                array(
                    'table' => 'pipeline_property',
                    'field' => 'sistem_name'
                )
            );

            if ($validator->isValid(strtolower($request->getParam('newPropertySystemName')))) {

                $newProperty = $this->_createNewProperty();

                if(!is_null($newProperty) && $request->getParam('pipelineId') != 0){
                    $newPropertyValue = $this->_createNewPropertyValue($newProperty->getId());
                    echo $this->_helper->json($this->_createDataHtml($newProperty, $newPropertyValue));
                }
            }
            else {
                // username is invalid; print the reason
                $messages = $validator->getMessages();
                foreach ($messages as $message) {
                    $message = '<tr><td colspan="3"><div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'.$message.'</div></td></tr>';
                    echo $this->_helper->json($message);
                }
            }
        }
    }

    public function editAction()
    {
        var_dump($this->getAllParams());
    }

    public function deleteAction()
    {
        var_dump($this->getAllParams());
    }

    /**
     * @return null|Pipeline_Model_PipelineProperty
     */
    protected function _createNewProperty()
    {
        $request = $this->getRequest();
        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $pipelineProperty = new Pipeline_Model_PipelineProperty();

        $pipelineProperty->setOptions(array(
            'name' => $request->getParam('newPropertyName'),
            'sistemName' => strtolower($request->getParam('newPropertySystemName')),
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

    protected function _createDataHtml(Pipeline_Model_PipelineProperty $newProperty, Pipeline_Model_PipelinePropertyValues $newPropertyValue)
    {
        $dataHtml = '';
        $dataHtml .= '<tr id="'.$newPropertyValue->getId().'">';
        $dataHtml .= '<td>'.$newProperty->getName().'</td>';
        $dataHtml .= '<td><input value="'.$newPropertyValue->getValue().'" class="input-hidden" readonly="readonly" type="text"></td>';
        $dataHtml .= <<<EOT
<td>
    <div class="btn-group btn-group-sm mr1">
        <button class="btn btn-default" data-event="edit">
            <span class="glyphicon glyphicon-pencil"></span>
        </button>
        <button class="btn btn-default" data-event="delete">
            <span class="glyphicon glyphicon-trash"></span>
        </button>
    </div>
    <button type="button" class="btn btn-sm btn-success hidden" data-event="save">Сохранить</button>
</td>
EOT;
        $dataHtml .= '</tr>';

        return $dataHtml;
    }

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

    public function testAction()
    {
        $sistemName = 'test4';
        $pipelinePropertyMapper = new Pipeline_Model_Mapper_PipelineProperty();
        $property = $pipelinePropertyMapper->findBySistemName($sistemName, new Pipeline_Model_PipelineProperty());

        var_dump($property->getId());
    }
}











