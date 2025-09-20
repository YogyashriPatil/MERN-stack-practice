const express=require("express")
const jwt=require("jwt");
const jwtPassword="123456";

const app=express();
const ALL_USERS =[
    {
        username:"yogyashri@gmail.com",
        password:"123",
        name:"yogyashri"
    },
    
    {
        username:"hitesh@gmail.com",
        password:"123123",
        name:"hitesh"
    },
    
    {
        username:"vrushali@gmail.com",
        password:"123456",
        name:"vrushali"
    }
]

function userExists(username,password){
    //write logic to return true or false if this user exists
    //in all_users array
}

app.post("/signin",function (req,res) {
    const username=req.body.username;
    const password=req.body.password;

    if(!userExists(username,password)) {
        return res.status(403).json({
            msg: "User doesn't exists in our in memory db",
        });
    }

    var token=jwt.sign({username:username},'shhhhh');
    return res.json({
        token,
    });
});

app.get("/users",function(req,res) {
    const token= req.headers.authorization;
    try{
        const decoded =jwt.verify(token,jwtPassword);
        const username=decoded.username;

        //return a list of users other than this username
    } catch(err) {
        return res.status(403).json({
            msg:"Invalid token"
        })
    }
})