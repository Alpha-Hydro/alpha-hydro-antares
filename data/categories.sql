ALTER TABLE categories ADD active TINYINT DEFAULT 1 NOT NULL;
ALTER TABLE categories ADD full_path VARCHAR(255) NULL;
ALTER TABLE categories CHANGE generate generate TINYINT;
ALTER TABLE categories ADD meta_description LONGTEXT NULL;
ALTER TABLE categories ADD meta_keywords VARCHAR(255) NULL;
ALTER TABLE categories ADD meta_title VARCHAR(255) NULL;
ALTER TABLE categories ADD path VARCHAR(128) NULL;
ALTER TABLE categories ADD sorting INT DEFAULT 0 NOT NULL;