const fs=require("fs");
const express=require("express");

const app=express();
const PORT=3000;

// fs.readfile("path")
app.post("/", (req,res) => {
    res.send("hello world")
})

app.listen(PORT, ()=> {
    console.log(`Example app listening on port ${PORT}`);
})