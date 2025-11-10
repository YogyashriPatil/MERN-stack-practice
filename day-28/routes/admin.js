const express = require("express")
const adminMiddleware = require("../middleware/admin")
const { Admin } = require("../db")
const router= express.Router();
const { Course }=require("../db") 
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

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

router.post("/signin", async (req,res) => {
    const { username , password}= req.body;

    const admin = await Admin.find({    
        username: username,
        password: password
    })

    if(admin){
        const token = jwt.sign({
        username
        },JWT_SECRET)
        res.json({
            token
        })
    }
    else 
    {
        res.status(403).json({
            message: "Admin not signup"
        })
    }

   
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