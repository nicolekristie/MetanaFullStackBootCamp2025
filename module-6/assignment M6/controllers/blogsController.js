
import {client} from '../main.js'
import express from 'express';
const router = express.Router(); 
const app = express();


//assign route handler as a function
export const getAllBlogs = (req,res) => {       
    const fetch_query="Select * from blogs;"
    client.query(fetch_query, (err, result) => {
        if(err)
        {
            res.send(err.message)
        }else{
            res.send(result.rows)
        }
    })
}


export const createNewBlog  = (req,res) => {
    const { blog_id, title, blog_content, author, created} = req.body
    const insert_query='Insert into blogs (blog_id, title, blog_content, author, created) Values ($1,$2,$3,$4,$5)'

    client.query(insert_query,[blog_id, title, blog_content, author, created], (err, result) =>{
        if(err)
            {
                res.send(err.message)
            }
        else {
            console.log(result)
            res.send("POSTED DATA");
        }
    })

}

export const updateBlog =  (req,res)=> {

    const blog_content=req.body.blog_content;
    console.log(`entered update ${blog_content}`)
    const blog_id = req.params.id;
    

    const update_query = "Update blogs SET blog_content=$1 Where blog_id=$2;"
    console.log(`entered update ${blog_content} ${blog_id}`)

    client.query(update_query,[blog_content, blog_id], (err, result) => {
        if(err){
            res.send(err.message)
     
        }else{
            res.send("Updated")
        }
    })
}

export const deleteBlog =  (req,res) =>{
    const blog_id = req.params.id;
    console.log(`Delete ${blog_id}`)
    const delete_query='Delete from blogs Where blog_id = $1;';

    client.query(delete_query,[blog_id], (err,result) => {
        if(err){
            res.send(err.message)
        }else{
            res.send(result)
        }
    });

}

export const getBlog = (req,res)=> {
    const blog_id = req.params.id;
    const fetch_query = 'Select * from blogs where blog_id = $1;'
    client.query(fetch_query, [blog_id], (err,result) =>{
        if(err){
            res.send(err.message)
        }else{
            res.send(result.rows);
        }
    })
}




