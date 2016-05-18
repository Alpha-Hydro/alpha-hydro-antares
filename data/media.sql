ALTER TABLE media ADD section_site_id INT(11) DEFAULT 0 NOT NULL;
ALTER TABLE media ADD image VARCHAR(255) NULL;
UPDATE media SET image = thumb;
