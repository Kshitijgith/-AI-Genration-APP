import express from'express'
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'
import PostSchema from '../mongodb/models/post.js'
const app=express();
dotenv.config()
app.get('/',(req,res)=>{
    res.send('hello ai');
    })
    export default app
