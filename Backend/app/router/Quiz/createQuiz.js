const Quiz = require("../../model/Quiz")

module.exports = async(req,res) => {
    try {
        return res.json("creating quiz");
    }
    catch(err) {
        return res.json(err);
    }
}