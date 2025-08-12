import jwt from "jsonwebtoken";

const secretkey = "Jashu@#$"

function setUser(user){
    const payload = {
        _id: user._id, // include _id in the payload
        email: user.email,

    }
    
    
    return jwt.sign(payload, secretkey);
}
function getUser(token){
    try {
        return jwt.verify(token,secretkey);
    } catch (error) {
        return null ;
    }
}


export {setUser ,getUser}