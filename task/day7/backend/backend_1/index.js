 import express, { json } from 'express'
 import dotenv from 'dotenv'
 import cors from 'cors'
 import dataRoutes from './routes/dataRoutes.js'
import connectDB from './config/db.js'
 dotenv.config()
 const app = express();

   app.use(cors());
   app.use(express.json())

   connectDB()
   const PORT = process.env.PORT || 5000 

   app.use("/api/Auth", dataRoutes)

 
 
 


   app.listen (PORT,()=>{
   console.log(`successfully sever connected http://localhost:${PORT}`);
    
 })
 
// http://localhost:3000/api/Auth/dataslink  