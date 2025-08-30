import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true,
        index:true
    },
    title:{
        type:String,
        required:true,
    },
    LongPara:{
        type:String,
        required:true,
    },

},{
    timeStamp:true
})

const blogData = mongoose.models.blogData || mongoose.model("blogData",blogSchema)
export default blogData