require("dotenv").config();
// Update with your config settings.

module.exports = {
  development: {
      client: 'pg',
      connection: {
          host: '127.0.0.1',
          user: process.env.TODO_DB_USER,
          password: process.env.TODO_DB_PW,
          database: 'engine'
      },
      migrations: {
          directory: __dirname + './src/database/migrations',
      },
  },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + './src/database/migrations',
      },
  },
};