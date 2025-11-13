   import mongoose from "mongoose" 


const datas = new mongoose.Schema({
  name:{type:String,required:true},
  address:String,
  process:String,
  pincode:Number
})


const datasModel = mongoose.model("userdata",datas )

export default datasModel;