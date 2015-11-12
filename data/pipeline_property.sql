CREATE TABLE `pipeline_property` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `sorting` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE pipeline_property ADD show_list INT(11) DEFAULT 1 NOT NULL;
ALTER TABLE pipeline_property ADD active INT(11) DEFAULT 1 NOT NULL;
ALTER TABLE pipeline_property ADD deleted INT(11) DEFAULT 0 NOT NULL;
ALTER TABLE pipeline_property ADD sistem_name VARCHAR(255) DEFAULT '' NOT NULL;
ALTER TABLE pipeline_property ADD type INT DEFAULT 0 NOT NULL;
ALTER TABLE pipeline_property ADD CONSTRAINT unique_sistem_name UNIQUE (sistem_name);