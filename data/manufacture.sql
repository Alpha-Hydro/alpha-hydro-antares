CREATE TABLE `manufacture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `path` varchar(128) NOT NULL DEFAULT '',
  `description` text,
  `content_html` text,
  `content_markdown` longtext,
  `image` varchar(255) DEFAULT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text,
  `meta_keywords` varchar(255) DEFAULT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1',
  `sorting` int(11) NOT NULL DEFAULT '0',
  `deleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_id` (`id`),
  UNIQUE KEY `unique_path` (`path`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE manufacture ADD full_path VARCHAR(255) DEFAULT '' NOT NULL;
ALTER TABLE manufacture ADD CONSTRAINT unique_full_path UNIQUE (full_path);
DROP INDEX unique_path ON manufacture;