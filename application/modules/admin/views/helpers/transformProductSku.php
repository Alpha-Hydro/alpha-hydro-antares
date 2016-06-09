<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 16.09.2015
 * Time: 11:32
 */
class Zend_View_Helper_transformProductSku extends Zend_Controller_Plugin_Abstract
{
    protected $_aHostName = array(
        'alfa-hydro.loc',
        'alfa-hydro.com',
    );

    /**
     * @param $sku
     * @return string
     */
    function transformProductSku($sku){

        $hostName = Zend_Controller_Front::getInstance()->getRequest()->getServer('HTTP_HOST');

        if(in_array($hostName, $this->_aHostName) && $sku[0] === 'A'){
            $sku = substr($sku, 1);
        }

        return $sku;
    }
}