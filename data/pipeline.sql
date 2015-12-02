CREATE TABLE `pipeline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL DEFAULT '0',
  `path` varchar(255) NOT NULL DEFAULT '',
  `full_path` varchar(255) NOT NULL DEFAULT '',
  `title` varchar(255) NOT NULL DEFAULT '',
  `description` text,
  `content_html` text,
  `content_markdown` text,
  `image` varchar(255) DEFAULT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text,
  `meta_keywords` varchar(255) DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  `sorting` int(11) NOT NULL DEFAULT '0',
  `deleted` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_id` (`id`),
  UNIQUE KEY `unique_full_path` (`full_path`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE pipeline ADD image_draft VARCHAR(255) NULL;
ALTER TABLE pipeline ADD image_table VARCHAR(255) NULL;