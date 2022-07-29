const Response = require("../../model/Response")

module.exports = async(req,res) => {
    console.log(req.user)
    return res.json({message : "get quiz Response"})
}