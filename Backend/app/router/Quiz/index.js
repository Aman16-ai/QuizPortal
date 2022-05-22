const router = require("express").Router({mergeParams:true})

const getQuizById = require("./getQuizById")
const createQuiz = require("./createQuiz")

router.get("/getQuizById/:id",getQuizById)
router.post("/createQuiz",createQuiz)
module.exports = router