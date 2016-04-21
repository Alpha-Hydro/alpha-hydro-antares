<?php

class Utils_ProductsDraftController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $productsMapper = new Catalog_Model_Mapper_Products();

        $products = $productsMapper->fetchAll();
        $countDraft = 0;

        /** @var Catalog_Model_Products $product */
        foreach ($products as $product) {
            if(!is_null($product->getAImages())){
                $draftImages = unserialize($product->getAImages());
                if(!empty($draftImages)){
                    $product->setDraft($draftImages[0]);
                    $productsMapper->save($product);
                }
                
                $countDraft++;
            }
        }

        Zend_Debug::dump($countDraft, 'Сгенерировано чертежей: ', true);

    }


}

