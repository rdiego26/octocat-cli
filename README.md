# octocat-cli
CLI tool that interacts with Github API.

### Made with:
- [Commander](https://www.npmjs.com/package/commander)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)

### Steps to run
- Solve dependencies `npm install`
- Up Postgres container `docker-compose up`
- Perform migrations `npm run migrate`
- Rename `env_example` to `.env` and fill in the environment variables
  - If you need to create a Github token, follow the steps [here](https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28#basic-authentication) 
- Build CLI `npm run build`
- Run CLI `npm run start`

### Adding new migrations
- Create migration: `npx node-pg-migrate create <migration_name> --migrations-dir=src/migrations --migration-file-language=sql`
