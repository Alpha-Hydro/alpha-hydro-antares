<?php

require_once 'Zend/Application.php';
require_once 'Zend/Test/PHPUnit/ControllerTestCase.php';

abstract class ControllerTestCase extends Zend_Test_PHPUnit_ControllerTestCase
{
    /**
     * @var Zend_Application
     */
    protected $_application;

    public function setUp()
    {
        // указываем функцию, которая будет выполнена до запуска тестов
        $this->bootstrap = array($this, 'appBootstrap');
        parent::setUp();
    }

    public function appBootstrap()
    {
        // инициализируем наше приложение
        $this->_application = new Zend_Application(
            APPLICATION_ENV,
            APPLICATION_PATH . '/configs/application.ini'
        );

        $this->_application->bootstrap();

        /**
         * Fix for ZF-8193
         * http://framework.zend.com/issues/browse/ZF-8193
         * Zend_Controller_Action->getInvokeArg('bootstrap') doesn't work
         * under the unit testing environment.
         */
        $front = Zend_Controller_Front::getInstance();
        if($front->getParam('bootstrap') === null) {
            $front->setParam('bootstrap', $this->_application->getBootstrap());
        }
    }

    /**
     * Change environment for user role/status
     *
     * @param string $realm
     * @param string $login
     * @param string $password
     * @return void
     */
    protected function _doLogin($realm, $login, $password)
    {
        $authAdapter = new Zend_Auth_Adapter_Digest(APPLICATION_PATH . '/configs/auth', $realm, $login, $password);

        $result = $authAdapter->authenticate();

        if ($result->isValid()) {
            // success: store database row to auth's storage system
            Zend_Auth::getInstance()->getStorage()->write($authAdapter->getRealm());
        }
    }

    /**
     * URL Helper
     *
     * @param array $urlOptions
     * @param string $name
     * @param bool $reset
     * @param bool $encode
     * @param bool $default
     * @return string
     * @throws Exception
     */
    public function url($urlOptions = array(), $name = null, $reset = false, $encode = true, $default = false)
    {
        $frontController = $this->getFrontController();
        $router = $frontController->getRouter();
        if (!$router instanceof Zend_Controller_Router_Rewrite) {
            throw new Exception('This url helper utility function only works when the router is of type Zend_Controller_Router_Rewrite');
        }
        if ($default) {
            $router->addDefaultRoutes();
        }
        return $router->assemble($urlOptions, $name, $reset, $encode);
    }
}