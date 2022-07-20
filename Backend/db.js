const moongose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/QuizPortal?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// const mongoURI = "mongodb+srv://Aman:#Saxena7531@cluster0.tqhrfuk.mongodb.net/Quiz?retryWrites=true&w=majority"
const connectDB = ()=> {
    moongose.connect(mongoURI,()=> {
        console.log("Connect to mongodb successfully");
    })
}

// const connectDB = ()=> {
//     moongose.connect(mongoURI,{
//         useNewUrlParser:true,
//         useCreateIndex:true,
//         useUnifiedTopology:true,
//         useFindAndModify:false
//     },()=> {
//         console.log("connected to mongodb successfully")
//     })
// }
module.exports = connectDB;