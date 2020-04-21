const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
};

const postgres = {
  client: "pg",
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
}

module.exports = {
  dev: {
    ...sqlite,
    connection: {
      filename: "./database/dev.db3",
    },
  },

  test: {
    ...sqlite,
    connection: {
      filename: "./database/test.db3",
    },
  },

  production: {
    ...postgres,
    connection: {
      host: process.config.HOST,
      port: process.config.PORT,
      user: process.config.USER,
      password: process.config.PASSWORD,
      database: "./database/production.db3",
    },
  },
};