const Response = require("../../model/Response")

module.exports = async(req,res) => {
    try {
        const {quiz,userQuestionResponse,score} = req.body
        const response = await Response.create({
            quiz,
            playedBy:req.user,
            userQuestionResponse,
            score
            
        })
        return res.json({"Response" : response})
    }
    catch(err) {
        return res.json({error:"something went wrong"})
    }
}