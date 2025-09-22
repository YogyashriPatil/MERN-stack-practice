const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', (req, res) => {
    // Implement fetching all courses logic

    console.log("fetch");
    res.json({
        msg:"hi there"
    })
});

module.exports = router;