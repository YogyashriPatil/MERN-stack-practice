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

    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try{
        // const insertQuery =  `INSERT INTO users (username , email , password) values ('${username}','${email}','${password}');`
        const insertQuery =  `INSERT INTO users (username , email , password) values ($1,$2,$3);`
        const addressQuery = `INSERT INTO address (city , country , street, pincode,userId) VALUES ($1,$2,$3,$4,$5);`
        
        await pgClient.query("BEGIN;")
        const response = await pgClient.query(insertQuery,[username,password,email])
        console.log(response)
        const userId = response.rows[0].id;
        console.log(userId)
        const addressInsertResponse = await pgClient.query(addressQuery, [city,country,street, pincode,userId])
        await new Promise(x => setTimeout(x,1000000)); //stop the counter
        await pgClient.query("COMMIT ;")
        if(addressInsertResponse){
            console.log("insert" )
        }
        if(response){
            res.json({
                message:"you are signed up"
            })
        }
    }
    catch(e){
        res.json({
            message: e + "error"
        })
    }
})

app.post("/transaction", (req,res) => {

})
app.listen(3000, () => {
    console.log("listening")
})