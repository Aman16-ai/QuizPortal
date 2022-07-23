const router = require("express").Router({mergeParams:true})
const createQuiz = require("./createQuiz")
const authMiddleware = require("../../../helper/middleware/auth")
const getUserQuiz = require("./getUserQuiz")
const getQuiz = require("./getQuiz")

// router.get("/getQuizById/:id",getQuizById)
router.get("/getQuiz",getQuiz)
router.post("/createQuiz",authMiddleware,createQuiz)
router.get("/userQuizzes",authMiddleware,getUserQuiz)
module.exports = router