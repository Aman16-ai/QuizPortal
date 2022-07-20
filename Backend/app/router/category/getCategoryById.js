const Category = require("../../model/Category")

module.exports = async(req,res) => {
    try {
        const category = await Category.findOne({_id:req.body.id});
        return res.json({category});
    }
    catch(err) {
        return res.json(err);
    }
}