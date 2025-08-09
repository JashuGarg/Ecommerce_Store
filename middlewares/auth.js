import { getUser } from "../utils/auth.js";


function checkifuserexist(){
    const token = req.cookies?.usercredentials;

    if(!token) return res.status(401).send({
            mssg:`User is not Autherised`,
            status : "UnSuccesfull"
        });

    const user = getUser(token);

     if (!user || !user._id) return res.status(401).send({
            mssg:`User is not Autherised`,
            status : "UnSuccesfull"
        });;
    // console.log(user);
    
    req.user = user;
    
    next();
}