import mongoose from "mongoose";

const aboutFormSchema = new mongoose.Schema({
    aboutName:{
        type:String,
        required:true
    },
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
        required:true,
        unique:true,
        index:true
    },
    message:{
        type:String,
        required:true
    },
})

const AboutForm  =  mongoose.models.AboutForm || mongoose.model("AboutForm",aboutFormSchema)
export default AboutForm