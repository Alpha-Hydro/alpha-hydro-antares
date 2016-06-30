<?php
/**
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
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