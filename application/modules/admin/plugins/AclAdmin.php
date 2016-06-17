<?php
class Plugin_AclAdmin extends Zend_Controller_Plugin_Abstract {

	private $_acl = null;
	private $_auth = null;

	/*
     * Инициализируем данные
     */
	public function __construct(Zend_Acl $acl, Zend_Auth $auth)
	{
		$this->_acl = $acl;
		$this->_auth = $auth;
	}

    public function preDispatch(Zend_Controller_Request_Abstract $request) {

        $module = $request->getModuleName();

		if ($module == 'admin'){

            // получаем имя controller
            $controller = $request->getControllerName();

            // получаем имя action
            $action = $request->getActionName();

            // получаем доступ к хранилищу данных Zend,
            // и достаём роль пользователя
            $identity = $this->_auth->getStorage()->read();

            // если в хранилище ничего нет, то значит мы имеем дело с гостем
            $role = !empty($identity->role) ? $identity->role : 'guest';

            // если пользователь не допущен до данного ресурса (controller),
            // то отсылаем его на страницу авторизации
            if (!$this->_acl->isAllowed($role, $controller))
                $request->setControllerName('auth')->setActionName('index');

        }

    }

}
