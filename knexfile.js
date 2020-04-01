require("dotenv").config();
// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    version: '12.2',
    connection: {
      host : process.env.BD_HOST, 
      user : process.env.BD_USER,  
      password : process.env.BD_PASS, 
      database : process.env.BD_DATA, 
  },
    migrations: {
      directory: "./src/database/migrations", ///BD_DIR
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
