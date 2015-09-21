<?php

class Admin_AuthController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // проверяем, авторизирован ли пользователь
        if (Zend_Auth::getInstance()->hasIdentity()) {
            // если да, то делаем редирект, чтобы исключить многократную авторизацию
            $this->_helper->redirector('index', 'index');
        }

        // создаём форму и передаём её во view
        $form = new Utils_Form_Login();
        $this->view->form = $form;

        // создаём форму и передаём её во view
        $form = new Utils_Form_Auth();
        $this->view->form_auth = $form;

        // Если к нам идёт Post запрос
        if ($this->getRequest()->isPost()) {
            // Принимаем его
            $formData = $this->getRequest()->getPost();

            // Если форма заполнена верно
            if ($form->isValid($formData)) {

                // получаем введённые данные
                $username = $this->getRequest()->getPost('username');
                $password = $this->getRequest()->getPost('password');

                $authAdapter = new Utils_Model_Auth($username, $password);

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
                    // на controller = index, action = index
                    $this->_helper->redirector();
                } else {
                    $this->view->errMessage = 'Вы ввели неверное имя пользователя или неверный пароль';
                }
            }
        }
    }

    public function logoutAction()
    {
        // уничтожаем информацию об авторизации пользователя
        Zend_Auth::getInstance()->clearIdentity();

        // и отправляем его на главную
        $this->_helper->redirector('index', 'index');
    }


}

