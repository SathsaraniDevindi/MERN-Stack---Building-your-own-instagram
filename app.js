const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys') 

require('./model/user.model')

app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("Error connecting to mongo",err)
})
//RDhvMHkbhgstNla8



app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
})
