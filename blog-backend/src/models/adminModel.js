import mongoose from "mongoose";
const { Schema } = mongoose;

const adminSchem = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
})

const adminModel = mongoose.model("admin", adminSchem);
export default adminModel;