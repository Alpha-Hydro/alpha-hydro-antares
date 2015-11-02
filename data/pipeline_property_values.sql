CREATE TABLE `pipeline_property_values` (
  `property_id` int(11) NOT NULL,
  `pipeline_id` int(11) NOT NULL,
  `value` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`property_id`,`pipeline_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8