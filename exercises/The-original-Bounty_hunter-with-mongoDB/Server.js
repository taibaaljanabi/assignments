const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 6000

// app.use("/bounties", require("./bountyRoutes"))


app.use(express.json())

mongoose.connect('mongodb://localhost:27017/bountydb',{useNewUrlParser: true},()=>{
console.log('connected to DB')
})

app.use('/bounties', require('./routes/bountyRoutes.js'))
app.use(err, req, res, next)

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})