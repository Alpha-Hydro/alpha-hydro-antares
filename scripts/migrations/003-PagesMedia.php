<?php

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 21.09.2015
 * Time: 10:14
 */
class PagesMedia extends Akrabat_Db_Schema_AbstractChange
{
    function up()
    {
        $tableName = $this->_tablePrefix . 'pages';

        $sql = "
                ALTER TABLE $tableName RENAME TO media;
                ALTER TABLE $tableName.'_categories' RENAME TO media_categories;
            ";

        $this->_db->query($sql);
    }

    function down()
    {
        $tableName = $this->_tablePrefix . 'media';

        $sql = "
                ALTER TABLE $tableName RENAME TO pages;
                ALTER TABLE $tableName.'_categories' RENAME TO pages_categories;
            ";

        $this->_db->query($sql);
    }
}