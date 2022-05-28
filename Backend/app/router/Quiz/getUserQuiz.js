const Quiz = require('../../model/Quiz')

module.exports = async(req,res) => {
    try {
        const quizzes = await Quiz.findOne({createdBy:req.user})
        return res.json({quizzes:quizzes})
    }
    catch(err) {
        return res.json({error:"no quizzes found or some internal server error"})
    }
}