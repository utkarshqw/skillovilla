const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  id:{type:String,required:true},
  body:{type:String, required:true},
  username:{type:String, required:true},
  parentId:{type:String, required:true},
  createdAt:{type:String, required:true},  
})

const messageModel =  mongoose.model("Message",messageSchema)
module.exports = messageModel;
