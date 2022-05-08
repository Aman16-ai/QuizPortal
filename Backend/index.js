require("dotenv").config();
const express = require('express')
const app = express()
const router = require('./app/router')
const port = 5000
const connectDB = require('./db')

connectDB();

app.use(express.json())

app.use('/api',router)
app.get('/',(req,res)=> {
    return res.json({"message" : "Home"})
})
app.listen(port,()=> {
    console.log(`Listing at ${port}`)
})
