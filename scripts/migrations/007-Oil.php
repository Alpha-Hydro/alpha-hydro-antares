<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 21.09.2015
 * Time: 10:58
 */
class Oil extends Akrabat_Db_Schema_AbstractChange
{
    function up()
    {
        $tableName = $this->_tablePrefix . 'oil';

        $sql = "
                CREATE TABLE $tableName
                (
                    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                    category_id INT DEFAULT 0 NOT NULL,
                    title VARCHAR(255) DEFAULT '' NOT NULL,
                    path VARCHAR(128) DEFAULT '' NOT NULL,
                    descroption TEXT,
                    content_html TEXT,
                    content_markdown TEXT,
                    image VARCHAR(128),
                    date_create TIMESTAMP,
                    meta_title VARCHAR(255),
                    meta_description TEXT,
                    meta_keywords VARCHAR(255),
                    active TINYINT DEFAULT 1 NOT NULL,
                    sorting INT DEFAULT 0 NOT NULL,
                    deleted TINYINT DEFAULT 0 NOT NULL
                );
                ALTER TABLE $tableName ADD CONSTRAINT unique_id UNIQUE (id);
                ALTER TABLE $tableName ADD CONSTRAINT unique_path UNIQUE (path);
            ";

        $this->_db->query($sql);

    }

    function down()
    {
        $tableName = $this->_tablePrefix . 'oil';
        $sql= "DROP TABLE IF EXISTS $tableName";
        $this->_db->query($sql);
    }

}