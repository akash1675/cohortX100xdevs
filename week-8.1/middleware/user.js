const jwt  = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");


function userMiddleware(req, resp , next ){
    const token  = req.headers.token;
    const decoder = jwt.verify(token , JWT_USER_PASSWORD);

    if(decoder){
        req.userId = decoder.id;
        next(); 
    }
    else{
        resp.status(403).json({
            message:"you are not sign in"
        })
    }
}

module.exports = {
    userMiddleware : userMiddleware
}