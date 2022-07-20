const router = require("express").Router({mergeParams:true})
const getCategory = require("./getCategory")
const postCategory = require("./postCategory")
const getCategoryById = require("./getCategoryById")

router.post("/getCategoryById",getCategoryById)
router.get("/getAllCategories",getCategory);
router.post("/addCategory",postCategory);

module.exports = router