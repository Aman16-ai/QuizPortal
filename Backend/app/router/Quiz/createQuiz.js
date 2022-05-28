const Quiz = require("../../model/Quiz")

module.exports = async(req,res) => {
    try {

        const userId = req.user;
        const {title,category,questionsAndAnswers} = req.body

        let quiz = await Quiz.create({title,createdBy:userId,category,questionsAndAnswers})

        return res.json({message:"created successfully",quiz});
    }
    catch(err) {
        return res.json(err);
    }
}