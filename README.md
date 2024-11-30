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
- Run CLI `npm run start`

### Adding new migrations
- Create migration: `npx node-pg-migrate create <migration_name> --migrations-dir=src/migrations --migration-file-language=sql`
