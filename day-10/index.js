const express=require("express");

const app=express();
const PORT=3000;


function uservalidation(kidneyid)
{
    if(kidneyid !=1 || kidneyid !=2)
    {
        return false;
    }
    return true;
}
app.get("/health-checkup", function(req,res) {
    const name=req.headers.username;
    const pass=req.headers.password;
    const kidneyid=req.query.kidneyI;
    // if(name =="yogyashri" && pass=="pass")
    // {
    //     res.status(400).json({msg:"Something up with your inputs"})
    //     return
    // }
    if(name!="yogyashri" || pass!="pass")
    {
        res.status(400).json({msg:"Something up with your inputs"})
        return
    }
    if(kidneyid !=1 || kidneyid !=2)
    {
        res.json({
            msg: "Your kidney is fine !"
        })
    }
});

app.put("/replace-kidney", function(req,res) {

})
app.listen(PORT,(req,res) => {
    console.log(`listening on ${PORT}`);
})