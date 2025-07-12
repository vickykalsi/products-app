import env from "dotenv";
env.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import productRouter from "./routes/productRoutes.js";
import client from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/products", productRouter);

const startDB = async function () {
  try {
    console.log("starting db");
    await client.connect();
    await client.query(`create table if not exists products
      (id serial primary key,
      name text not null,
      image text not null,
      price decimal(10,2) not null)`);
    console.log("db started");
  }
  catch (error) {
    console.error(error.message);
    throw error;
  }
}

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

startDB().then(() => {
  app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
  });
}).catch(() => {
  console.log("can't start server since DB was not started");
});
