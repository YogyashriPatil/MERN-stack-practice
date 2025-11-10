const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB_URI)

const userSchema = mongoose.Schema({
    username: String,
    password : String,
    purchaseCourse: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]
})

const adminSchema = mongoose.Schema({
    username: String,
    password : String
})  

const courseSchema = mongoose.Schema({
    title: String,
    description : String,
    imageLink: String,
    price: Number
})



const Admin = mongoose.model('Admin',adminSchema)
const User = mongoose.model('User',userSchema)
const Course = mongoose.model('Course',courseSchema)

module.exports = {
    Admin,
    User,
    Course
}