require("dotenv").config();
// Update with your config settings.

module.exports = {
  development: {
      client: 'pg',
      connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PW,
          database: process.env.DB_DATABASE,
      },
      migrations: {
          directory:'./src/database/migrations',
      },
  },

  //Banco do Eric 
  // development: {
  //   client: 'mysql',
  //   connection: {
  //     filename: './src/database/db.mysql',
  //     host:'localhost',
  //     user:'root',
  //     password:'',
  //     database : 'Engine'
  //   },
  //   migrations: {
  //     directory: './src/database/migrations'
  //   },
  //   useNullAsDefault: true,
  // },

  production: {
      client: 'pg',
      connection: process.env.DB_URL,
      migrations: {
          directory:'./src/database/migrations',
      },
  },
};