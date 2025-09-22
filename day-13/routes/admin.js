const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin , Course} = require("../db")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username:username,
        password:password
    })
   
        res.json({
            msg:"Admin created successfully"
        })
      
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imagelink = req.body.imagelink;
    const price = req.body.price;
    
    await Course.create({
        title:title,
        description:description,
        imagelink:imagelink,
        price:price
    })

    res.json({
        msg:"Course added successfully"
    })
});

router.get('/courses',adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        courses:response
    })
    
});

module.exports = router;