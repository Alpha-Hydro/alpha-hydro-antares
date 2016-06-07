<?php

class AuthController extends Zend_Controller_Action
{
    /**
     * @var Zend_Controller_Action_Helper_Redirector
     */
    protected $_redirector = null;

    protected $_curUrl = null;

    public function init()
    {
        $this->_redirector = $this->_helper->getHelper('Redirector');

        $hostHttp = new Zend_Controller_Request_Http();
        $this->_curUrl = $hostHttp->getRequestUri();
    }

    public function indexAction()
    {
        // проверяем, авторизирован ли пользователь
        if (Zend_Auth::getInstance()->hasIdentity()) {
            // если да, то делаем редирект, чтобы исключить многократную авторизацию
            $this->_redirector->gotoSimpleAndExit('index', 'index');
        }

        $this->_helper->layout->setLayout('layout_auth');
        // создаём форму и передаём её во view
        $form = new Admin_Form_Auth();
        $this->view->assign('form_auth', $form);


        // Если к нам идёт Post запрос
        if ($this->getRequest()->isPost()) {
            // Принимаем его
            $formData = $this->getRequest()->getPost();

            // Если форма заполнена верно
            if ($form->isValid($formData)) {

                // получаем введённые данные
                $username = $this->getRequest()->getPost('username');
                $password = $this->getRequest()->getPost('password');

                $authAdapter = new Admin_Model_Auth($username, $password);

                // получаем экземпляр Zend_Auth
                $auth = Zend_Auth::getInstance();

                // делаем попытку авторизировать пользователя
                $result = $auth->authenticate($authAdapter);

                // если авторизация прошла успешно
                if ($result->isValid()) {
                    // используем адаптер для извлечения оставшихся данных о пользователе
                    //$identity = $authAdapter->getResultRowObject();
                    $identity = $result->getIdentity();

                    // получаем доступ к хранилищу данных Zend
                    $authStorage = $auth->getStorage();

                    // помещаем туда информацию о пользователе,
                    // чтобы иметь к ним доступ при конфигурировании Acl
                    $authStorage->write($identity);

                    // Используем библиотечный helper для редиректа
                    // на текущий url
                    $this->_redirector->gotoUrlAndExit($this->_curUrl);
                    return;

                } else {
                    $this->view->assign('errMessage', 'Вы ввели неверное имя пользователя или неверный пароль');
                }
            }
        }
    }

    public function logoutAction()
    {
        $url = explode('.', $this->_request->getServer('HTTP_HOST'), 2);


        // уничтожаем информацию об авторизации пользователя
        Zend_Auth::getInstance()->clearIdentity();

        // и отправляем его на главную
        $this->_redirector->gotoUrl('http://'.$url[1]);
    }


}

