ALTER TABLE products ADD upload_path VARCHAR(128) NULL;
UPDATE products SET upload_path = '/files/images/product/';