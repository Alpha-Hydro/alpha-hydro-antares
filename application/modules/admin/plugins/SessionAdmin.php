<?php
/**
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

class Plugin_SessionAdmin extends Zend_Controller_Plugin_Abstract
{
    public function preDispatch(Zend_Controller_Request_Abstract $request)
    {
        //check whether the client is authenticated
        if (Zend_Auth::getInstance()->hasIdentity()) {

            ini_set("session.gc_maxlifetime", 3600);
            ini_set("session.cookie_lifetime", 3600);

            return;
        }
    }
}