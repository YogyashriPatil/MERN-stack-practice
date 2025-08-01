import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app=express(); //initialize

const port=process.env.PORT ; //run on port number eg. 3002,3000,5173,8000,8080

app.get("/",(req,res) => {
    res.send("Hello world ! ");
});
app.use(cors({
    origin:"http://localhost:3000",
    methods:['GET','POST'],
    credentials:true
}))
app.use(express.json())
app.unsubscribe(express.urlencoded({extended:true}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); 