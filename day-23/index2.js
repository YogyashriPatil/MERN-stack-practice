const express=require("express")
const jwt= require("jsonwebtoken")
const app=express();
const jwtsecret="yogyashripatil"
app.use(express.json())

const users= []

app.post("/signin", function(req,res) {

    const username = req.body.username;
    const password = req.body.password

    let foundUser=null;
    for(let i=0;i<users.length;i++)
    {
        if(users[i].username == username && users[i].password==password)
        {
            foundUser= users[i]
        }
    }

    if(foundUser) {
        const token = jwt.sign({
            username: username
        }, jwtsecret);
        // doesn.t need to save
        // foundUser.token=token;
        res.json({
            message:token
        })
    }
    else {
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
    console.log(users)
    // const user = users.find(function(u) {
    //     if(u.username == username){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // })
});
app.post("/signup", function(req,res) {
    const username = req.body.username;
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })
    res.json({
        message : "your are signed in"
    })
    console.log(users)
});
app.get("/me", function(req,res) {
    const token= req.headers.token;
    const decodedinformation = jwt.verify(token, jwtsecret)
    // convert decoded
    const username=decodedinformation.username;

    console.log(username)
    let foundUser=null;

    for(let i=0;i<users.length;i++)
    {
        if(users[i].username == username) {
            foundUser=true;
        }
    }
    console.log(foundUser.username, foundUser.password)

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else {
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
})
app.listen(3000, (req,res) => {
    console.log("Listening on port 3000")
})