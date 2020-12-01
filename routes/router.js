
const router=require("express").Router()
const postData =require("../controller/getPost.js")
const posts =require("../controller/sendPosts.js")

router.get("/Posts",posts)
router.post("/Posts",postData)
module.exports=router;