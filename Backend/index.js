require("dotenv").config();
const express = require('express')
const app = express()
const router = require('./app/router')
const port = 5000
const connectDB = require('./db')
const cors = require("cors")
connectDB();

app.use(express.json())
app.use(cors())

app.use('/api',router)
app.get('/',(req,res)=> {
    return res.json({"message" : "Home"})
})
app.get('/test',(req,res)=> {
    console.log(req.query)
    console.log("quiz_id" in req.query)
    return res.json({test:"testing"})
})
app.listen(port,()=> {
    console.log(`Listing at ${port}`)
})
