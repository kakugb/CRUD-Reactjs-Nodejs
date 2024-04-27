import express from 'express'
import dbCon from './utlis/db.js'
import dotenv from 'dotenv';
import cors from 'cors'
import router from './routes/routes.js';
dotenv.config();

const app = express()


dbCon()
app.use(express.json())
app.use(cors())
app.use('/api',router)
app.listen(process.env.PORT | 4000,()=>{
    console.log("server is runing")
})



