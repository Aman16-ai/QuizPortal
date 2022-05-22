const router = require('express').Router({mergeParams:true})
const authentication = require("./Authentication")
const category = require("./category")
const quiz = require("./Quiz")


router.use('/auth',authentication)
router.use("/category",category)
router.use("/quiz",quiz)
module.exports = router
