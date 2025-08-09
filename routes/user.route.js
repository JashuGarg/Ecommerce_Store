import express from "express";
import { userlogin, usersingup } from "../controllers/users.controller.js";
const router = express.Router();



router
    .route("/api")
    .get((req,res)=>{
        res.send("hello server is live");
    })


router
    .route("/api/signup")
    .get((req,res)=>{
        res.status(202).send({
            msg: "Welcome to User Signup Page",
            status: "Successfull",
        })
    })
    .post(usersingup);

router
    .route("/api/login")
    .get((req,res)=>{
        res.status(202).send({
            msg: "Welcome to User login Page",
            status: "Successfull",
        })
    })
    .post(userlogin);
export {router}