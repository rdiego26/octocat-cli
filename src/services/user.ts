import db from '../config/db';
import { insertUser, insertLanguage } from '../db/queries';
import { fetchGitHubUser, fetchUserRepos } from '../config/github';
import { cleanAndUnique } from "../utils";

export const saveUserData = async (username: string): Promise<string> => {
    try {
        return await db.tx(async (tx) => {
            const user = await fetchGitHubUser(username);
            const languages = await fetchUserRepos(username);
            const { id: userId } = await insertUser(tx, user.name, user.location, user.avatar_url);

            const sanitizedLanguages = cleanAndUnique(languages);

            await Promise.all(
                sanitizedLanguages
                    .map((lang: string) => insertLanguage(tx, userId, lang))
            );

            return userId;
        });
    } catch (error: any) {
        console.error('Error during transaction:', error.message);
        throw new Error('Failed to save user data');
    }

};
