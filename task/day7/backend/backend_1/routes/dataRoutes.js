import express from "express";
import { createDatas, getdatas } from "../controllers/dataHadlling.js";


const routes = express.Router()  

 routes.post("/dataslink",createDatas) 
 routes.get ("/getdatas",getdatas)   

 export default routes;


