<?php

class SectionsController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
    }

    public function mediaAction()
    {
        Zend_Controller_Front::getInstance()->getResponse()->setRedirect('/media/', 301);
        return;
    }

    public function newsAction()
    {
        $request = $this->getRequest();
        $media_id = $request->getParam('id');

        $mediaMapper = new Media_Model_Mapper_Media();
        $media = $mediaMapper->find($media_id, new Media_Model_Media());

        if(is_null($media))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);


        if($media->getFullPath() == '')
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        $url = '/media/'.$media->getFullPath().'/';

        Zend_Controller_Front::getInstance()->getResponse()->setRedirect($url, 301);
        return;
    }

    public function productionAction()
    {
        Zend_Controller_Front::getInstance()->getResponse()->setRedirect('/manufacture/', 301);
        return;
    }

    public function productionPostAction()
    {
        $request = $this->getRequest();
        $id = $request->getParam('id');

        if(is_null($id))
            throw new Zend_Controller_Action_Exception("Страница не найдена", 404);

        switch ($id){
            case 36:
                $url = '/manufacture/gidrocilindry/';
                break;
            case 35:
                $url = '/manufacture/gidrostancii/';
                break;
            default:
                $url = '/manufacture/';
        }

        Zend_Controller_Front::getInstance()->getResponse()->setRedirect($url, 301);
        return;

    }

    public function pipelineAction()
    {
        Zend_Controller_Front::getInstance()->getResponse()->setRedirect('/pipeline/', 301);
        return;
    }

    public function oilAction()
    {
        Zend_Controller_Front::getInstance()->getResponse()->setRedirect('/oil/', 301);
        return;
    }

    public function contactsAction()
    {
        Zend_Controller_Front::getInstance()->getResponse()->setRedirect('/contacts/', 301);
        return;
    }


}















