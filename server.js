const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors=require("cors");
const route =require("./routes/router.js")
require("dotenv").config();
const app=express();
app.use(cors());
mongoose.connect(process.env.URL,{ useNewUrlParser: true ,useUnifiedTopology:true,useFindAndModify:false},function(error){
    if(error){
    console.log(error.message)
    }else{
        console.log("connected")
    }

})


const Port=process.env.PORT
app.use(bodyParser.json({limit:"10000kb"}));
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",route)


app.listen(Port,()=>console.log("server started on port"+Port))