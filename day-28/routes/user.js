const express = require("express")
const userMiddleware = require("../middleware/user")
const router= express.Router();
const { User }= require("../db")
const { Course }= require("../db");
const { default: mongoose } = require("mongoose");

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
    const allcourses = await Course.find({})

    res.json({
        message:"all courses",
        allcourses
    })  
})

router.post("/courses/:courseId",userMiddleware , async (req,res) => {
    const courseId = req.params.courseId
    const username = req.headers.username

    await User.updateOne({
            username:username
        },  
        {
        "$push": 
        { 
            purchaseCourse: courseId
        }
    })
    res.json({
        message:" Your course was purchsed"
    })
})

router.get("/purchasedCourses",userMiddleware , async (req,res) => {
    const user = await User.findOne({
        username: req.headers.username
    })
    console.log(user.purchaseCourse)
    const course = await Course.find({
        _id: {
            "$in" : user.purchaseCourse
        }
    })
    // response
    res.json({
        course:course
    })
})

module.exports = router