<?php

class Utils_ModelsGeneratorController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {

        $db = new Zend_Db_Adapter_Pdo_Mysql(array(
            'host'     => 'localhost',
            'username' => 'root',
            'password' => '',
            'dbname'   => 'alphahyd'
        ));

        $aTables = $db->listTables();


        $this->view->tables = $aTables;

        $sql = 'SHOW COLUMNS FROM alphahyd.tmp';
        $aRowTables = $db->describeTable('categories');

        $this->view->rowTable = $aRowTables;
        //var_dump($aRowTables);
    }


}

