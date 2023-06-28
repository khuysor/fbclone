const express=require('express')
require('dotenv').config()

const user = require('./routes/user')

const app=express()
app.use(express.json())

app.use('/api/',user)

app.listen(process.env.port,()=>{
    console.log('api working on ',process.env.port);
})