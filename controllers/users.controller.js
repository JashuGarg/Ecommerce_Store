import { users } from "../models/users.models.js";
import bcrypt from "bcrypt" ; 
import { setUser,getUser } from "../utils/auth.js";

async function usersingup(req,res) {
    const body = req.body;

    if(!body || !body.username || !body.email || !body.password){
        res.send("All fields are compusory!!");
    }

    
    const hashpass = await bcrypt.hash(body.password,10);
    try {
        const user = await users.create({
        username: body.username,
        email: body.email,
        password: hashpass,
        contactno: body.contactno,
        // will add picture feature later
    });

    // console.log(hashpass);
    const token = setUser(user)
    res.cookie("usercredentials",token)
    
    res.status(201).send({
        mssg:`User Created with username : ${body.username}`,
        status : "Successfull"
    })

    } catch (error) {
        res.status(500).send({
            mssg:`User Not Created: ${error}`,
            status : "UnSuccesfull"
        })
    };


}


async function userlogin(req,res) {
    const body = req.body;

    if(!body || !body.name || !body.password){
       return res.send("All fields are compusory!!");
    }

    const user = await users.findOne({email: body.name});
    if(!user)
          return   res.status(404).send({
            mssg:`User Not exist `,
            status : "UnSuccesfull"
        })
    
    const isMatch = await bcrypt.compare(body.password , user.password);
    if(isMatch){
        const token = setUser(user)
       res.cookie("usercredentials",token) ;
       
        res.status(200).send({
            mssg:`User logined`,
            status : "Succesfull"
        });
    }
    else
        return  res.status(401).send({
            mssg:`User Password Not Matched`,
            status : "UnSuccesfull"
        })
}


export {userlogin, usersingup} ;
