const express = require("express") 
const userModel = require("../models/user.model")
const router  = express.Router()

// create user 
router.post("/register",async (req, res)=>{
const {email, name, password} = req.body
    var existing = await userModel.find({email})
    if(existing.length !== 0)
    {
        return res.send("user already exists")
    }
    
    var newuser = await userModel.create(req.body)
    res.send(newuser) 

    
})


router.post("/login",async (req, res)=> {
    var {email ,  password} = req.body
    var user = await userModel.findOne({email})
    if(user.password == password)
    {
        res.send(user) 
    } 
    else
    {
        res.send(false)
    }
})

module.exports = router