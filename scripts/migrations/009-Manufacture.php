<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 21.09.2015
 * Time: 10:58
 */
class Manufacture extends Akrabat_Db_Schema_AbstractChange
{
    function up()
    {
        $tableName = $this->_tablePrefix . 'manufacture';

        $sql = "
                CREATE TABLE $tableName (
                  id int(11) NOT NULL AUTO_INCREMENT,
                  category_id int(11) NOT NULL DEFAULT '0',
                  title varchar(255) NOT NULL DEFAULT '',
                  path varchar(128) NOT NULL DEFAULT '',
                  full_path varchar(255) NOT NULL DEFAULT '',
                  description text,
                  content_html text,
                  content_markdown longtext,
                  image varchar(255) DEFAULT NULL,
                  create_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                  meta_title varchar(255) DEFAULT NULL,
                  meta_description text,
                  meta_keywords varchar(255) DEFAULT NULL,
                  active tinyint(4) NOT NULL DEFAULT '1',
                  sorting int(11) NOT NULL DEFAULT '0',
                  deleted tinyint(4) NOT NULL DEFAULT '0',
                  PRIMARY KEY (id),
                  UNIQUE KEY unique_id (id),
                  UNIQUE KEY unique_full_path (full_path)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8
            ";

        $this->_db->query($sql);

    }

    function down()
    {
        $tableName = $this->_tablePrefix . 'manufacture';
        $sql= "DROP TABLE IF EXISTS $tableName";
        $this->_db->query($sql);
    }

}