import pkg from "pg";
const { Client } = pkg;
import express from "express";
const app = express();
import router from "../server/routes/blogs/blogs.js";
import { router as userRouter } from "../server/routes/users/users.js";


import * as _ from "lodash";

import process from "process";

import cors from "cors";

app.use(cors()); 

global.process = process;

export const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "Blogs",
  password: "t3st1234",
  port: 5432,
});

client.connect().then(() => console.log("connected"));

//setup server to accept json as a body
app.use(express.json());
app.set("view engine", "ejs");

app.use("/login", router);
app.use("/create-login", userRouter);

// START node.js server
// app.listen(3100, () => {
//   console.log("server is running now ......");
// });