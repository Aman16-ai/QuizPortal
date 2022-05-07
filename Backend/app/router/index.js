const router = require('express').Router({mergeParams:true})
const authentication = require("./Authentication")


router.use('/auth',authentication)

module.exports = router
