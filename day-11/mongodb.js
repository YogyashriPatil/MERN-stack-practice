const mongoose=require("mongoose");
const express=require("express")
const dotenv=require("dotenv");
// const jwt=require("jsonwebtoken");

const app=express();
app.use(express.json())
dotenv.config();

const mongourl=process.env.MONGO_DB
mongoose.connect(mongourl)

const User = mongoose.model("Users",{name:String,
    email:String,
    password:String
});

app.post("/signup",async function (req,res) {
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const existinguser= await User.findOne({email:username});
    if(!existinguser) {
        return res.status(400).send("username already exits");
    }
    const user = new User({
        name:name,
        email:username,
        password:password
    });
    user.save();

    res.json({
        "msg":"User created successfully"
    });
});

app.listen(3000, function(req,res) {
    console.log("listening.......");
})