import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    itemname :{
        type: String,
        required: true
    },
    price :{
        type: String,
        required: true
    },
    discount :{
        type: String,
        required: true
    },
    image:{
        type: String,
        required:true
    }
})