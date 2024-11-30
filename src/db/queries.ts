import db from '../config/db';
import { ITask } from 'pg-promise';

export const insertUser = async (tx: ITask<any>, name: string, location: string, avatarURL?: string) => {
    return tx.one(
        'INSERT INTO users (name, location, avatar_url) VALUES ($1, $2, $3) RETURNING id',
        [name, location, avatarURL]
    );
};

export const insertLanguage = async (tx: ITask<any>, userId: number, language: string) => {
    return tx.none(
        'INSERT INTO user_languages (user_id, language) VALUES ($1, $2)',
        [userId, language]
    );
};

export const cleanData = async () => {
    return db.any('TRUNCATE TABLE users, user_languages RESTART IDENTITY');
};

export const getUsers = async () => {
    return db.any('SELECT * FROM users');
};

export const getUserByName = async (name: string) => {
    return db.any('SELECT * FROM users WHERE name = $1', [name]);
};

export const getUsersByLocation = async (location: string) => {
    return db.any('SELECT * FROM users WHERE location = $1', [location]);
};

export const getUsersByLanguage = async (language: string) => {
    return db.any(
        `SELECT u.* FROM users u
     JOIN user_languages ul ON u.id = ul.user_id
     WHERE ul.language = $1`,
        [language]
    );
};
