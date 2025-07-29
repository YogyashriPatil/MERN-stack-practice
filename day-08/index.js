import express from "express"

const app=express(); //initialize

const port=3000; //run on port number eg. 3002,3000,5173,8000,8080
app.get("/",(req,res) => {
    res.send("Hello world ! ");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); 