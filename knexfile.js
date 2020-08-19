// @ts-check

const path = require('path');

const migrations = {
  directory: path.resolve('server', 'migrations'),
};

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database.sqlite',
    },
    migrations,
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations,
  },
};
