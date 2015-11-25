<?php

class Admin_PipelinePropertyValueController extends Zend_Controller_Action
{

    protected $_redirector = null;

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('add-new-property', 'json')
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
                    echo $this->_helper->json($this->_createDataHtml($newProperty, $newPropertyValue));
                }
            }
            else {
                // username is invalid; print the reason
                $messages = $validator->getMessages();
                foreach ($messages as $message) {
                    $message = '<tr><td colspan="3"><div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'.$message.'</div></td></tr>';
                }
                $alert = '<tr><td colspan="3"><div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4>Cвойство '.$request->getParam('newPropertyName').' уже существует.</h4>Выберите из списка и добавьте значение или измените зачение существующего свойства.</div></td></tr>';
                echo $this->_helper->json($alert);
            }
        }
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
            'sistemName' => strtolower($this->_getSistemNameProperty($request->getParam('newPropertySystemName'))),
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
     * @param Pipeline_Model_PipelineProperty $newProperty
     * @param Pipeline_Model_PipelinePropertyValues $newPropertyValue
     * @return string
     */
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







