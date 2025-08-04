import express from "express";

const router = express.Router();



router
    .route("/api")
    .get((req,res)=>{
        res.send("hello server is live");
    })
export {router}