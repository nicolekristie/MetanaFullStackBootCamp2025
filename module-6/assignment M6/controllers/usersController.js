
import {client} from '../main.js'
import express from 'express';
const router = express.Router(); 
const app = express();


//assign route handler as a function
export const getAllUsers = (req,res) => {       
    const fetch_query="Select * from users;"
    client.query(fetch_query, (err, result) => {
        if(err)
        {
            res.send(err.message)
        }else{
            res.send(result.rows)
        }
    })
}


export const createNewUser  = (req,res) => {
    const { user_id, username, email, user_password, created, blog_id} = req.body
    const insert_query='Insert into users (user_id, username, email, user_password, created, blog_id) Values ($1,$2,$3,$4,$5,$6)'

    client.query(insert_query,[user_id, username, email, user_password, created, blog_id], (err, result) =>{
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

export const updateUser =  (req,res)=> {
    const email=req.params.email;
    const user_id = req.params.id;
    
    const update_query = "Update users SET email=$1 Where user_id=$2;"
    console.log(`entered update ${email} ${user_id}`)

    client.query(update_query,[email, user_id], (err, result) => {
        if(err){
            res.send(err.message)
     
        }else{
            res.send("Updated")
        }
    })
}

export const deleteUser =  (req,res) =>{
    const user_id = req.params.id;
    console.log(`Delete ${user_id}`)
    const delete_query='Delete from users Where user_id = $1;';

    client.query(delete_query,[user_id], (err,result) => {
        if(err){
            res.send(err.message)
        }else{
            res.send(result)
        }
    });

}

export const getUser = (req,res)=> {
    const user_id = req.params.id;
    const fetch_query = 'Select * from users where user_id = $1;'
    client.query(fetch_query, [user_id], (err,result) =>{
        if(err){
            res.send(err.message)
        }else{
            res.send(result.rows);
        }
    })
}




