import pkg from "pg";
const { Client } = pkg;
import express from "express";
const app = express();
import { DATABASE_PASSWORD, USER } from "./config.js";

import authRoutes from "./controllers/auth.js";

// import dotenv from "dotenv";

// import dotenv from '../config.js'

import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  //handle root
});

app.use("/auth", authRoutes);

app.get("/create-account", (req, res) => {
  console.log("Creating an account");
});

// global.process = process;

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

// app.use("/users");

//START node.js server
app.listen(5100, () => {
  console.log("Server is running......");
});
