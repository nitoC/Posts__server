

const Model=require("../models/model.js")
const postData= async (req,res)=>{
   
    try{
            if(req.body){
             var { 
                creator,
                title,
                message,
                tags,
                file,
                createdAt,
                like,
            }=req.body
           var Posts= new Model({
                creator:creator,
                title:title,
                message:message,
                tags:tags,
                file:file,
                like:like,
                createdAt:createdAt
            });
           await Posts.save((err)=>{
               if(err){console.log(err.message)}
               else{console.log("saved successfully")}
           });
             res.status(200).json(Posts);
     /* await Model.find({},(err,response)=>{
           if(err){
               console.log(err.message)
           }else{
               console.log(response)
           }
       })*/
            }else{

                console.log(req.body)
            }
        }catch(err){
            res.status(201).json(err.json)
        }
}
module.exports= postData;