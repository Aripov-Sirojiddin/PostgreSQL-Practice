const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: `${process.env.PSQL_USER}`,
  database: "top_users",
  password: `${encodeURIComponent(process.env.PSQL_PASS)}`,
  port: 5432,
});
