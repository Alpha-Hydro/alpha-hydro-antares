ALTER TABLE media_categories ADD image VARCHAR(255) NULL;
UPDATE media_categories SET image = thumb;