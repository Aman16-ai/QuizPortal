const moongose = require("mongoose")
const categorySchema = new moongose.Schema({
    name: { 
        type: String,
        require : true
    }
})

module.exports = moongose.model("category",categorySchema)