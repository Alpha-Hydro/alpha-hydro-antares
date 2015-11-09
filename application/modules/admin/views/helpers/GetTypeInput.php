<?php

class Zend_View_Helper_getTypeInput extends Zend_View_Helper_Abstract
{
    function getTypeInput($type, $name, $value = null, $attribs = null, $options = null){

        switch ($type) {
            case  0:
                $input = $this->view->formText($name, $value, $attribs);
                break;
            case  1:
                $input = $this->view->formTextarea($name, $value, $attribs);
                break;
            case  2:
                $input = $this->view->formFile($name, null);
                break;
            case  3:
                $input = $this->view->formFile($name, null);
                break;
            case  4:
                $input = $this->view->formCheckbox($name, $value, $attribs, $options);
                break;
            case  5:
                $input = $this->view->formRadio($name, $value, $attribs, $options);
                break;
            default;
                $input = $this->view->formText($name, $value, $attribs);
        }

        return $input;

    }
}