const {Router} = require("expres")

const adminRouter = Router();

// adminRouter.use(adminMiddleware);
adminRouter.post("/signup" , async (req,res) => {
    // const username = req.body.username;
    // const password = req.body.username;

    // try {
    //     const hashedPassword = await bcrypt.hash(password, 5)
    //     console.log(hashedPassword)
        
    //     await UserModel.create({
    //         email: email,
    //         password: hashedPassword,
    //     });
    // }
    // catch(e) {
    // }
        
    // res.json({
    //     message : "Your are logged in"
    // })
    res.json({
        message : "signup"
    })
})

adminRouter.post("/signin" , (req,res) => {
    res.json({
        message : "signip"
    })

})

adminRouter.put("/course" , (req,res) => {
    res.json({
        message : "signip"
    })

})

adminRouter.get("/course/bulk" , (req,res) => {
    res.json({
        message : "signip"
    })

})



module.exports = {
    adminRouter : adminRouter
}