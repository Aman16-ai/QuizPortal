const Quiz = require("../../model/Quiz")

module.exports = async(req,res) => {
    try {
        if("quiz_id" in req.query) {
            const quiz = await Quiz.findById(req.query.quiz_id)
            return res.json({quiz:quiz});
        }
    }
    catch(err) {
        return res.json({error:"no quiz found or some internal server errors"});
    }
}