ALTER TABLE products ADD draft VARCHAR(255) NULL;

ALTER TABLE products ADD upload_path_draft VARCHAR(128) NULL;
UPDATE products SET upload_path_draft = '/files/images/product/';