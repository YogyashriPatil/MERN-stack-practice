const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/user" , userRouter);
app.use("/course", courseRouter);

// createUserRoutes(app);
// createCourseRoutes(app);

app.listen(PORT, (req,res) => {
    console.log("listening on the port ")
})