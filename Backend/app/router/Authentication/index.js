const router = require('express').Router({mergeParams:true})
const createUser = require("./createUser")
const login = require("./login")
router.post('/register',createUser)
router.post('/login',login)
module.exports = router