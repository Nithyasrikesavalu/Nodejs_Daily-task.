import express from 'express'
import { headerController, paramaController, queryController, userController } from '../controller/dataControllers.js'
 
const routes = express.Router()

routes.post("/user",userController)
routes.get("/user/:wariorId",paramaController)
routes.get("/query",queryController )
routes.get("/header", headerController)

export default routes;  

//  http://localhost:3000/api/datas/user/