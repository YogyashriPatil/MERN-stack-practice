const { Router } = require("express");
const {User , Course} = require("../db")
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    })

    res.json({
        msg:"User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses:response
    })

});

router.post('/course/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.params.username;
    User.updateOne({
        username:username
    }, {
        purchasedCourses: {
            "$push": { purchasedCourses : courseId }
        }
    });
    res.json({
        "msg" : "course purchased"
    })
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
        username : req.headers.username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })
    res.json({
        msg : "Hi there"
    })
});

module.exports = router