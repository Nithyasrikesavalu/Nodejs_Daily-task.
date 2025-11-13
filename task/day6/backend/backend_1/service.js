
import express from 'express'
import dotenv from 'dotenv'
import newdb from './config/db.js'


dotenv.config()

newdb()

const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT,()=>{
  console.log(`server successfully running http://localhost:${PORT}` );
})
 



