const express = require("express")
const userMiddleware = require("../middleware/user")
const router= express.Router();
const { User }= require("../db")
const { Course }= require("../db")

router.post("/signup", async (req,res) => {
    const { username , password}= req.body;
    await User.create({    
        username: username,
        password: password
    })

    res.json({
        message: "User is created"
    })

})

router.get("/courses", async (req,res) => {
    
})

router.post("/courses/:courseId",userMiddleware , (req,res) => {

})

router.get("/purchasedCourses",userMiddleware , (req,res) => {

})

module.exports = router