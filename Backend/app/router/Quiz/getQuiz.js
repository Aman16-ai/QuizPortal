const Quiz = require("../../model/Quiz")

module.exports = async(req,res) => {
    try {
        if("quiz_id" in req.query) {
            const quiz = await Quiz.findById(req.query.quiz_id).populate(
               {
                    path : 'createdBy',
                    Model : "User",
                    select : [
                        "-password"
                    ],
               }
            ).populate(
                {
                    path:"category",
                    Model : "category"
                }
            )
            return res.json({quiz:quiz});
        }
    }
    catch(err) {
        return res.json({error:"no quiz found or some internal server errors"});
    }
}