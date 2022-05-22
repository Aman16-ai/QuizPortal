const moongose = require("mongoose")
const quizSchema = new moongose.Schema({
    title: {
        type : String,
        require : true
    },
    createdBy: {
        type : moongose.Schema.Types.ObjectId,
        ref : "User"
    },
    createdAt : {
        type:Date,
        default : Date.now
    },
    category : {
        type : moongose.Schema.Types.ObjectId,
        ref : "category"
    },
    questionsAndAnswers : [
        {question : {type:String},
         answer1 : {type:String},
         answer2 : {type:String},
         answer3 : {type:String},
         answer4 : {type:String},
         correctAnswer : {type:String}   
        }

    ] 
})

module.exports = moongose.model("quiz",quizSchema)