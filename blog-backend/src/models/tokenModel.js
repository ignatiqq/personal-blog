import mongoose from "mongoose";
const { Schema } = mongoose;

const tokenSchem = new Schema({
    user: {type: String, required: true},
    refreshToken: {type: String, required: true}
})

const tokenModel = mongoose.model("tokens", tokenSchem);

export default tokenModel;