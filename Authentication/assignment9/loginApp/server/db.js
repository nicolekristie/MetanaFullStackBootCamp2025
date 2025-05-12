// need to connect the server with the database

 //allows you to configure our connection
 import pg from 'pg';
 const { Pool } = pg;

 //how and where to connect

 const pool = new Pool({
    host: 'localhost',
    user: "postgres",
    password: "t3st1234",
    port: 5432,
    database: "jwtloginauth"
 });

export default pool;