<?php


class Categories extends Akrabat_Db_Schema_AbstractChange
{
    function up()
    {
        $tableName = $this->_tablePrefix . 'categories';

        $sql = "
                ALTER TABLE $tableName ADD active TINYINT DEFAULT 1 NOT NULL;
                ALTER TABLE $tableName ADD full_path VARCHAR(255) NULL;
                ALTER TABLE $tableName CHANGE generate generate TINYINT;
                ALTER TABLE $tableName ADD meta_title VARCHAR(255) NULL;
            ";

        $this->_db->query($sql);

    }

    function down()
    {
        $tableName = $this->_tablePrefix . 'categories';
        $sql= "
                ALTER TABLE $tableName DROP active;
                ALTER TABLE $tableName DROP full_path;
                ALTER TABLE $tableName CHANGE generate generate TINYINT;
                ALTER TABLE $tableName DROP meta_description;
                ALTER TABLE $tableName DROP meta_keywords;
                ALTER TABLE $tableName DROP path;
                ALTER TABLE $tableName DROP sorting;
            ";

        $this->_db->query($sql);
    }

}