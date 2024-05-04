const { Pool } = require("pg");

export const pool = new Pool({
  user: "admin",
  host: "db",
  database: "next_news",
  password: "admin",
  port: 5432,
});
