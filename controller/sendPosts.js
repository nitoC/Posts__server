const Model=require("../models/model.js")
const posts=async (req,res)=>{
    var  data;
   await Model.find({},(response,error)=>{
        if(error){
            console.log(error);
        }else{
            res.json(response);
        }
    })
}



module.exports=posts