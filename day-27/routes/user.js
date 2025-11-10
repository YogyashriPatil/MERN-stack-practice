const express = require("express")
const userMiddleware = require("../middleware/user")
const router= express.Router();

router.post("/signup", (req,res) => {

})

router.get("/courses", adminMiddleware, (req,res) => {

})

router.post("/courses/:courseId",userMiddleware , (req,res) => {

})

router.get("/purchasedCourses",userMiddleware , (req,res) => {

})

module.exports = router