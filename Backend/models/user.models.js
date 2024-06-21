import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

    name:{
        type: String,
        required: true,
        minLength: [4, "Length of name will be minimum 4"]
    },
    phone: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    salary:{
        type: Number,
        required: true
    }

},{timestamps: true})


export const User= mongoose.model("User", userSchema);