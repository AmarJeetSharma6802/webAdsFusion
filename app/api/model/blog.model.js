import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    blogType: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    LongPara: {
      type: String,
      required: true,
    },
    date: {
    type: Date,
    default: Date.now, 
  },
  },
  {
     timestamps: true,
  }
);

const blogData =
  mongoose.models.blogData || mongoose.model("blogData", blogSchema);
export default blogData;
