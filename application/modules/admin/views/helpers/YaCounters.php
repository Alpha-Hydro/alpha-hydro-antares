<?php
/**
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 16.09.2015
 * Time: 11:32
 */
class Zend_View_Helper_YaCounters extends Zend_View_Helper_Abstract
{
    protected $_aHostName = array(
        'alfa-hydro.loc' => 38923225,
        'alfa-hydro.com' => 38923225,
        'www.alfa-hydro.com' => 38923225,
        'alpha-hydro.loc' => 30986941,
        'alpha-hydro.com' => 30986941,
    );

    /**
     * @return string
     */
    function yaCounters(){

        $hostName = Zend_Controller_Front::getInstance()->getRequest()->getServer('HTTP_HOST');

        return $this->_aHostName[$hostName];
    }
}