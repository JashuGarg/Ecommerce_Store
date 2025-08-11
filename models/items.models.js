import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    itemname :{
        type: String,
        required: true
    },
    price :{
        type: Number,
        required: true
    },
    discount :{
        type: Number,
        required: false,
        default: 0,

    },
    description:{
        type: String,
        required : false
    }
    // image:{
    //     type: String,
    //     required:true
    // }
})


export const items = mongoose.model("items",itemSchema);