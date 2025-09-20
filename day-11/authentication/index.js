const express=require("express")
const jwt=require("jsonwebtoken");
const jwtPassword="123456";

const app=express();
app.use(express.json())
const ALL_USERS =[
    {
        username:"yogyashri@gmail.com",
        password:"123",
        name:"yogyashri",
    },
    {
        username:"hitesh@gmail.com",
        password:"123123",
        name:"hitesh",
    },
    {
        username:"vrushali@gmail.com",
        password:"123456",
        name:"vrushali",
    }
]

function userExists(username,password){
    //write logic to return true or false if this user exists
    //in all_users array
    //hard todo - try to use the find function in js
    let userExists=false;
    for(let i=0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i].username==username && ALL_USERS[i].password == password){
            userExists=true;
        }
    }
    return userExists;
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
    // console.log(token);
    return res.json({
        token,
    });
});

app.get("/users",function(req,res) {
    const token= req.headers.authorization;
    try{
        const token=req.headers.authorization;
        const decoded =jwt.verify(token,jwtPassword);
        const username=decoded.username;

        //return a list of users other than this username
        res.json({
            users:ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false;
                }
                else {
                    return true;
                }
            })
        })
    } catch(err) {
        return res.status(403).json({
            msg:"Invalid token"
        })
    }
})
app.listen(3000,function(req,res) {
    console.log("listening on port 3000");
});