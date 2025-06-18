import dotenv from "dotenv";
dotenv.config();
import { Client } from "pg";
import express from "express";
import cors from "cors";
const app = express();
import { DATABASE_PASSWORD, USER } from "../config.js";
import router from "../server/routes/blogs/blogs.js";
import { router as userRouter } from "../server/routes/users/users.js";
import * as _ from "lodash";
import process from "process";

global.process = process;

console.log("DB password:", process.env.DATABASE_PASSWORD);

export const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "Blogs",
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

client.connect().then(() => console.log("connected"));

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

// Make the client available to all routes
app.locals.client = client;

app.use("/blogs", router);
app.use("/users", userRouter);

app.get("/test", (req, res) => {
  res.send("Test route works!");
});

app.listen(5050, () => {
  console.log("server is running......");
});
