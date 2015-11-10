<?php

class Zend_View_Helper_getTypeInput extends Zend_View_Helper_Abstract
{
    function getTypeInput($typeInput){

        $form = new Admin_Form_PipelinePropertyValueAdd();

        switch ($typeInput) {
            case 0:
                return $form->getElement('valueText')->setAttrib('required', 'required');
                break;
            case 1:
                return $form->getElement('valueTextArea')->setAttrib('required', 'required');
                break;
            case 2:
            case 3:
                return $form->getElement('valueLoadFile')->setAttrib('required', 'required');
                break;
            default;
                return $form->getElement('value');
        }
    }
}