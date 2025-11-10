const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);


app.listen(PORT, (req,res) => {
    console.log(`listening on the ${PORT}`)
})