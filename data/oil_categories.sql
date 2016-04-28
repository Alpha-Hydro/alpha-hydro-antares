CREATE TABLE oil_categories
(
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    parent_id INT(11) DEFAULT 0 NOT NULL,
    title VARCHAR(255) DEFAULT '' NOT NULL,
    path VARCHAR(255) DEFAULT '' NOT NULL,
    full_path VARCHAR(255) DEFAULT '' NOT NULL,
    description TEXT,
    content_html TEXT,
    content_markdown TEXT,
    image VARCHAR(255),
    create_date TIMESTAMP,
    meta_title VARCHAR(255),
    meta_description TEXT,
    meta_keywords VARCHAR(255),
    active INT(11) DEFAULT 1 NOT NULL,
    sorting INT(11) DEFAULT 0 NOT NULL,
    deleted INT(11) DEFAULT 0 NOT NULL
);
CREATE UNIQUE INDEX oil_categories_id_uindex ON oil_categories (id);
CREATE UNIQUE INDEX oil_categories_full_path_uindex ON oil_categories (full_path);