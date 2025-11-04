const express = require("express");
const dotenv = require("dotenv")
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();

dotenv.config();
const PORT = 3000;
app.use(express.json());

app.use("/api/v1/user" , userRouter);
app.use("/api/v1/admin" , adminRouter);
app.use("/api/v1/course", courseRouter);

// createUserRoutes(app);
// createCourseRoutes(app);

app.listen(PORT, (req,res) => {
    console.log("listening on the port ")
})