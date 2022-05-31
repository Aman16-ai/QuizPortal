const moongose = require('mongoose')

const userSchema = new moongose.Schema({
    firstName:{
        type:String,
        require :true
    },
    lastName: {
        type:String,
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