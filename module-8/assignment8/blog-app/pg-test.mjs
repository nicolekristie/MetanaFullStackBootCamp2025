// pg-test.mjs
import { Client } from "pg";

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "Blogs",
  password: "yourpassword",
  port: 5432,
});

await client.connect();
console.log("connected");
await client.end();