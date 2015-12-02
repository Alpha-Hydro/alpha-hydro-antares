CREATE TABLE pages
         (
         id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
         path VARCHAR(128) DEFAULT '' NOT NULL,
         title VARCHAR(255) DEFAULT '' NOT NULL,
         description TEXT,
         content_markdown TEXT,
         content_html TEXT,
         meta_title VARCHAR(255),
         meta_description TEXT,
         meta_keywords TEXT,
         sorting INT DEFAULT 0 NOT NULL,
         active INT DEFAULT 1 NOT NULL,
         deleted INT DEFAULT 0 NOT NULL
         );
ALTER TABLE pages ADD CONSTRAINT unique_id UNIQUE (id);
ALTER TABLE pages ADD CONSTRAINT unique_path UNIQUE (path);

ALTER TABLE pages ADD image VARCHAR(255) NULL;
ALTER TABLE pages ADD date_create TIMESTAMP NOT NULL;