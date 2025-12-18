import express from "express"
import { configDotenv } from "dotenv";
import { Client } from "pg";
configDotenv();

const app = express();
app.use(express.json())
const pgClient = new Client(process.env.postgres_db)

// const pgClient2 = new Client({
//     user:"",
//     password:"",
//     port:5432,
//     host:"",
//     database:""
// })
pgClient.connect();

app.post("/signup",async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const insertQuery =  `INSERT INTO users (username , email , password) values ('${username}','${email}','${password}');`
    const response = await pgClient.query(insertQuery)
    if(response){
        res.json({
            message:"you are signed up"
        })
    }
})

app.listen(3000, () => {
    console.log("listening")
})