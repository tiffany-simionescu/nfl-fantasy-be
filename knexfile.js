require("dotenv").config();

module.exports = {

  dev: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/dev.db3'
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
  },
},

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/test.db3'
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
  },
},

  production: {
    client: "postgresql",
    useNullAsDefault: true,
  // connection: process.env.DATABASE_URL,
    connection: {
      server: process.env.SERVER,
      port: process.env.PORT,
      host: process.env.HOST,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      ssl: require,
    },
  migrations: {
    directory: "./database/migrations",
    tableName: "knex_migrations",
  },
  seeds: {
    directory: "./database/seeds"
  },
  pool: {
    min: 2,
    max: 10,
  },
  }
}