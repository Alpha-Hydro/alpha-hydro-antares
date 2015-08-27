ALTER TABLE products ADD active TINYINT NOT NULL;
ALTER TABLE products ADD full_path VARCHAR(255) NULL;
ALTER TABLE products ADD meta_description LONGTEXT NULL;
ALTER TABLE products ADD meta_keywords VARCHAR(255) NULL;
ALTER TABLE products ADD meta_title VARCHAR(255) NULL;
ALTER TABLE products CHANGE parent_id parent_id TINYINT;
ALTER TABLE products ADD path VARCHAR(128) NULL;
ALTER TABLE products ADD sorting TINYINT NOT NULL;