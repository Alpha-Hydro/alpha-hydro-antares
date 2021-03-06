<?php

// Define path to application directory
defined('APPLICATION_PATH')
    || define('APPLICATION_PATH', realpath(__DIR__ . '/../application'));

// Define application environment
defined('APPLICATION_ENV')
    || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'production'));

/**
 * Path to root folder
 */
defined('APPLICATION_ROOT')
    || define('APPLICATION_ROOT', realpath(__DIR__.'/../'));

/**
 * Path to font folder
 */
defined('FONT_DIR')
|| define('FONT_DIR', __DIR__ . '/../files/pdf/fonts');


// Ensure library/ is on include_path
/*set_include_path(implode(PATH_SEPARATOR, array(
    realpath(__DIR__ . '/../../frameworks/Zend12/library'),
    get_include_path(),
)));*/
set_include_path(implode(PATH_SEPARATOR, array(
    realpath(__DIR__ . '/../library'),
    get_include_path(),
)));

require_once APPLICATION_ROOT . '/vendor/autoload.php';

/** Zend_Application */
require_once 'Zend/Application.php';

// Create application, bootstrap, and run
$application = new Zend_Application(
    APPLICATION_ENV,
    array(
        'config' => array(
            APPLICATION_PATH . '/configs/application.ini',
            APPLICATION_PATH . '/configs/db.xml'
        ),
    )
);
$application->bootstrap()->run();