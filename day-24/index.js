const express = require("express");
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
// const auth = require("mid")
dotenv.config()

const app= express();
const port = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
app.use(express.json())

let users=[]
// localhost:3000
app.get("/", function(req,res) {
    res.sendFile(__dirname + "/public/index.html")
})
app.get("/signup", logger,function(req,res) {
    const username= req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "User sign up "
    })
})

app.get("/signin", logger, function(req,res) {
    const username= req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0;i<users.length;i++)
    {
        if(users[i].username == username)
            foundUser= users[i]
    }

    if(!foundUser){
        res.json({
            message: "Invalid credential"
        })
    }
    else 
    {
        const token = jwt.sign({
            username}, JWT_SECRET)
        res.json({
            message : token
        })
    }
})

function logger(req,res,next)
{
    console.log(req.method +"request come");
    next();
}
function auth(req,res,next)
{
    const token = req.headers.token;
    const decodeData= jwt.verify(token,JWT_SECRET)
    if(decodeData.username){
        req.username = decodeData.username
        next();
    }
    else {
        res.json({
            message:" You are not looged in"
        })
    }
}
app.get("/me",logger, auth, function(req,res){
    const currentusername= req.username
    let foundUser = null
    for(let i=0;i<users.length;i++)
    {
       if(users[i].username == currentusername)
            foundUser=users[i]
    }
    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
    
} )
app.listen(port, (req,res) => {
    console.log("Listening on port number" + port)
})