const router = require('express').Router({mergeParams:true})
const authentication = require("./Authentication")
const category = require("./category")

router.use('/auth',authentication)
router.use("/category",category)
module.exports = router
