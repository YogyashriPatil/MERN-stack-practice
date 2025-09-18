import mongoose from "mongoose";
import dotenv from "dotenv";

//export a function that connect to the db
dotenv.config();
const db= () => {
    mongoose.connect(process.env.MONGO_DB)
    .then( () => {
        console.log("Connected to mongodb");
    })
    .catch((err) => {
        console.log("Error in connecting mongodb");
    });
}

export default db;