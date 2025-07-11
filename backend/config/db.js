import pg from "pg";
import env from "dotenv";
env.config();

const client=new pg.Client({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT
});

export default client;