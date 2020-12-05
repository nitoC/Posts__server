const Model=require("../models/model.js")
const deleteData= async(req,res)=>{
    try{
    const data=req.params.id
   const data1=await Model.findByIdAndRemove(data,{new:true})
   res.json(data1);
    }catch(err){
        console.log(err);
    }

}
module.exports=deleteData;