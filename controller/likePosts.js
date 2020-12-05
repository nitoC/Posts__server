const Model=require("../models/model.js")
const mongoose=require("mongoose")
const obj=mongoose.Types.ObjectId
const likePosts= async(req,res)=>{
    
    const data=req.params.id
    try{
       
    //if(!mongoose.ObjectID.isValid(data)) return res.status(404).send("not found")
   
       const data1=await Model.findById(new obj(data))
   const likcount={like:data1.like+1}
   const resp= await Model.findByIdAndUpdate(data,likcount,{new:true})
   res.status(200).json(resp);
    }catch(err){
        console.log(err);
    };

}
module.exports=likePosts;