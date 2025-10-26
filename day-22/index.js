const express = require("express")
const cors = require("cors")


const app=express();
const port =3000;

app.use(express.json())
app.use(cors())

app.post("/sum", (req,res) => {
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        answer: a+b 
    })
})

app.listen(port, (req,res) => {
    console.log("Port listening ")
})