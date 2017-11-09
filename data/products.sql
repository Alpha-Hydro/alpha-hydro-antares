ALTER TABLE products ADD active TINYINT DEFAULT 1 NOT NULL ;
ALTER TABLE products ADD full_path VARCHAR(255) NULL;
ALTER TABLE products ADD meta_description LONGTEXT NULL;
ALTER TABLE products ADD meta_keywords VARCHAR(255) NULL;
ALTER TABLE products ADD meta_title VARCHAR(255) NULL;
ALTER TABLE products CHANGE parent_id parent_id TINYINT;
ALTER TABLE products ADD path VARCHAR(128) NULL;
ALTER TABLE products ADD sorting TINYINT NOT NULL;

UPDATE products SET sorting = `order`;

ALTER TABLE products ADD deleted INT DEFAULT 0 NOT NULL;

ALTER TABLE products ADD category_id INT NOT NULL AFTER id;
CREATE INDEX category_id ON products (category_id);

UPDATE products
  INNER JOIN categories_xref ON products.id = categories_xref.product_id
SET products.category_id = categories_xref.category_id;