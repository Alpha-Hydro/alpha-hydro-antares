<?php

ini_set("display_errors", 1);
error_reporting(1);
error_reporting(E_ALL);

defined('APPLICATION_PATH') 
	|| define('APPLICATION_PATH',__DIR__ . '/../appadmin');
defined('APPLICATION_ENV') 
	|| define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'production'));

/**
 * Path to font folder
 */
defined('FONT_DIR')
	|| define('FONT_DIR', __DIR__ . '/../files/pdf/fonts');

/**
 * Path to root folder
 */
define('APPLICATION_ROOT', realpath(__DIR__.'/../'));

set_include_path(implode(PATH_SEPARATOR, array(
	// (dirname(__FILE__).'/Zend/library/'),
	realpath(APPLICATION_PATH .'/../../frameworks/Zend12/library/'),
	get_include_path(),
)));

require_once 'Zend/Application.php';

$application = new Zend_Application(APPLICATION_ENV, array(
	'config' => array(
		APPLICATION_PATH . '/config/application.xml',
		APPLICATION_PATH . '/config/db.xml'
	),
));

$application -> bootstrap() -> run();