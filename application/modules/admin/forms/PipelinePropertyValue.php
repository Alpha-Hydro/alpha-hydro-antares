<?php

class Admin_Form_PipelinePropertyValue extends Twitter_Bootstrap_Form_Horizontal
{

    public function init()
    {
        $key = 0;
        $subform= new Admin_Form_PipelinePropertyValueAdd();

        $subform->isArray(true);
        //$subform->clearDecorators();
        $subform->setElementsBelongTo("propertyValue");
        /*$subform->addElement( 'text', 'product_id', array(
            'label'         => 'Номер продукта',
            'isArray'       => true,
            'id'            => "order_item-".$key."-product_id"
        ));*/
        $this->addSubForm($subform, "subform".$key);
    }

}

