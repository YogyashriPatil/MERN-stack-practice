import express from "express";
import dotenv from "dotenv";
import cors from "cors"
dotenv.config()

const app =express();
const port =process.env.PORT;

app.use(cors({
    origin:"http://127.0.0.1:3000",
    methods:['GET','POST','DELETE','OPTIONS'],
    allowedHeaders:['Content-Type','Authorization'],
    credential:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", (req,res) => {
    res.send("Login to website")
})

app.listen(port, () => {
    console.log(`Server is runing on ${port}`);
})