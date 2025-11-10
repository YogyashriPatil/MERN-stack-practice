const express = require("express")
const adminMiddleware = require("../middleware/admin")
const { Admin } = require("../db")
const router= express.Router();
const { Course }=require("../db") 
router.post("/signup", async (req,res) => {
    const { username , password}= req.body;

    // check user is exist

    await Admin.create({    
        username: username,
        password: password
    })

    res.json({
        message: "Admin is created"
    })

})

router.post("/courses", adminMiddleware, async (req,res) => {
    // const adminId: req.adm
    const { title, description, imageLink,price}= req.body;
    const newCourse = await Course.create({    
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })

    res.json({
        message: "course created sucessfully",
        courseId: newCourse._id
    })
})

router.get("/courses", adminMiddleware, async (req,res) => {
    const allcourses = await Course.find({})

    res.json({
        message:"all courses",
        allcourses
    })
})

module.exports = router