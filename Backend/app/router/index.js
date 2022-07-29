const router = require('express').Router({mergeParams:true})
const authentication = require("./Authentication")
const category = require("./category")
const quiz = require("./Quiz")
const Response = require("./Response")


router.use('/auth',authentication)
router.use("/category",category)
router.use("/quiz",quiz)
router.use("/response",Response)
module.exports = router
