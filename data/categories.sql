ALTER TABLE categories ADD active TINYINT DEFAULT 1 NOT NULL;
ALTER TABLE categories ADD full_path VARCHAR(255) NULL;
ALTER TABLE categories CHANGE generate generate TINYINT;
ALTER TABLE categories ADD meta_description LONGTEXT NULL;
ALTER TABLE categories ADD meta_keywords VARCHAR(255) NULL;
ALTER TABLE categories ADD meta_title VARCHAR(255) NULL;
ALTER TABLE categories ADD path VARCHAR(128) NULL;
ALTER TABLE categories ADD sorting INT DEFAULT 0 NOT NULL;

UPDATE `categories` SET parent_id = 0 WHERE `parent_id` IS NULL;
ALTER TABLE `categories` CHANGE `parent_id` `parent_id` BIGINT( 20 ) NOT NULL DEFAULT '0';

UPDATE categories SET active = 0 WHERE `order` = -100;
UPDATE categories SET sorting = `order` WHERE `order` > -100 ;