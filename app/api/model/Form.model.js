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
    message:{
        type:String,
        required:true
    },
    interest:{
        type:String,
        required:true
    },
},
{timestamps:true}
)

const contactForm = mongoose.models.contactForm || mongoose.model("contactForm",formSchema)

export default contactForm