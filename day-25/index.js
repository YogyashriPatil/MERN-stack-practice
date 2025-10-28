const express = require("express");
const jwt = require("jsonwebtoken")


const app=express();

app.use(express.json());

const value = {
    name:"yogyashri",
    password:"123456"
}
// token is generated
const token=jwt.sign(value,"asdf")
console.log(token)

//  decoded
// const content = {
//   "name": "yogyashri",
//   "password": "123456",
//   "iat": 1761618146
// }

// verify
const verifytoken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW9neWFzaHJpIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE3NjE2MTgxNDZ9.ZFxUW94glmuD4HWyNm5mVKCLv56dTnoDL0IErT-yP0o","asdf")
console.log(verifytoken)

app.listen(3000, function(req,res) {
    console.log("post listening on "+3000)
})