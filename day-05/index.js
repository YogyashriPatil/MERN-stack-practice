//create a node project
// 1. Create a empty folder
// 2. open the terminal and run --> npm init -y
// 3. create index.js file and copy the hello world program of node.js
// 4. run command --> npm i express
// 5. and run the --> node index.js
// 6. and open the localhost in the chrome website

//rest API, http
const express=require("express");
const bodyParser = require("body-parser");
const PORT=3000;

const app=express();

//middleware
app.use(bodyParser.json())
//fs -> filesystem -read file on system, write to files on read

//create a todo app that lets users store todos on the server
//try to create a http server from scratch in c
//create an http server in rust using actix-web
//create an http server in golang using the gurrila framework
//spring boot java

// app.get("/route-handler",function(req,res) {
//     //headers,body,query parameters
//     // do machine learning model
//     // res.send("hello world");
//     res.json({
//         name : "yogyashri",
//         age: 21
//     })
// })

app.post("/conversations",(req,res) => {
    console.log(req.headers);
    res.send({
        msg:"2+4 = 6"
    })
})

app.get("/", function (req,res) {
    res.send("hello world")
})

app.listen(PORT, ()=> {
    console.log(`Example app listening on port ${PORT}`);
})