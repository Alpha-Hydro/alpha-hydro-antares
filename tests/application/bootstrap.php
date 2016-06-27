<?php
// Define path to application directory
defined('APPLICATION_PATH')
    || define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../../application'));

// Define application environment
defined('APPLICATION_ENV')
    || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'testing'));

/**
 * Path to root folder
 */
define('APPLICATION_ROOT', realpath(__DIR__.'/../../'));

// Ensure library/ is on include_path
/*set_include_path(implode(PATH_SEPARATOR, array(
    realpath(__DIR__ . '/../../frameworks/Zend12/library'),
    get_include_path(),
)));*/

require_once APPLICATION_ROOT . '/vendor/autoload.php';

// Zend_Application
require_once 'Zend/Application.php';
require_once 'ControllerTestCase.php';
