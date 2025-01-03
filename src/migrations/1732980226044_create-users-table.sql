-- Up Migration
CREATE TABLE IF NOT EXISTS users(
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  avatar_url TEXT
);

-- Down Migration
DROP TABLE IF EXISTS users;
