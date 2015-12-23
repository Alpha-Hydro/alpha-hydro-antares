<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 23.12.2015
 * Time: 15:00
 */
class Zend_View_Helper_ContextualClassTr extends Zend_View_Helper_Abstract
{
    function contextualClassTr($item){
        $class = '';
        if($item->getActive() != 1)
            $class .= ' warning text-muted';

        if($item->getDeleted() != 0)
            $class .= ' danger deleted';

        return $class;
    }
}