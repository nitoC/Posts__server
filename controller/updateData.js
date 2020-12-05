const Model=require("../models/model.js")
const updateData= async(req,res)=>{

    try{
      const {
            creator,
                    title,
                    message,
                    tags,
                    file,
                    createdAt,
                    like,
        }=req.body;
        const data2={
            creator:creator,
            title:title,
            message:message,
            tags:tags,
            file:file,
            like:like,
            createdAt:createdAt
        }
    const data=req.body.id
   const resp= await Model.findByIdAndUpdate(data,data2,{new:true})
   res.status(200).json(resp)
    }catch(err){
        console.log(err)
    }

}
module.exports=updateData;