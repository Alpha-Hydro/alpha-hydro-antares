CREATE TABLE oil
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    category_id INT DEFAULT 0 NOT NULL,
    title VARCHAR(255) DEFAULT '' NOT NULL,
    path VARCHAR(128) DEFAULT '' NOT NULL,
    description TEXT,
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
ALTER TABLE oil ADD CONSTRAINT unique_id UNIQUE (id);
ALTER TABLE oil ADD CONSTRAINT unique_path UNIQUE (path);

ALTER TABLE oil ADD full_path VARCHAR(255) DEFAULT '' NOT NULL;
UPDATE oil SET full_path = path;
DROP INDEX unique_path ON oil;
CREATE UNIQUE INDEX oil_full_path_uindex ON oil (full_path);