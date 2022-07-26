const dotenv = require("dotenv")
const express = require('express')
const app = express()
const router = require('./app/router')
const connectDB = require('./db')
const cors = require("cors")

dotenv.config()
connectDB();

app.use(express.json())
app.use(cors())

app.use('/api',router)
app.get('/',(req,res)=> {
    return res.json({"message" : "Welcome to quiz portal backend developed by Aman saxena"})
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=> {
    console.log(`Listing at ${PORT}`)
})
