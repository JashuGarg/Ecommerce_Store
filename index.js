// import cookieparser from "cookieparser";
import express from "express" ;
import { router as userrouter }  from "./routes/user.route.js";
import { Connectdb } from "./connect.js";
const url = "mongodb://localhost:27017/e-commerce"
const port = 3000;
const app = express()

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}))

Connectdb(url).then(()=>{
    console.log("DataBase connected succesfully");
}).catch((err)=>{
    console.log("Err in connecting DB: ",err);
})


//routes

app.use("/users" ,userrouter)



//server 
app.listen(port,(err)=>{
    try {
        console.log(`Server is Live at Port: ${port} `);
        
    } catch (error) {
        console.log("Error in connecting to server at port: ",port);      
    }
})