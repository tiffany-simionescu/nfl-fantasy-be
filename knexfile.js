require("dotenv").config();

module.exports = { 

//   dev: {
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     connection: {
//       filename: './database/dev.db3'
//     },
//     migrations: {
//       directory: './database/migrations',
//     },
//     seeds: {
//       directory: './database/seeds',
//     },
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run('PRAGMA foreign_keys = ON', done);
//       },
//   },
// },
dev: {
  client: 'pg',
  connection: {
      host: '127.0.0.1',
      user: process.env.TODO_DB_USER,
      password: process.env.TODO_DB_PW,
      database: 'todos_test'
  },
  migrations: {
      directory: __dirname + '/database/migrations',
  },
  seeds: {
      directory: __dirname + '/database/seeds',
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
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL + `?ssl=true`,
    // connection: {
    //   server: process.env.SERVER,
    //   port: process.env.PORT,
    //   host: process.env.HOST,
    //   database: process.env.DATABASE,
    //   user: process.env.USER,
    //   password: process.env.PASSWORD,
    //   ssl: require,
    // },
  migrations: {
    directory: __dirname + "./database/migrations",
    // tableName: "knex_migrations",
  },
  seeds: {
    directory: __dirname + "./database/seeds"
  },
  pool: {
    min: 2,
    max: 10,
  },
  }
}