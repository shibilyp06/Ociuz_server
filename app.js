const express = require('express')
const app = express()
require("dotenv").config()
const port = 5000
const mongoose = require('./config/config')
const cors = require('cors')
app.use(cors())
const userRoter = require("./router/userRouter")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',userRoter)
app.listen(port,()=>{
    console.log("server connected");
})