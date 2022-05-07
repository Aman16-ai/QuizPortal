const moongose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/QuizPortal?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectDB = ()=> {
    moongose.connect(mongoURI,()=> {
        console.log("Connect to mongodb successfully");
    })
}
module.exports = connectDB;