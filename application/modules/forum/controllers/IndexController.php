<?php

class Forum_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        $ajaxContext = $this->_helper->getHelper('AjaxContext');
        $ajaxContext
            ->addActionContext('ask', 'html')
            ->initContext('html');
    }

    public function indexAction()
    {
        $this->view->title = 'Форум';

        $request = $this->getRequest();

        $form_ask = new Forum_Form_ForumAsk();
        $this->view->form_ask = $form_ask;

        $forumMapper = new Forum_Model_Mapper_Forum();
        $select = $forumMapper->getDbTable()->select();
        $select->where('parent_id is null')
            ->order('timestamp DESC');

        $category = array(
            'question' => 'Вопросы и запросы',
            'review' => 'Отзывы и предложения',
            'gravamen' => 'Книга жалоб',
        );

        if($request->getParam('category')){
            $select->where('category = ?', $category[$request->getParam('category')]);
            $this->view->category = $request->getParam('category');
            $this->view->title = $category[$request->getParam('category')];
        }


        $forumItems = $forumMapper->fetchAll($select);

        if(!empty($forumItems)){
            $forums = array();
            foreach ($forumItems as $forumItem) {
                $topic = array();

                $select->reset()
                    ->where('parent_id = ?', $forumItem->getId())
                    ->order('timestamp ASC');

                $reply = $forumMapper->fetchAll($select);

                if(0 !== count($reply)){
                    $topic['question'] = $forumItem;
                    $topic['reply'] = $reply;
                }

                if(!empty($topic))
                    $forums[] = $topic;
            }

            $forumPages = array_chunk($forums, 10);

            $currentPage = 0;

            if($request->getParam('page') && $request->getParam('page')>0)
                $currentPage = $request->getParam('page')-1;

            if($request->getParam('page') && $request->getParam('page')>count($forumPages))
                $currentPage = count($forumPages)-1;

            $this->view->countPage = count($forumPages);
            $this->view->currentPage = $currentPage+1;
            $this->view->forumItems = $forumPages[$currentPage];

        }
    }

    public function askAction()
    {
        $request = $this->getRequest();

        $form_ask = new Forum_Form_ForumAsk();
        if($request->isPost()){
            $message = '';
            $error = true;
            if($form_ask->isValid($request->getPost())) {

                $newPost = new Forum_Model_Forum($form_ask->getValues());
                $forumMapper = new Forum_Model_Mapper_Forum();
                $forumMapper->save($newPost);

                //Письмо администратору
                $mailToAdmin = new Zend_Mail("UTF-8");
                $mailToAdmin->setFrom($newPost->getEmail(), $newPost->getAuthor());
                $mailToAdmin->setSubject('Новое сообщение с форума');

                $textHtml = '<h1>'.$newPost->getCategory().'</h1>';
                $textHtml .= '<p>Сообщение: '.$newPost->getContent().'</p>';
                $textHtml .= '<p>Автор: '.$newPost->getAuthor().' ('.$newPost->getEmail().')</p>';

                $mailToAdmin->setBodyHtml($textHtml);
                $mailToAdmin->addTo("admin@alpha-hydro.com", "ALPHA-HYDRO admin");
                $mailToAdmin->send();

                //Письмо пользователю
                $mailToUser = new Zend_Mail("UTF-8");
                $mailToUser->setFrom("admin@alpha-hydro.com", "ALPHA-HYDRO admin");
                $mailToUser->setSubject('Cообщение на форуме ALPHA-HYDRO');

                $textHtml = '<h3>Вы разместили сообщение на форуме сайта <a href="http://alpha-hydro.com/forum">ALPHA-HYDRO</a></h3>';
                $textHtml .= '<p>Категория: '.$newPost->getCategory().'</p>';
                $textHtml .= '<p>Сообщение: '.$newPost->getContent().'</p>';
                $textHtml .= '<p>Ваше сообщение обязательно будет рассмотрено и в ближайшее время наши менеджеры Вам на него ответят.</p>';
                $textHtml .= '<p>Спасибо за проявленный интерес к нашей компании.</p>';

                $mailToUser->setBodyHtml($textHtml);
                $mailToUser->addTo($newPost->getEmail(), $newPost->getAuthor());
                $mailToUser->send();


                $error = false;
                $message .= 'Ваше сообщение успешно отправлено.' . "<br/>";
                $message .= 'В ближайшее время наши менеджеры Вам на него ответят.';
            }
            else{
                $messages = $form_ask->getMessages();
                foreach ($messages as $messageId => $messageValue) {
                    foreach ($messageValue as $value) {
                        $message .= $value."\n\r";
                    }
                }
            }
            $this->view->error = $error;
            $this->view->message = $message;
        }
    }

}



