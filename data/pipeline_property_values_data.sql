CREATE TABLE pipeline_property_values (
  id INT,
  property_id INT,
  pipeline_id INT,
  value VARCHAR
);
INSERT INTO pipeline_property_values(id, property_id, pipeline_id, value) VALUES (1, 3, 1, 'DIN 2609');
INSERT INTO pipeline_property_values(id, property_id, pipeline_id, value) VALUES (2, 4, 1, 'HII, 15Mo3, 13CrMo44, 10CrMo910, 1.4541,1.4571');
INSERT INTO pipeline_property_values(id, property_id, pipeline_id, value) VALUES (3, 5, 1, 'test');