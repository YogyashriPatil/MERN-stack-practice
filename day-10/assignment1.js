const express=require("express")

const app=express();
const PORT=3000;
let count=0;
function countrequest(req,res,next)
{
    count++;
    console.log(count);
    next();
}
app.get("/",countrequest, (req,res) => {
    res.send("<h1> count </h1>")
});


app.listen(PORT);