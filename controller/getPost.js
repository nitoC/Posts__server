

const Model=require("../models/model.js")
const postData= async (req,res)=>{
    console.log("data entry mode")
    try{console.log(req.body)
            if(req.body){
             var { 
                creator,
                title,
                message,
                tags,
                file
            }=req.body
           var Posts= new Model({
                creator:creator,
                title:title,
                message:message,
                tags:tags,
                file:file,
                like:0
            });
           await Posts.save((err)=>{
               if(err){console.log(err.message)}
               else{console.log("saved successfully")}
           });
             res.status(200).json(Posts)
       Model.find({},(response,err)=>{
           if(err){
               console.log(err.message)
           }else{
               console.log(response)
           }
       })
            }else{

                console.log(req.body)
            }
        }catch(err){
            res.status(201).json(err.json)
        }
}
module.exports= postData;