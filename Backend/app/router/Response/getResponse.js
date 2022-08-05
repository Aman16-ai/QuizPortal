const Response = require("../../model/Response")

module.exports = async(req,res) => {
    try {
        let user = req.user
        if(req.query.userType === "author") {
            let response = await Response.find({}).populate({
                path : "quiz",
                Model :"quiz"
            })
            let authorResponse = response.filter((e)=> {
                if(e.quiz.createdBy.toString() === user) return e;
            })
            return res.json({response:authorResponse})
        }

        else if(req.query.userType === "player") {
            let user = req.user
            let response = await Response.findOne({"playedBy" : user}).populate({
                path : "quiz",
                Model : "quiz"
            })
            return res.json({response:response})
        }
    }
    catch(err) {
        return res.json({error:"something went wrong"})
    }
}