const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");


function adminMiddleware(req, resp, next){
    const token = req.headers.token;
    const decode = jwt.verify(token, JWT_ADMIN_PASSWORD);

    if(decode){
        req.userId = decode.id;
        next();
    }
    else{
        resp.status(403).json({
            message:"yu are not sign in "
        })
    }
}


module.exports = {
    adminMiddleware: adminMiddleware
}