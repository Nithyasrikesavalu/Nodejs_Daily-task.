import mongoose from "mongoose";


const  connectDB =  async () => {

    try {
         const conn =await mongoose.connect(process.env.MONGO_URI)
         console.log(`connected successfully db ${conn.connection.host} `);

    }catch (error) {
      
       console.log('Error',error.message  )
    
    }
  
   
       

     
} 

export default connectDB;
// await mongoose.connect(process.env.MONGO_URI)