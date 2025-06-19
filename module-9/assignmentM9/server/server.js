//setup BE api
import pkg from "pg";
const { Client } = pkg;
import express from "express";
const app = express();
import { DATABASE_PASSWORD, USER } from "../server/config.js";
import router  from './controllers/auth.js'

import cors from "cors";
const corsOption = {
  origin: ["http://localhost:5173"], //only accept requests from FE server which is the port that Vite servers run on
};

app.use(cors(corsOption));

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

// app.use("/login", (req, res, next) => {
//   res.send('Login page')
// });
// app.use("/create-login", (req, res, next) => {
//   res.send('create page')
// });


app.use("/login",router);

app.use("/create-login", router);



    








//start up backend

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

//start up our be server> go into the server directory and type:  npm run dev
