-- Up Migration
ALTER TABLE users
    ADD COLUMN IF NOT EXISTS location TEXT NOT NULL;

-- Down Migration
ALTER TABLE users
    DROP COLUMN IF EXISTS location;
