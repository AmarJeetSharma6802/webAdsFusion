import mongoose from "mongoose";

const SignSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
email:{
     type:String,
    required:true,
},
phone:{
 type:Number,
    required:true,
    index:true
},
refreshToken:String
},{timestamps:true}
)


const signInUser =  mongoose.models.signInUser || mongoose.model("signInUser",SignSchema)

export default signInUser