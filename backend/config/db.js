import pg from "pg";
import env from "dotenv";
env.config();

const client=new pg.Client({
  user:"postgres",
  database:"products",
  password:`${process.env.DB_PASSWORD}`,
  host:"localhost",
  port:"5432"
});

export default client;