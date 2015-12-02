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
                ALTER TABLE $tableName ADD meta_description TEXT NULL;
                ALTER TABLE $tableName ADD meta_keywords VARCHAR(255) NULL;
                ALTER TABLE $tableName ADD path VARCHAR(128) NULL;
                ALTER TABLE $tableName ADD sorting INT DEFAULT 0 NOT NULL;

                UPDATE $tableName SET parent_id = 0 WHERE parent_id IS NULL;
                ALTER TABLE $tableName CHANGE parent_id parent_id INT(20) DEFAULT 0 NOT NULL;

                UPDATE categories SET active = 0 WHERE `order` = -100;
                UPDATE categories SET sorting = `order` WHERE `order` > -100 ;
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
                ALTER TABLE $tableName DROP meta_title;
                ALTER TABLE $tableName DROP meta_description;
                ALTER TABLE $tableName DROP meta_keywords;
                ALTER TABLE $tableName DROP path;
                ALTER TABLE $tableName DROP sorting;

                ALTER TABLE $tableName CHANGE parent_id parent_id INT(20) NULL;
                UPDATE $tableName SET parent_id = NULL WHERE parent_id = 0;
            ";

        $this->_db->query($sql);
    }

}