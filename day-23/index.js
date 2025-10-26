const express=require("express")

const app=express();
app.use(express.json())

const users= []

function generateToken(){
    let option= ['a','b','c','d','e','f','g','h','i','j','k','l','m'
        ,'n','o','p','q','r','s','t','u','v','w','x','y','z','0','1',
        '2','3','4','5','6','7','8','9'
    ]
    let token=""
    for(let i=0;i<32;i++)
    {
        token+=option[Math.floor(Math.random() * option.length)]
    }
    return token;
}


app.post("/signin", function(req,res) {

    const username = req.body.username;
    const password = req.body.password

    let foundUser=null;
    for(let i=0;i<users.length;i++)
    {
        if(users[i].username == username && users[i].password==password)
        {
            foundUser= users[i]
        }
    }

    if(foundUser) {
        res.json({
            message:token
        })
    }
    // const user = users.find(function(u) {
    //     if(u.username == username){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // })
});

app.post("/signup", function(req,res) {
    const username = req.body.username;
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })

    res.json({
        message : "your are signed in"
    })
});

app.listen(3000, (req,res) => {
    console.log("Listening on port 3000")
})