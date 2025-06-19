import mongoose from "mongoose";

const restSchema = mongoose.Schema({
    name: String,
    title: String,
    image: String,
    video:String
}, {
    timestamps: true,
});

const RestItem = mongoose.models.RestItem || mongoose.model("RestItem", restSchema);

export default RestItem;