const router = require("express").Router({mergeParams:true})
const getQuizById = require("./getQuizById")
const createQuiz = require("./createQuiz")
const authMiddleware = require("../../../helper/middleware/auth")
const getUserQuiz = require("./getUserQuiz")

router.get("/getQuizById/:id",getQuizById)
router.post("/createQuiz",authMiddleware,createQuiz)
router.get("/userQuizzes",authMiddleware,getUserQuiz)
module.exports = router