import express, { json } from 'express';
import dotenv from 'dotenv';
import leoAuth from "./routes/leoAuth.js"
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 5000
 
const app = express()
app.use(cors())
 
app.use(express.json())

app.use("/api/datas",leoAuth)
   

app.listen(PORT,()=>{

    console.log(`server succfully connected http://localhost:${PORT}`);
    
})



//  http://localhost:3000/api/datas