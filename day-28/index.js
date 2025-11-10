const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user")
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json())
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);


app.listen(PORT, (req,res) => {
    console.log(`listening on the ${PORT}`)
})