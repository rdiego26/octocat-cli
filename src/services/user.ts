import { insertUser, insertLanguage } from '../db/queries';
import { fetchGitHubUser, fetchUserRepos } from '../config/github';

export const saveUserData = async (username: string) => {
    const user = await fetchGitHubUser(username);
    const { id: userId } = await insertUser(user.name, user.location);

    const languages = await fetchUserRepos(username);
    await Promise.all(
        languages.map((lang: string) => insertLanguage(userId, lang))
    );

    return userId;
};
