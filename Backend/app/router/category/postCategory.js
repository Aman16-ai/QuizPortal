const Category = require("../../model/Category")

module.exports = async(req,res) => {
    try {
        const category = await Category.create({name : req.body.name})
        if(category === null) {
            return res.json({err:"something went wrong"})
        }
        return res.json({response:"Added successfully", category})
    }
    catch(err) {
        return res.json(err)
    }
}