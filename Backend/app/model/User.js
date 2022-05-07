const moongose = require('mongoose')

const userSchema = new moongose.Schema({
    name:{
        type:String,
        require :true
    },
    email: {
        type:String,
        require:true
    },
    password : {
        type:String,
        require:true
    },
    createdAt :{
        type:Date,
        default : Date.now()
    }
})
module.exports = moongose.model("User",userSchema);