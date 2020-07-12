const express = require('express')
const path = require('path')
const router = require('./apirouter.js')
const authrouter = require('./auth')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()



/*var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();*/

app.use(express.json())


if (process.env.NODE_ENV ==="production"){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })
    console.log(process.env.NODE_ENV)
}

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},()=>console.log("connected to MongoDB"))

const port = process.env.PORT || 5000


//if doesn't work, uncomment the json parse and add jsonParse as second param
app.post('/addhome',(req,res)=>{
    res.send(req.body)
})

app.use('/api',router)
app.use('/auth',authrouter)

app.listen(port,()=>{
    console.log('Server running on port: '+ port)
})