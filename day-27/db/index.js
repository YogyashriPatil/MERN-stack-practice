const mongoose = require("mongoose");


const userSchema = mongoose.Schema({

})

const adminSchema = mongoose.Schema({
    
})

const courseSchema = mongoose.Schema({
    
})

const purchaseSchema = mongoose.Schema({
    
})


const Admin = mongoose.model('Admin',adminSchema)
const User = mongoose.model('User',adminSchema)
const Course = mongoose.model('Course',adminSchema)

module.exports = {
    Admin,
    User,
    Course
}