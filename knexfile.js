// Update with your config settings.

const localpg = {
  host: "localhost",
  database: "broken-u-lock"
};
const productionDbConnection = process.env.DATABASE_URL || localpg;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/db.db3"
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/testing.db3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: "pg",
    connection: productionDbConnection,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },
  productionSqlite: {
    client: "sqlite3",
    connection: {
      filename: "./database/db.db3"
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },
};
