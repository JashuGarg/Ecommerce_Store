// import cookieparser from "cookieparser";
import express from "express" ;
import { router as userrouter }  from "./routes/user.route.js";
import { router as itemrouter } from "./routes/items.routes.js";
import { Connectdb } from "./connect.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const url = process.env.MONGOURL;
const port = process.env.PORT;
const app = express();

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));




Connectdb(url).then(()=>{
        console.log("DataBase connected succesfully");
    }).catch((err)=>{
        console.log("Err in connecting DB: ",err);
    })


//routes

app.use("/users",userrouter);
app.use("/admin",itemrouter);


//server 
app.listen(port,(err)=>{
    try {
        console.log(`Server is Live at Port: ${port} `);
        
    } catch (error) {
        console.log("Error in connecting to server at port: ",port);      
    }
})