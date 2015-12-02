<?php

class Zend_View_Helper_getTypeText extends Zend_View_Helper_Abstract
{
    function getTypeText($type){

        switch ($type) {
            case  0:
                $typeText = 'string';
                break;
            case  1:
                $typeText = 'text';
                break;
            case  2:
                $typeText = 'image';
                break;
            case  3:
                $typeText = 'file';
                break;
            case  4:
                $typeText = 'checkbox';
                break;
            case  5:
                $typeText = 'radio';
                break;
            default;
                $typeText = 'text';
        }

        return $typeText;

    }
}