<?php


class Categories extends Akrabat_Db_Schema_AbstractChange
{
    function up()
    {
        $tableName = $this->_tablePrefix . 'categories';

        $sql = "
                ALTER TABLE $tableName ADD meta_description TEXT NULL;
                ALTER TABLE $tableName ADD meta_keywords VARCHAR(255) NULL;
                ALTER TABLE $tableName ADD path VARCHAR(128) NULL;
                ALTER TABLE $tableName ADD sorting INT DEFAULT 0 NOT NULL;
            ";

        $this->_db->query($sql);

    }

    function down()
    {
        $tableName = $this->_tablePrefix . 'categories';
        $sql= "
                ALTER TABLE $tableName DROP meta_description;
                ALTER TABLE $tableName DROP meta_keywords;
                ALTER TABLE $tableName DROP path;
                ALTER TABLE $tableName DROP sorting;
            ";

        $this->_db->query($sql);
    }

}