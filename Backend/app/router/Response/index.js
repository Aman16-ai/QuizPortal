const router = require("express").Router({mergeParams:true})
const authMiddleWare = require("../../../helper/middleware/auth")
const getResponse = require("./getResponse")
const postResponse = require("./postResponse")

router.use("/getResponse",authMiddleWare,getResponse)
router.use("/postResponse",authMiddleWare,postResponse)

module.exports = router


