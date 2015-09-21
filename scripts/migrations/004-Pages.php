<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 21.09.2015
 * Time: 10:58
 */
class Pages extends Akrabat_Db_Schema_AbstractChange
{
    function up()
    {
        $tableName = $this->_tablePrefix . 'pages';

        $sql = "
                CREATE TABLE $tableName
                     (
                     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                     path VARCHAR(128) DEFAULT '' NOT NULL,
                     title VARCHAR(255) DEFAULT '' NOT NULL,
                     description TEXT,
                     content_html TEXT,
                     meta_title VARCHAR(255),
                     meta_description TEXT,
                     meta_keywords TEXT,
                     sorting INT DEFAULT 0 NOT NULL,
                     active INT DEFAULT 1 NOT NULL,
                     deleted INT DEFAULT 0 NOT NULL
                     );
                ALTER TABLE $tableName ADD CONSTRAINT unique_id UNIQUE (id);
                ALTER TABLE $tableName ADD CONSTRAINT unique_path UNIQUE (path);
            ";

        $this->_db->query($sql);

    }

    function down()
    {
        $tableName = $this->_tablePrefix . 'pages';
        $sql= "DROP TABLE IF EXISTS $tableName";
        $this->_db->query($sql);
    }

}