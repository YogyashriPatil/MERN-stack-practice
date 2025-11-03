// const express = require("express")
// const courseRouter = express.Router;

const {Router} = require("express");
const courseRouter = Router();

courseRouter.post("/course/purchase" , (req,res) => {

})

courseRouter.get("/courses" , (req,res) => {

})


module.exports = {
    courseRouter : courseRouter
}