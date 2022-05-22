const Quiz = require("../../model/Quiz")

module.exports = async(req,res) => {
    try {
        return res.json({message: "get by id quiz",id : req.params.id});
    }
    catch(err) {
        return res.json(err);
    }
}