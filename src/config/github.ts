import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

const GITHUB_API_KEY = process.env.GITHUB_API_KEY;

const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${GITHUB_API_KEY}`,
        Accept: 'application/vnd.github.v3+json',
    },
});

export const fetchGitHubUser = async (username: string) => {
    const response = await githubAPI.get(`${BASE_URL}/${username}`);
    console.log(response.data);
    return response.data;
};

export const fetchUserRepos = async (username: string) => {
    const response = await githubAPI.get(`${BASE_URL}/${username}/repos`);
    return response.data.map((repo: any) => repo.language);
};
