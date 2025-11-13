import datasModel from "../Models/slaDevelopers.js"

export const createDatas =  async(req,res)=>{
//  console.log(req.body);

try{
    const {name,address,process,pincode} = req.body
    
    const createdata = await datasModel.create({name,address,process,pincode})

    res.status(201).json ({
     msg:"successfully created",
     details:createdata
    })
 
}catch(error) {

     res.status(400).json ({
     msg:"something error ",error:error})
     console.log('error',error);
     
    
  
} 
   
 
}


export const getdatas =async (req,res)=>{
  
    try {
         const getdatas = await datasModel.find()
   
          res.status(200).json ({
             details:getdatas
              })
 
     

    } catch (error) {
            console.log('error',error);
    }

}

  