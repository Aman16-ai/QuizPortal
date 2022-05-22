const router = require('express').Router({mergeParams:true})
const createUser = require("./createUser")
const login = require("./login")
const getUser = require("./getUser")
const authMiddleware = require('../../../helper/middleware/auth')

router.post('/register',createUser)
router.post('/login',login)
router.get('/getUser',authMiddleware,getUser)
module.exports = router