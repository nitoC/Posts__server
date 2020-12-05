
const router=require("express").Router()
const postData =require("../controller/getPost.js")
const posts =require("../controller/sendPosts.js")
const updateData=require("../controller/updateData.js")
const deleteData=require("../controller/deleteData.js")
const likePosts=require("../controller/likePosts.js")


router.patch("/Posts/:id",likePosts)
router.get("/Posts",posts)
router.post("/Posts",postData)
router.patch("/Posts/:id",updateData)
router.delete("/Posts/:id",deleteData)

module.exports=router;