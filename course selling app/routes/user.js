// const express = require("express")
// const userRouter = express.Router;

const {Router} = require("express");
const userRouter = Router();
userRouter.post("/signup" , async (req,res) => {
    // const username = req.body.username;
    // const password = req.body.username;

    // try {
    //     const hashedPassword = await bcrypt.hash(password, 5)
    //     console.log(hashedPassword)
        
    //     await UserModel.create({
    //         email: email,
    //         password: hashedPassword,
    //     });
    // }
    // catch(e) {
    // }
        
    // res.json({
    //     message : "Your are logged in"
    // })
    res.json({
        message : "signup"
    })
})

userRouter.get("/user/signin" , (req,res) => {
    res.json({
        message : "signip"
    })

})

userRouter.get("/user/purchased-course" , (req,res) => {

})


module.exports = {
    userRouter : userRouter
}   