const moongose = require('mongoose')
const connectDB = ()=> {
    moongose.connect(process.env.MONGO_URL,()=> {
        console.log("Connect to mongodb successfully");
    })
}

module.exports = connectDB;