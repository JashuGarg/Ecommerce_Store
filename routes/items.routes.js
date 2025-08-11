import express from "express"
import { adminaddsitems } from "../controllers/items.controllers.js"



const router = express.Router();


router  
    .route("/additem")
    .get((req,res) => {
        res.send("working add items")
    })
    .post(adminaddsitems);

export {router}