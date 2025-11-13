 export const userController = (req,res)=>{

   // console.log(req.body);
   
     const{name,data}= req.body 
   //   console.log(data);
     
     try{
       if(name){
          const datas = [name,data]
        //   console.log(datas);
          res.status(200).json({msg:"ok done",store:datas})
       }else{  
          res.status(400).json({msg:"Sorry we can't give"})
       }
     }catch(error){
          console.log(error);
        
     }
  } 

  export const paramaController =(req,res)=>{
   console.log(req.params);
   
   const id = Number(req.params.worriorId);

   switch (id) {
        case 1:
            res.status(200).json({msg:"Power stone"})
            break;
        case 2:
            res.status(200).json({msg:"Space Stone"})
            break;
        case 3:
            res.status(200).json({msg:"Mind Stone"})
            break;
        case 4:
            res.status(200).json({msg:"Reality Stone"})
            break;
        case 5:
            res.status(200).json({msg:"Time Stone"})
            break;
        case 6:
            res.status(200).json({msg:"Soul Stone"})
            break;
        default:
            res.status(404).json({msg:"The ID doesn't exists"})
            break;
    }

  }

  export const queryController = (req, res)=>{
    console.log(req.query);
    if (req.query.planetId == 1){
        res.status(200).json({msg:`${req.query.character} is in Knowhere Planet`})
    }else{
        res.status(404).json({msg:"planet not found"})
    }
    
}

export const headerController = (req,res)=>{
    // console.log(req.headers);
    if (req.headers.place == 'wakanda') {
        res.status(200).json({msg:"vibranium - access granted"})
    }else{
        res.status(403).json({msg:"access denied"})
    }
    
}