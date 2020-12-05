const mongoose=require("mongoose");
const PostSchema= new mongoose.Schema({
   creator:String,
    title:String,
    message:String,
    tags:[{type:String}],
    file:String,
    like:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date
    }
})

module.exports=mongoose.model("Model",PostSchema);