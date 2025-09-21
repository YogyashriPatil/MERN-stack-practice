const express=require("express");

const app=express();
const PORT=3000;

app.get("/sum" ,(req,res) => {
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    const sum=a+b;
    res.send(sum.toString());
})

app.get("/interest" ,(req,res) => {
    let price=parseInt(req.query.price);
    let rate=parseInt(req.query.rate);
    let time=parseInt(req.query.time);
    const interest=(price * rate * time) / 100;
    res.send(interest.toString());
    
})


app.listen(PORT, (req,res) => {
    console.log(`listen on ${PORT}`);
})