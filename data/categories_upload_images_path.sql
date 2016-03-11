ALTER TABLE categories ADD upload_path VARCHAR(128);
UPDATE categories SET upload_path = '/files/images/category/';