-- Up Migration
CREATE TABLE IF NOT EXISTS user_languages(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL CONSTRAINT fk_users_id REFERENCES users(id),
    language TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Down Migration
DROP TABLE IF EXISTS user_languages;
