import pg from "pg";
import env from "dotenv";
env.config();

let client;
if (process.env.NODE_ENV == "production") {
  client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
}
else {
  client = new pg.Client({
    user: "postgres",
    database: "products",
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: 5432
  });
}


export default client;