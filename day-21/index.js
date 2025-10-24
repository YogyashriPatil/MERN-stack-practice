const express=require("express");

const app=express();


app.get("/", (req,res) => {
    res.send("<h1>Hello </h1>")
})


app.get("/sum", (req,res) => {
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        answer: a+b 
    })
})

app.get("/multiply", (req,res) => {
    const a=req.query.a;
    const b=req.query.b;
    res.json({
        answer: a*b 
    })
})

app.get("/div", (req,res) => {
    const a=req.query.a;
    const b=req.query.b;
    res.json({
        answer: a/b 
    })
})

app.get("/sub", (req,res) => {
    const a=req.query.a;
    const b=req.query.b;
    res.json({
        answer: a-b 
    })
})

app.listen(3000, function(){
    console.log("POrt listening the 3000")
})