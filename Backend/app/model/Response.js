const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
    quiz :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "quiz"
    },

    playedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    userQuestionResponse :  [
        {
            questionID : {
                type : String
            },
            userAnswer : {
                type : String
            },
            correctAnswer : {
                type : String
            }
        }
    ],
    score : {
        type : Number
    },

    playedAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Response",responseSchema)