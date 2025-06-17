import pkg from 'pg';
const {Client} = pkg;
import express from 'express';
const app = express();
import { DATABASE_PASSWORD } from '../assignment M6/config.js';
import router from './routes/blogs/blogs.js'
import { router as userRouter} from './routes/users/users.js';


export const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Blogs',
    password: DATABASE_PASSWORD,
    port: 5432,
  });
  
client.connect().then(() => console.log("connected"));


//setup server to accept json as a body
app.use(express.json());
app.set('view engine', 'ejs');

app.use('/blogs', router);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

//START node.js server
app.listen(3000, ()=>{
    console.log("server is running......")
})

