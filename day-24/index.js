const express = require("express");
const jwt = require("jsonwebtoken")

const app= express();
const port = 3000
const JWT_SECRET="patil"
app.use(express.json())

let users=[]
app.get("/", function(req,res) {
    res.sendFile(__dirname + "/public/index.html")
})
app.get("/signup",function(req,res) {
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
        if(users[i].username == username && users[i].password == password)
            foundUser= users[i]
    }

    if(!foundUser){
        res.json({
            message: "Invalid credential"
        })
    }
    else 
    {
        const token = jwt.sign({username: foundUser.username}, JWT_SECRET);
        res.header("jwt",token)
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
    console.log(token)
    try {
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
    catch(err) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
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