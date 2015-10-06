<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 21.09.2015
 * Time: 10:14
 */
class MediaCategories extends Akrabat_Db_Schema_AbstractChange
{
    function up()
    {
        $tableName = $this->_tablePrefix . 'media_categories';

        $sql = "
                ALTER TABLE $tableName ADD path VARCHAR(255) NOT NULL DEFAULT '';
                ALTER TABLE $tableName ADD full_path VARCHAR(255) NOT NULL DEFAULT '';
                ALTER TABLE $tableName ADD meta_title VARCHAR(255);
                ALTER TABLE $tableName ADD meta_description TEXT;
                ALTER TABLE $tableName ADD meta_keywords TEXT;
                ALTER TABLE $tableName ADD sorting INT DEFAULT 0 NOT NULL;
                ALTER TABLE $tableName ADD active INT DEFAULT 1 NOT NULL;
                ALTER TABLE $tableName ADD deleted INT DEFAULT 0 NOT NULL;
                ALTER TABLE $tableName ADD CONSTRAINT unique_id UNIQUE (id);
            ";

        $this->_db->query($sql);
    }

    function down()
    {
        $tableName = $this->_tablePrefix . 'media_categories';

        $sql = "
                ALTER TABLE $tableName DROP path;
                ALTER TABLE $tableName DROP full_path;
                ALTER TABLE $tableName DROP meta_title;
                ALTER TABLE $tableName DROP meta_description;
                ALTER TABLE $tableName DROP meta_keywords;
                ALTER TABLE $tableName DROP sorting;
                ALTER TABLE $tableName DROP active;
                ALTER TABLE $tableName DROP deleted;
            ";

        $this->_db->query($sql);
    }
}