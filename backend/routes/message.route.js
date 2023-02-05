const express = require("express") 
const messageModel = require("../models/message.model")


const router  = express.Router()

//  add new message
router.post("/newpost", async (req, res)=>{
    const {id, body,username, parentId, createdAt} = req.body

    const newcomment = await messageModel.create(req.body)
    res.send(newcomment) 

})

// get the root message 
router.get("/getrootpost", async (req, res)=> {
    
    const Rootcomments = await messageModel.find({parentId:"null"}) 
    res.send(Rootcomments) 
})



module.exports = router