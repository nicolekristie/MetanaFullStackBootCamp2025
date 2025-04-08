import pkg from 'pg';
const {Client} = pkg;
import { DATABASE_PASSWORD } from '../assignment M6/config.js';


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Blogs',
    password: DATABASE_PASSWORD,
    port: 5432,
  });

  //need a function const createBlogTable >await client.connect> (createtablequery)ex. blogs/users

  const blogSchema = {
    blog_id: {
        type: Number,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Text,
        allowNull: false
    },
    blog_content:{
        type: Text,
        allowNull: false
    },
    author:{
        type: Text,
        allowNull: false
    },
    created:{
        type: Date,
        allowNull: false
    }
  }


  


// const blogSchema =  {
//     title: { type: String, required: true },
//     content: { type: String, required: true },
//     author: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
// }, {collection: 'Blog_collection'})

//model allows us to interact directly with the database using this schema
// export default .model('Blogs', blogSchema);

