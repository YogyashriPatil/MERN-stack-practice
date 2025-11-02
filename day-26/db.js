const mongoose = require("mongoose")

const ObjectId= mongoose.ObjectId;

const User = new mongoose.Schema({
    email : { type:String, unique: true },
    password : String,
    name: String
})
// schema structure of the database 
const Todo = new mongoose.Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
    UserModel : UserModel,
    TodoModel: TodoModel
}