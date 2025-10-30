// mongodb+srv://practice1:practice@cluster0.q24qtpx.mongodb.net/

const express = require("express")
const dotenv = require("dotenv")
const {UserModel, TodoModel} = require("./db");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

dotenv.config();
const port = process.env.PORT;
const app = express();
const jwtpassword = process.env.JWT_SECRET;
app.use(express.json());
mongoose.connect(process.env.MONGO_DB)


app.post("/signup", async function (req,res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    res.json({
        message : "Your are logged in"
    })
})

app.post("/signin", async function (req,res) {
    const email = req.body.email;
    const password= req.body.password;

    const user =await UserModel.findOne({
        email: email,
        password: password
    })

    if(user) {
        const token = jwt.sign({
                id: user._id.toString
        },jwtpassword)
        res.json({
            token: token
        })
    }
    else 
    {
        res.status(403).json({
            message: "Incorrect credential"
        })
    }
});


app.post("/todo", auth , async function (req,res) {
    const userId= req.userId;
    const title = req.body.title;
    const done = req.body.done;
    await TodoModel.create({
        title,
        userId,
        done
    })
    res.json({
        userId:userId,
        title : title
    })
})

app.post("/todos", auth , async function (req,res) {
    const userId= req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })
    res.json({
        todos
    })

})

function auth (req,res,next) {
    const token = req.headers.token;
    const decodeData = jwt.verify(token , jwtpassword)
    if(decodeData){
        req.userId = decodeData.id;
        next();
    }
    else
    {
        res.status(403).json({
            message: "Incorrect creadential"
        })
    }
}
app.listen(port, function (req,res) {
    console.log(`Listening on the port ${port}`);;
})