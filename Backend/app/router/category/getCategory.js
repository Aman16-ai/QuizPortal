const Category = require("../../model/Category")

module.exports = async(req,res) => {
    try {
        const allCategories = await Category.find({});
        return res.json({allCategories});
    }
    catch(err) {
        return res.json(err);
    }
}