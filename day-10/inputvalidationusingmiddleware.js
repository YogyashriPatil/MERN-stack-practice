const express=require("express")
const z=require("zod")

const app=express();
// const schema=zod.array(zod.number());

const PORT=3000;

// how to create in zod
// {
//     email:string -> email
//     password:atleast 8 letters 
//     country:'IN','US'
// }

const schema=z.object({
    email:z.string(),
    password:z.string(),
    country:z.literal("IN").or(z.literal('US')),
    kidneys:z.array(z.number())
})

app.use(express.json())
app.post("/health-checkup", (req,res) => {
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys)

    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else {
        res.send(response)
    }
});


app.listen(PORT);