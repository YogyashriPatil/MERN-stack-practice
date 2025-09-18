//create 4 routes hospital can do
// 1. get - user can check how many kidneys they have and their health
// 2. post - user can add a new kidney
// 3. put - user can replace a kidney, make it healthy
// 4. delete - user can remove a kidney


const express=require("express")
const app=express();
const PORT=3000;
var user =[{
        name:"xyz",
        kidneys: [{
            healthy:false
        }]
}];
app.use(express.json())
app.get("/", (req,res) => {
    const abckidneys=user[0].kidneys;
    const numberofkidneys=abckidneys.length;
    let numberofhealthkidneys=0;
    for(let i=0;i<abckidneys.length;i++){
        if(abckidneys[i].healthy){
            numberofhealthkidneys=numberofhealthkidneys+1;
        }
    }
    const numberofunhealthykidney=numberofkidneys-numberofhealthkidneys;
    res.json({
        numberofkidneys,
        numberofhealthkidneys,
        numberofunhealthykidney
    })
    console.log(abckidneys);
})

app.post("/", (req,res) => {
    const isHealthy=req.body.isHealthy;
    user[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done !"
    })
})

app.put("/", (req,res) => {
    for(let i=0;i<user[0].kidneys.length;i++)
    {
        user[0].kidneys[i].healthy=true;
    }
    res.json({})
})

//removing all the unhealthy kidney
app.delete("/", (req,res) => {

    //you should return a 411
    //only if atleast one unhealthy is there do this, else return 411
    
    if(isThereatleastUnhealthy()){
        const newKidneys=[];
        for(let i=0;i<user[0].kidneys.length;i++)
        {
            if(user[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        user[0].kidneys=newKidneys;
        res.json({
            msg:"done"
        })
    }
    else {
        res.status(411).json({
            msg:"You have no bad kidneys"
        });
    }
})


function isThereatleastUnhealthy()
{
    let atleastunhealthykidney=false;
    for(let i=0;i<user[0].kidneys.length;i++)
    {
        if(!user[0].kidneys[i].healthy){
            atleastunhealthykidney=true;
        }
    }
}
app.listen(PORT, (req,res) => {
    console.log(`Listening on ${PORT}`);
})