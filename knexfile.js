// Update with your config settings.

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
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: './database/test.db3',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
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
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: './database/production.db3',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    }
  }
}

// require("dotenv").config();

// const sqlite = {
//   client: "sqlite3",
//   useNullAsDefault: true,
//   migrations: {
//     directory: "./database/migrations",
//   },
//   seeds: {
//     directory: "./database/seeds",
//   },
//   pool: {
//     afterCreate: (conn, done) => {
//       conn.run('PRAGMA foreign_keys = ON', done);
//     },
//   },
// };

// const postgres = {
//   client: "pg",
//   useNullAsDefault: true,
//   migrations: {
//     directory: "./database/migrations",
//   },
//   seeds: {
//     directory: "./database/seeds",
//   },
//   pool: {
//     afterCreate: (conn, done) => {
//       conn.run('PRAGMA foreign_keys = ON', done);
//     },
//   },
// }

// module.exports = {
//   dev: {
//     ...sqlite,
//     connection: {
//       filename: "./database/dev.db3",
//     },
//   },

//   test: {
//     ...sqlite,
//     connection: {
//       filename: "./database/test.db3",
//     },
//   },

//   production: {
//     ...postgres,
//     connection: {
//       user: process.env.USER,
//       password: process.env.PASSWORD,
//       filename: process.env.DATABASE_URL
//     }
  // },
// }