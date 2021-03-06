CREATE TABLE `pipeline_property_values` (
  `property_id` int(11) NOT NULL,
  `pipeline_id` int(11) NOT NULL,
  `value` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`property_id`,`pipeline_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE pipeline_property_values CHANGE value value TEXT;

DROP TABLE IF EXISTS pipeline_property_values;

CREATE TABLE `pipeline_property_values` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `property_id` int(11) NOT NULL,
  `pipeline_id` int(11) NOT NULL,
  `value` text,
  PRIMARY KEY (`id`),
  KEY `property_id` (`property_id`),
  KEY `pipeline_id` (`pipeline_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8