//creating an http server
//express
// node default library => no

const express=require("express");

const app=express();
const PORT=3000;

function calculatesum(n)
{
    let sum=0;
    for(let i=0;i<n;i++)
    {
        sum=sum+i;
    }
    return sum;
}
//req= request , res=response 
app.get("/", (req,res) => {
    const n=req.query.n;
    const sum=calculatesum(n)
    res.send("hi your answer is " + sum);
})
// url is ----> http://localhost:3000/?n=30
app.listen(PORT, (req,res) => {
    console.log(`Listening on port ${PORT}`);
})