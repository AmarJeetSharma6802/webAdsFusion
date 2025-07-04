import mongoose, { Schema } from "mongoose";


const formSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
},
{timestamps:true}
)

const serviceForm = mongoose.models.serviceForm || mongoose.model("serviceForm",formSchema)

export default serviceForm