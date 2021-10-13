import mongoose from "mongoose"
const { Schema } = mongoose;

const blogSchem = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    avatar: {type: String},
    viewsCount : {type: Number, default: 0},
},  
    { timestamps: true }
);

const blogModel = mongoose.model("blogs", blogSchem);

export default blogModel;