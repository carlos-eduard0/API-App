// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    version: '12.2',
    connection: {
      host : "127.0.0.1",
      user : 'postgres',
      password : 'laurindo70',
      database : 'postgres',
  },
    migrations: {
      directory: "./src/database/migrations"
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
