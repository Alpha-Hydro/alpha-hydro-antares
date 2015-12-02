<?php


class Products extends Akrabat_Db_Schema_AbstractChange
{
    function up()
    {
        $tableName = $this->_tablePrefix . 'products';

        $sql = "
                ALTER TABLE $tableName ADD active TINYINT DEFAULT 1 NOT NULL;
                ALTER TABLE $tableName ADD full_path VARCHAR(255) NULL;
                ALTER TABLE $tableName ADD meta_description TEXT NULL;
                ALTER TABLE $tableName ADD meta_keywords VARCHAR(255) NULL;
                ALTER TABLE $tableName ADD meta_title VARCHAR(255) NULL;
                ALTER TABLE $tableName CHANGE parent_id parent_id TINYINT;
                ALTER TABLE $tableName ADD path VARCHAR(128) NULL;
                ALTER TABLE $tableName ADD sorting TINYINT NOT NULL;

                UPDATE $tableName SET sorting = `order`;
            ";

        $this->_db->query($sql);

    }

    function down()
    {
        $tableName = $this->_tablePrefix . 'products';
        $sql= "
                ALTER TABLE $tableName DROP active;
                ALTER TABLE $tableName DROP full_path;
                ALTER TABLE $tableName DROP meta_description;
                ALTER TABLE $tableName DROP meta_keywords;
                ALTER TABLE $tableName DROP meta_title;
                ALTER TABLE $tableName CHANGE parent_id parent_id BIGINT;
                ALTER TABLE $tableName DROP path;
                ALTER TABLE $tableName DROP sorting;
            ";

        $this->_db->query($sql);
    }

}