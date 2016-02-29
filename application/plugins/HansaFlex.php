<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 01.12.2015
 * Time: 12:11
 */
class Plugin_HansaFlex extends Zend_Controller_Plugin_Abstract
{

    public function preDispatch(Zend_Controller_Request_Abstract $request)
    {

        var_dump(count($request));
        /*$aHostName = array(
            'hansa-flex.loc',
//            'hansa-flex.su',
//            'hansa-flex.org',
//            'xn----7sbavhvfm6b0af.xn--p1ai',
        );

        $hostHttp = new Zend_Controller_Request_Http();
        $host = $hostHttp->getServer('HTTP_HOST');

        var_dump($host);*/

        /*if(in_array($host, $aHostName)){
            Zend_Debug::dump($host);
        }*/

    }
}