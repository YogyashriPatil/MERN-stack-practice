// const express = require("express");
const jwt = require("jsonwebtoken")
const zod = require("zod")
// const app=express();
const jwtpassword="patil"
// app.use(express.json());
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(4);

function signjwt(username,password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse= passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success) {
        return null;
    }
    const signature = jwt.sign({
        username
    },jwtpassword)
    return signature;
}

function decodeJWT(token)
{
    const decoded = jwt.decode(token)
    if(decoded) {
        return true
    }
    else {
        return false
    }
}

function verifyJwt(token) 
{
    let ans = true;
    try {
        const verified = jwt.verify(token, jwtpassword)
        return true
    }
    catch(e) {
        ans=false
    }
    return ans
}
const ans = signjwt("yogyashri@gmail.com",'123456')
console.log(ans)
const ans1 = decodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlvZ3lhc2hyaUBnbWFpbC5jb20iLCJpYXQiOjE3NjE2MTkxNzV9.E4BZjXRBkCvDzAl2uk8oinR80EGW6n0VsulqSoV4BLU")
console.log(ans1)
const ans2 = verifyJwt("eyJhbGciOiJIUzI1NihIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlvZ3lhc2hyaUBnbWFpbC5jb20iLCJpYXQiOjE3NjE2MTkxNzV9.E4BZjXRBkCvDzAl2uk8oinR80EGW6n0VsulqSoV4BLU")
console.log(ans2)

// app.listen(3000, function(req,res) {
//     console.log("post listening on "+3000)
// })