const Quiz = require("../../model/Quiz")

module.exports = async(req,res) => {
    try {

        const quiz = await Quiz.findById(req.params.id)
        return res.json({quiz:quiz});
    }
    catch(err) {
        return res.json({error:"no quiz found or some internal server errors"});
    }
}