ALTER TABLE pages RENAME TO media;
ALTER TABLE pages_categories RENAME TO media_categories;

# Media
ALTER TABLE media ADD path VARCHAR(255) NOT NULL DEFAULT '';
ALTER TABLE media ADD content_markdown TEXT;
ALTER TABLE media ADD meta_title VARCHAR(255);
ALTER TABLE media ADD meta_description TEXT;
ALTER TABLE media ADD meta_keywords TEXT;
ALTER TABLE media ADD sorting INT DEFAULT 0 NOT NULL;
ALTER TABLE media ADD active INT DEFAULT 1 NOT NULL;
ALTER TABLE media ADD deleted INT DEFAULT 0 NOT NULL;

ALTER TABLE media ADD CONSTRAINT unique_id UNIQUE (id);
# После заполнения строк
# ALTER TABLE media ADD CONSTRAINT unique_path UNIQUE (path);

# Media_categories
ALTER TABLE media_categories ADD path VARCHAR(255) NOT NULL DEFAULT '';
ALTER TABLE media_categories ADD meta_title VARCHAR(255);
ALTER TABLE media_categories ADD meta_description TEXT;
ALTER TABLE media_categories ADD meta_keywords TEXT;
ALTER TABLE media_categories ADD sorting INT DEFAULT 0 NOT NULL;
ALTER TABLE media_categories ADD active INT DEFAULT 1 NOT NULL;
ALTER TABLE media_categories ADD deleted INT DEFAULT 0 NOT NULL;

ALTER TABLE media_categories ADD CONSTRAINT unique_id UNIQUE (id);
# После заполнения строк
# ALTER TABLE media_categories ADD CONSTRAINT unique_path UNIQUE (path);
