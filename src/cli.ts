import { Command } from 'commander';
import { saveUserData } from './services/user';
import {getUsers, getUsersByLocation, getUsersByLanguage, cleanData} from './db/queries';

const program = new Command();

program
    .command('add <username>')
    .description('Fetch and store a GitHub user')
    .action(async (username) => {
        const result = await saveUserData(username);
        if (!result) {
            console.info(`User ${username} already saved.`);
            return;
        }
        console.info(`User ${username} saved.`);
    });

program
    .command('list')
    .description('List all users')
    .action(async () => {
        const users = await getUsers();
        console.log(users);
    });

program
    .command('filter-location <location>')
    .description('List users by location')
    .action(async (location) => {
        const users = await getUsersByLocation(location);
        console.log(users);
    });

program
    .command('filter-language <language>')
    .description('List users by programming language')
    .action(async (language) => {
        const users = await getUsersByLanguage(language);
        console.log(users);
    });

program
    .command('clean')
    .description('Remove all users')
    .action(async () => {
        await cleanData();
        console.log('All users removed!');
    });

program.parse(process.argv);
