const jwt = require("jsonwebtoken")
const secret = require("../index")

function userMiddleware(req,res , next){
    const token = req.headers.authorization;
    const words = token.split(" ")
    const jwToken = words[1]
    
    const decoded = jwt.verify(jwToken,secret);
    if(decoded.username){
        next();
    }
    else 
    {
        res.status(403).json({
                msg: "You are not authenticated"
            })
    }
}

module.exports=userMiddleware